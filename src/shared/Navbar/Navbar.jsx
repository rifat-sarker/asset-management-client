import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [isAdmin ]= useAdmin();
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const Navlinks = (
    <>
      {user ? (
        isAdmin ? (
          <>
            <li>
              <Link to="/dashboard/adminHome">Home</Link>
            </li>
            <li>
              <Link to="/dashboard/assetList"> Asset List</Link>
            </li>
            <li>
              <Link to="/dashboard/addAsset">Add an Asset </Link>
            </li>
            <li>
              <Link to="/dashboard/allRequest">All Requests</Link>
            </li>
            <li>
              <Link to="/dashboard/customRequestList">Custom Requests List</Link>
            </li>
            <li>
              <Link to="/dashboard/employeeList">My Employee List</Link>
            </li>
            <li>
              <Link to="/dashboard/addEmployee">Add an Employee</Link>
            </li>
            <li>
              <details className="">
                <summary className="">Profile</summary>
                <ul className="menu dropdown-content z-[1] bg-base-100 rounded-box max-w-full">
                  <li>
                    <img
                      className="h-16 w-20 rounded-full"
                      src={user.photoURL}
                      alt="user_photo"
                    />
                  </li>
                  <li>
                    <p>{user.displayName}</p>
                  </li>
                  <li>
                    <Link onClick={handleLogOut}>LogOut</Link>
                  </li>
                </ul>
              </details>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/dashboard/employeeHome">Home</Link>
            </li>
            <li>
              <Link to="/dashboard/myAssets">My Assets</Link>
            </li>
            <li>
              <Link to="/dashboard/myTeam">My Team</Link>
            </li>
            <li>
              <Link to="/dashboard/requestAsset">Request for an Asset</Link>
            </li>
            <li>
              <Link to="/dashboard/customRequest">Make a custom request</Link>
            </li>
            <li>
              <details className="">
                <summary className="">Profile</summary>
                <ul className=" menu dropdown-content z-[1] bg-base-100 rounded-box max-w-full">
                  <li>
                    <img
                      className="h-16 w-20 rounded-full"
                      src={user.photoURL}
                      alt="user_photo"
                    />
                  </li>
                  <li>
                    <p>{user.displayName}</p>
                  </li>
                  <li>
                    <Link onClick={handleLogOut}>LogOut</Link>
                  </li>
                </ul>
              </details>
            </li>
          </>
        )
      ) : (
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
      )}
    </>
  );
  return (
    <div className="navbar bg-base-300 max-w-screen-x bg-opacity-30  mx-auto z-40 text-white sticky top-0">
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

        {user ? (
          <>
            <a className="btn btn-ghost text-xl">
              <img
                className="h-12  w-12 rounded-full"
                src={
                  "https://i.ibb.co/pz1zdcq/logo.jpg"
                }
                alt=""
              />
            </a>{" "}
            <span className="text-3xl font-bold">Sonexa</span>
          </>
        ) : (
          <>
            <a className="btn btn-ghost text-xl">
              <img
                className="h-12  w-12 rounded-full"
                src={
                  "https://i.ibb.co/Q8pSG87/7580b4102141269-5f2fed6475b53.jpg"
                }
                alt=""
              />
            </a>{" "}
            <span className="text-3xl font-bold">Innovi</span>
          </>
        )}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  font-semibold flex items-center menu-horizontal px-1">
          {Navlinks}
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
