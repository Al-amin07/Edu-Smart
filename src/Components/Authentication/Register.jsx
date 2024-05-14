import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
const Register = () => {
  const { register, logOut } = useAuth();
  const navigate = useNavigate()
  const handleUserRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if (!/[A-Z]/.test(password)) {
      toast("Please Enter Uppercase");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast("Please Enter Lowercase");
      return;
    }
    // https://assignment-11-server-4.vercel.app
    if (password.length < 6) {
      toast("Pass Must be 6 Char");
      return;
    }
    // console.log(email, name, password, photo);
    register(email, password)
    .then(result => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            
          }).catch((error) => {
           console.log(error);
          });
          console.log(result.user);
          logOut()
          .then(() => {
          })
          .catch(error => console.log(error))


        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SuccessFully Register!!!",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/login')
    })
    .catch(error => toast(error.message))
  };
  return (
    <div
      style={{
        backgroundImage: "url('/res.avif')",
      }}
      className="hero bg-base-200 bg-cover bg-no-repeat bg-center  py-12 mt-12"
    >
      <div className="hero-content flex-col w-full   ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full border-2 max-w-lg shadow-2xl">
          <form onSubmit={handleUserRegister} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white text-lg">
                  Photo Url
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link text-white link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="px-8  pb-6">
            New to Website? Please{" "}
            <Link to="/login" className="text-blue-800 underline font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
