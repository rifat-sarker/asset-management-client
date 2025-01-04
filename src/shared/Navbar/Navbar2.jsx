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
    <nav className="bg-white border-b border-gray-200 px-4 py-3 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/favicon.svg" className="h-8 mr-2" alt="Logo" />
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            React
          </span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 dark:text-gray-300"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 md:flex-grow justify-center text-gray-600 dark:text-gray-300`}
        >
          {user && isAdmin ? (
            <>
              <li>
                <Link
                  to="/dashboard/adminHome"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/assetList"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Asset List
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/addAsset"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Add an Asset
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/allRequest"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  All Requests
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/customRequestList"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Custom Requests List
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/employeeList"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  My Employee List
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/addEmployee"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Add an Employee
                </Link>
              </li>
            </>
          ) : user ? (
            <>
              <li>
                <Link
                  to="/dashboard/employeeHome"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myAssets"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  My Assets
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myTeam"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  My Team
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/requestAsset"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Request for an Asset
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/customRequest"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Make a Custom Request
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/employee"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Join as Employee
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Join as Admin
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Right-Side Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <details className="group">
              <summary className="cursor-pointer flex items-center space-x-2 hover:text-blue-500 transition-colors duration-300">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
              </summary>
              <ul className="absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow-md rounded-lg p-2 w-48 z-10">
                <li className="py-2 px-3">
                  <span>{user?.email}</span>
                </li>
                <li className="py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md">
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </ul>
            </details>
          ) : (
            <Link
              to="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
