import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import {updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
const Register = () => {
    
    const { createUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const displayName = form.get("displayName");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    
    console.log(displayName, photoURL, email, password);
    
     // Password validation
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
     if (!passwordRegex.test(password)) {
         toast.error('Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
         return;
     }
     
    //create user
    createUser(email, password)
            .then(result => {
              console.log(result);
              updateProfile(result.user,
                 {displayName,photoURL}
                 
              ).then(() => {
                toast.success('Registration successful!');
                // navigate after login
                navigate(location?.state ? location.state : '/');
              }).catch((error) => {
                console.error(error)
              });
                console.log("value",result.user)
               
            })
            .catch(error => {
                console.error(error)
            })
  };
  const togglePasswordVisibility = () => {
    
    setShowPass(!showPass);
    console.log(showPass)
  };
  console.log(showPass)
  return (
    <div>
    <Helmet>
   <title> Axis | Registration</title>
   </Helmet>
        <div className="px-8 py-2 bg-[#1313130D] text-black ">
          <div className="py-2 font-bold text-center text-2xl animate__animated animate__bounce">
            <span >Please Registration</span>
          </div>
        </div>
        <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto p-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="displayName"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className=" label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 mt-8 flex items-center  p-3 text-gray-600 hover:text-gray-900"
            >
              {showPass ? <GoEyeClosed /> :<FaEye />}
            </button>
          
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#ECECFF] text-black">Registration</button>
          </div>
        </form>
        <p className="text-center mt-4 mb-6">
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            Login
          </Link>
        </p>
    </div>
  );
};

export default Register;
