import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import userDefaultPic from '../../assets/images/user.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from 'react-helmet';

AOS.init();
const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center mt-12  text-gray-100">
    <Helmet>
   <title> Axis | Profile</title>
   </Helmet>
      <div data-aos="fade-top"
     data-aos-duration="1500" className="max-w-md w-full p-6 space-y-4 bg-gray-900 text-gray-100 border border-gray-800 rounded-lg shadow-lg">
        <img data-aos="fade-top"
     data-aos-duration="1500" src={user?.photoURL || userDefaultPic } alt="Profile" className="w-24 h-24 mx-auto rounded-full" />
        <div className="text-center" data-aos="fade-top"
     data-aos-duration="1500">
          <h2 className="text-lg font-semibold sm:text-2xl">{user.displayName}</h2>
          <p className="text-sm sm:text-base text-gray-400">{user.email}</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
            <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
              {/* GitHub icon */}
            </svg>
          </a>
          <a href="#" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
              {/* Dribble icon */}
            </svg>
          </a>
          <a href="#" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
              {/* Twitter icon */}
            </svg>
          </a>
          <a href="#" className="p-2 rounded-md text-gray-100 hover:text-violet-400">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
              {/* Email icon */}
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
