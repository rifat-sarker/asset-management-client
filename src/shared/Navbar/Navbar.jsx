import { Link } from "react-router-dom";

const Navbar = () => {
  const Navlinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/employee">Join as Employee</Link>
      </li>
      <li>
        <Link to="/admin">Join as Admin</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-screen-xl  mx-auto z-40 text-white bg-opacity-30 fixed ">
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
            className="menu text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            className="h-12  w-12 rounded-full"
            src={"https://i.ibb.co/Q8pSG87/7580b4102141269-5f2fed6475b53.jpg"}
            alt=""
          />
        </a>{" "}
        <span className="text-3xl font-bold">Innovi</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl menu-horizontal px-1">
          {Navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
