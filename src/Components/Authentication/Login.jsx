const Login = () => {
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
        <div className="card shrink-0 w-full max-w-lg shadow-2xl border-white">
          <form className="card-body border-2">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
