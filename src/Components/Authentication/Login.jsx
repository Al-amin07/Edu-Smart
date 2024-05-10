import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";




const Login = () => {
    const { logIn } = useAuth();
    const handleUserLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result => console.log(result.user))
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
         <div>

         </div>
            <p className="px-8 text-white pb-6">New to Website? Please <Link to='/register' className="text-blue-800 underline font-bold">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
