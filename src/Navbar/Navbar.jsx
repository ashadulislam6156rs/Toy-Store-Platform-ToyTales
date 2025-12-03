import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Navbar = () => {
  const { user, userLogOut, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        // Sign-out successful.
        toast.success(`Sign-out successful.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setUser(null);
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto md:px-5 z-50">
        <div className="navbar bg-base-100 py-0 md:py-2 sticky top-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden lg:px-3 lg:py-0 lg:mr-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
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
                tabIndex="-1"
                className="menu menu-sm gap-2 z-20 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
              >
                <li className="hover:text-[#258184]">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? " pb-1 bg-[rgb(37,129,132)] text-white" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-[#258184]">
                  <NavLink
                    to={"/toys"}
                    className={({ isActive }) =>
                      isActive ? "pb-1 bg-[#258184] text-white" : ""
                    }
                  >
                    Toys
                  </NavLink>
                </li>

                <li className="hover:text-[#258184]">
                  <NavLink
                    to={"/about-us"}
                    className={({ isActive }) =>
                      isActive ? "pb-1 bg-[#258184] text-white" : ""
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li className="hover:text-[#258184]">
                  <NavLink
                    to={"/contact-us"}
                    className={({ isActive }) =>
                      isActive ? "pb-1 bg-[#258184] text-white" : ""
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li className="hover:text-[#258184]">
                      <NavLink
                        to={"/myprofile"}
                        className={({ isActive }) =>
                          isActive ? " pb-1 bg-[#258184] text-white" : ""
                        }
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li className="hover:text-[#258184]">
                      <NavLink
                        to={"/mygift"}
                        className={({ isActive }) =>
                          isActive ? " pb-1 bg-[#258184] text-white" : ""
                        }
                      >
                        My Gifts
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link className="md:text-2xl text-xs font-bold text-[#258184]">
              Toy<span className="text-[#e54768]">Tales</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 gap-4 font-medium">
              <li className="hover:text-[#258184]">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 pb-1 text-[#258184] border-b-[#258184]"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-[#258184]">
                <NavLink
                  to={"/toys"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 pb-1 text-[#258184] border-b-[#258184]"
                      : ""
                  }
                >
                  Toys
                </NavLink>
              </li>
              <li className="hover:text-[#258184]">
                <NavLink
                  to={"/about-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 pb-1 text-[#258184] border-b-[#258184]"
                      : ""
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="hover:text-[#258184]">
                <NavLink
                  to={"/contact-us"}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 pb-1 text-[#258184] border-b-[#258184]"
                      : ""
                  }
                >
                  Contact us
                </NavLink>
              </li>
              {user && (
                <>
                  <li className="hover:text-[#258184]">
                    <NavLink
                      to={"/myprofile"}
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 pb-1 text-[#258184] border-b-[#258184]"
                          : ""
                      }
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li className="hover:text-[#258184]">
                    <NavLink
                      to={"/mygift"}
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 pb-1 text-[#258184] border-b-[#258184]"
                          : ""
                      }
                    >
                      Send Gifts
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-2 md:gap-3">
              <div title={`${user ? user.displayName : "No User Name"}`}>
                {user && user.photoURL && (
                  <div className="w-10 cursor-pointer h-10 border-2 border-blue-500 rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photoURL}
                    ></img>
                  </div>
                )}
              </div>
              <div>
                {user ? (
                  <Link
                    to={"/"}
                    onClick={handleLogOut}
                    className="btn px-4 md:px-5 border-0 py-0 md:py-2.5 bg-linear-to-r hover:bg-linear-to-l from-purple-600 to-pink-500 text-white font-semibold text-xs md:text-base"
                    type="button"
                  >
                    Log Out{" "}
                    <span className="ml-1">
                      <FaArrowRightToBracket />
                    </span>
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    className=" btn btn-sm md:btn-md rounded-md font-semibold text-xs md:text-base bg-[#ff0017] text-white hover:bg-teal-500 transition-colors duration-700 ease-in-out"
                  >
                    Log In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
