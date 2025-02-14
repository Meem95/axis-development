import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import userDefaultPic from '../../../assets/images/user.png';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownLeft, setDropdownLeft] = useState(null);
  const [showDropdownRight, setShowDropdownRight] = useState(false);

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
              className="menu menu-sm  dropdown-content z-30 mt-3 p-2 shadow bg-base-100 rounded-box absolute"
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
              {
                ! user ?
                <NavLink to="/login" 
                className={({ isActive }) =>
                  isActive
                  ? ' font-bold mt-4 '
                    : 'font-bold  mt-4'
                }
              >
           Blog
          </NavLink> :
          <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Blog
              </NavLink>
              }

              



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
              {
                
            !user ? ( <NavLink
               to="/edit-profile"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn hidden'
                    : 'font-bold text-[#2f400e] mt-4 hidden'
                }
              >
                Update Profile
              </NavLink>) :
              ( <NavLink
               to="/edit-profile"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4 '
                }
              >
                Update Profile
              </NavLink>)
              }
             
            </ul>
          )}
        </div>

        <img src={logo} className="max-w-20 bg-black p-2 rounded-lg shadow-2xl" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 ">
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


          {
                ! user ?
                <NavLink to="/login" className={({ isActive }) =>
                  isActive
                    ? ' font-bold mt-4 '
                    : 'font-bold  mt-4'
                }
              >
           Blog
          </NavLink> :
          <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Blog
              </NavLink>
              }



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
          {
            !user ?(<NavLink
            to="/edit-profile"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn hidden'
                : 'font-bold text-[#2f400e] mt-4 hidden'
            }
          >
              Update Profile
          </NavLink>):<NavLink
            to="/edit-profile"
            className={({ isActive }) =>
              isActive
                ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn  '
                : 'font-bold text-[#2f400e] mt-4 '
            }
          >
              Update Profile
          </NavLink>

          }
          
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
              onClick={() => setShowDropdownRight(!showDropdownRight)}
            
            >
              <div className="w-16 rounded-full my-anchor-element">
                <img src={user?.photoURL || userDefaultPic} alt="User Avatar"   
               />
             
              </div>
              
            </label>
            <Tooltip anchorSelect=".my-anchor-element" className='z-30'  content= {user?.displayName || 'User'}>
             
             </Tooltip>
           
            {showDropdownRight && (
              <div className="absolute z-10 -left-[120px] bg-white p-5 border-gray-600 shadow-xl rounded-lg">
                <ul>
                <li className="border-b-2  border-red-200"><NavLink to="/profile" className=" text-[#2f400e] mt-4">
                  {user?.displayName || "User" }
                </NavLink></li>
                <li className="border-b-2 my-4 border-red-200">  <NavLink to="/edit-profile" className=" text-[#2f400e] mt-4">
                  Edit Profile
                </NavLink></li>
                <li > <button onClick={handleSignOut} className="btn  text-[#2f400e] ">
                  Logout
                </button></li>
                
              
               
                </ul>
              </div>
             
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;