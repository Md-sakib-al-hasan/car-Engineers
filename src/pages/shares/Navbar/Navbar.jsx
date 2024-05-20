import { Link } from "react-router-dom";
import logo from "../../../images/about_us/logo.svg";
import Lists from "./Lists";
export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
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
            <Lists ulstyle="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"></Lists>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img width="50%" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Lists ulstyle="menu menu-horizontal px-5"></Lists>
        </div>
        <div className="navbar-end ">
          <a className="border border-red-500 py-1 px-3 rounded-md">
            Applicatian
          </a>
        </div>
      </div>
    </div>
  );
}
