const Navbar = () => {
  return <div>
    <div className="container w-4/5 mx-auto">
      <div className=" navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Department</a></li>
              <li><a>Upload</a></li>
              <li><a>Login</a></li>
            </ul>
          </div>
          {/* BSMRSTU CSE LOGO */}
          <a><img className="w-12 h-12 md:w-16 md:h-16" src="/src/assets/images/cse-logo.jpg" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Department</a></li>
            <li><a>Upload</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-orange-600 bg-lime-300 ">Download</a>
        </div>
      </div>
    </div>
  </div>;
};

export default Navbar;
