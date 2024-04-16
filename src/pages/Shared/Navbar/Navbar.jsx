import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import userDefaultPic from '../../../assets/images/user.png';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownLeft, setDropdownLeft] = useState(null);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };

  const toggleDropdown = (left) => {
    setShowDropdown(!showDropdown);
    setDropdownLeft(left);
  };

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => toggleDropdown(0)}
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
          {showDropdown && (
            <ul
              className="menu menu-sm dropdown-content z-30 mt-3 p-2 shadow bg-base-100 rounded-box"
              style={{ left: dropdownLeft }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Contact Us
              </NavLink>
            </ul>
          )}
        </div>

        <img src={logo} className="max-w-20 bg-black p-2 rounded-lg shadow-2xl" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                : 'font-bold text-[#2f400e] mt-4'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                : 'font-bold text-[#2f400e] mt-4'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                : 'font-bold text-[#2f400e] mt-4'
            }
          >
            Contact Us
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end lg:mr-16">
        {!user ? (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        ) : (
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              onClick={() => toggleDropdown(-120)}
            >
              <div className="w-16 rounded-full">
                <img src={user?.photoURL || userDefaultPic } alt="User Avatar" />
              </div>
            </label>
            {showDropdown && (
              <ul
                className="menu menu-sm dropdown-content z-30 mt-3 bg-[#1313130D] w-36 p-2 shadow bg-base-100 rounded-box"
                style={{ left: dropdownLeft }}
              >
                <NavLink to="/profile" className="font-bold text-[#2f400e] mt-4">
                  {user?.displayName || "User" }
                </NavLink>
                <NavLink to="/edit-profile" className="font-bold text-[#2f400e] mt-4">
                  Edit Profile
                </NavLink>
                <button onClick={handleSignOut} className="btn font-bold text-[#2f400e] mt-4">
                  Sign Out
                </button>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
