import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

export default function Navbar2() {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 dark:bg-gray-800 relative z-40">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Innovi
          </span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 dark:text-gray-300 absolute top-3 right-4 z-50"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Drawer Menu (Mobile) */}
        <div
          className={`fixed top-0 right-0 h-auto bg-gray-800 text-white transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden w-full shadow-lg z-40`}
        >
          <ul className="flex flex-col items-center justify-center space-y-4 p-4">
            {user && isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/adminHome">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/assetList">Asset List</Link>
                </li>
                <li>
                  <Link to="/dashboard/addAsset">Add an Asset</Link>
                </li>
                <li>
                  <Link to="/dashboard/allRequest">All Requests</Link>
                </li>
                <li>
                  <Link to="/dashboard/customRequestList">
                    Custom Requests List
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/employeeList">My Employee List</Link>
                </li>
                <li>
                  <Link to="/dashboard/addEmployee">Add an Employee</Link>
                </li>
              </>
            ) : user ? (
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
                  <Link to="/dashboard/customRequest">
                    Make a Custom Request
                  </Link>
                </li>
              </>
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
              </>
            )}
            {user && (
              <li>
                <button onClick={handleLogOut} className="text-red-500">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-6 text-white">
            {user && isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/adminHome">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/assetList">Asset List</Link>
                </li>
                <li>
                  <Link to="/dashboard/addAsset">Add an Asset</Link>
                </li>
                <li>
                  <Link to="/dashboard/allRequest">All Requests</Link>
                </li>
                <li>
                  <Link to="/dashboard/customRequestList">
                    Custom Requests List
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/employeeList">My Employee List</Link>
                </li>
                <li>
                  <Link to="/dashboard/addEmployee">Add an Employee</Link>
                </li>
              </>
            ) : user ? (
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
                  <Link to="/dashboard/customRequest">
                    Make a Custom Request
                  </Link>
                </li>
              </>
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
                  <Link
                    to="/login"
                    className=" hover:text-blue-500 transition-colors duration-300"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <button onClick={handleLogOut} className="text-red-500">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
