import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../../public/logo3.jpg";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { IoIosLogOut } from "react-icons/io";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Nav = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SuccessFully Log Out",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const navLinks = (
    <>
      <li>
        <NavLink className={"btn btn-ghost text-white font-medium"} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"btn btn-ghost text-white font-medium"}
          to="/assignment"
        >
          Assignments
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              className={"btn btn-ghost text-white font-medium"}
              to="/createassignment"
            >
              Create Assignments
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"btn btn-ghost text-white font-medium"}
              to="/pendingassignment"
            >
              Pending Assignments
            </NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            className={"btn btn-ghost text-white font-medium"}
            to="/register"
          >
            Register
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <nav className="navbar bg-[#3F6A7F] py-3 px-4 text-white mb-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="h-16 hidden md:inline-block w-16 rounded-full"
          src={logo}
          alt=""
        />
        <a className="btn btn-ghost text-xl">EduSmart</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{navLinks}</ul>
      </div>
      <div className="navbar-end mr-3">
        {user ? (
          // <button onClick={handleLogout} className="btn btn-error">Log Out</button>
          <div className="dropdown dropdown-bottom dropdown-end">
            {/* tabIndex={0} role="button" className="btn m-1" */}
            <div tabIndex={0} role='button' className="avatar btn btn-circle m-1">
              <div className="w-12 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content mt-2 z-[1] menu p-2 shadow bg-base-100 rounded-box w-60 space-y-2"
            >
              <Link to='/mysubmission'>
                <button className="btn">My Attempted Assignments</button>
              </Link>

              <li>
                <button onClick={handleLogout} className="btn">
                  log Out <IoIosLogOut className="text-lg"/>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn btn-primary text-white text-lg" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
