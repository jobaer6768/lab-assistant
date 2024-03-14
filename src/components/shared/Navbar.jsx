import { Link } from "react-router-dom";

// Navbar component for navigation
const Navbar = () => {
  return (
    <div>
      {/* Navbar container */}
      <div className="container w-4/5 mx-auto">
        {/* Navbar layout */}
        <div className="navbar bg-base-100">
          {/* Start of navbar */}
          <div className="navbar-start">
            {/* Dropdown menu for small screens */}
            <div className="dropdown">
              {/* Toggle button for dropdown menu */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              {/* Dropdown menu items */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {/* Home link */}
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* Labs link */}
                <li>
                  <Link to="/labs">Labs</Link>
                </li>
              </ul>
            </div>
            {/* BSMRSTU CSE LOGO with link to home */}
            <Link to="/">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="/src/assets/images/cse-logo.jpg"
                alt=""
              />
            </Link>
          </div>
          {/* Center of navbar */}
          <div className="navbar-center hidden lg:flex">
            {/* Horizontal menu for larger screens */}
            <ul className="menu menu-horizontal px-1">
              {/* Home link */}
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* Labs link */}
              <li>
                <Link to="/labs">Labs</Link>
              </li>
            </ul>
          </div>
          {/* End of navbar */}
          {/* Right side of navbar */}
          <div className="navbar-end">
            {/* Login link */}
            <Link to="/login" className="btn text-orange-600 bg-lime-300">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
