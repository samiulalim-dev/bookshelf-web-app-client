import React, { use } from "react";
import { FaBookOpen, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { users, signOutUser } = use(AuthContext);

  const handleLogoutBtn = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign Out Successfully Done✅");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="bg-base-100 py-2 shadow-sm">
      <div className="navbar w-11/12 mx-auto ">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-700" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Bookshelf"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-700" : "text-black"
                  }
                >
                  Bookshelf
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-700" : "text-black"
                  }
                >
                  About Us
                </NavLink>
              </li>
              {users && (
                <>
                  <li>
                    <NavLink
                      to="/myBooks"
                      className={({ isActive }) =>
                        isActive ? "text-indigo-700" : "text-black"
                      }
                    >
                      My Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/addBooks"
                      className={({ isActive }) =>
                        isActive ? "text-indigo-700" : "text-black"
                      }
                    >
                      Add Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        isActive ? "text-indigo-700" : "text-black"
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link className="flex items-center gap-1" to="/">
            <span className=" text-4xl md:text-5xl   text-purple-600">
              {" "}
              <FaBookOpen></FaBookOpen>{" "}
            </span>
            <span className=" text-xl md:text-2xl font-medium md:font-semibold">
              BookShelf
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-700" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Bookshelf"
                className={({ isActive }) =>
                  isActive ? "text-indigo-700" : "text-black"
                }
              >
                Bookshelf
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? "text-indigo-700" : "text-black"
                }
              >
                About Us
              </NavLink>
            </li>
            {users && (
              <>
                <li>
                  <NavLink
                    to="/myBooks"
                    className={({ isActive }) =>
                      isActive ? "text-indigo-700" : "text-black"
                    }
                  >
                    My Books
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addBooks"
                    className={({ isActive }) =>
                      isActive ? "text-indigo-700" : "text-black"
                    }
                  >
                    Add Books
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "text-indigo-700" : "text-black"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {users ? (
            <button
              onClick={handleLogoutBtn}
              className="btn bg-purple-600 text-white"
            >
              <FaSignOutAlt></FaSignOutAlt> Logout
            </button>
          ) : (
            <Link to="/logIn" className="btn bg-purple-600 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
