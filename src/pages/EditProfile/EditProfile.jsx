import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import 'animate.css';
const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName || '');

  useEffect(() => {
    AOS.init();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile({ displayName: name })
      .then(() => {
        console.log('Name updated successfully:', name);
      })
      .catch((error) => {
        console.error('Error updating name:', error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-gray-100">
      <div
        className="max-w-md w-full p-6 space-y-4 bg-gray-900 text-gray-100 border border-gray-800 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-lg font-semibold sm:text-2xl animate__animated animate__bounce">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="mt-1 p-2 w-full bg-gray-700 text-gray-100 border border-gray-700 rounded-md"
              required
            />
          </div>
         
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
