import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import userDefaultPic from '../../../assets/images/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
      logOut()
          .then()
          .catch()
  }
  return (
      <div className="navbar ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            > 
             <NavLink to='/'  className={({isActive})=> isActive? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn ' : 'font-bold text-[#2f400e] mt-4'}> 
            Home
          </NavLink>
             <NavLink to='/about'  className={({isActive})=> isActive? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn ' : 'font-bold text-[#2f400e] mt-4'}> 
             About Us
          </NavLink>
             <NavLink to='/contact'  className={({isActive})=> isActive? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn ' : 'font-bold text-[#2f400e] mt-4'}> 
             Contact Us
          </NavLink>
           
            </ul>
          </div>
         
          <img
            src={logo}
            className="max-w-20 bg-black p-2 rounded-lg shadow-2xl"
          />

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
          <NavLink to='/'  className={({isActive})=> isActive? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn ' : 'font-bold text-[#2f400e] mt-4'}> 
            Home
          </NavLink>
             <NavLink to='/about'  className={({isActive})=> isActive? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn ' : 'font-bold text-[#2f400e] mt-4'}> 
             About Us
          </NavLink>
             <NavLink to='/contact'  className={({isActive})=> isActive? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn ' : 'font-bold text-[#2f400e] mt-4'}> 
             Contact Us
          </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                    </div>
                </label>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }

             
        </div>
      </div>
  
  );
};

export default Navbar;
