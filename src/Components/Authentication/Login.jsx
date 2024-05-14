import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { logIn, githubLogin, googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleUserLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "SuccessFully Login",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(result.user);
              navigate(location?.state ? location.state : '/')
        })
        .catch(error => toast(error.message))


    }

    const handleGoogleLogin = () => {
      googleLogin()
      .then(result => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SuccessFully Login",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => console.log(error))
    }

    const handleGithubLogin = () => {
      githubLogin()
      .then(result => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SuccessFully Login",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => console.log(error))
    }
    
    
  return (
    <div
      style={{
        backgroundImage: "url('/log2.jpeg')",
      }}
      className="hero bg-base-200 bg-cover bg-no-repeat bg-center py-12 mt-12"
    >
      <div className="hero-content flex-col w-full  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl border-2">
          <form onSubmit={handleUserLogin} className="card-body ">
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
                <a href="#" className="label-text-alt link text-white link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <h1 className="text-3xl font-medium text-center text-white">Sign in With</h1>
            <div className="flex justify-center gap-3 my-3">
              <button onClick={handleGoogleLogin} className="btn btn-outline text-lg"><FcGoogle className="text-2xl"/> Google</button>
              <button onClick={handleGithubLogin} className="btn btn-outline text-lg"><BsGithub className="text-2xl"/> Github</button>
            </div>
            <p className="px-8 text-white pb-6">New to Website? Please <Link to='/register' className="text-blue-800 underline font-bold">Register</Link></p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
