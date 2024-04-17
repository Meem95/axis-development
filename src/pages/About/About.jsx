
import 'animate.css';
import { Helmet } from 'react-helmet';
import img from '../../assets/images/s4.jpg';
const About = () => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto mt-16">
        <Helmet>
   <title> Axis | About Us</title>
   </Helmet>
        <div className="px-8 py-2 bg-[#1313130D] text-black ">
          <div className="py-2 font-bold text-center text-3xl animate__animated animate__bounce">
            <span>About Us</span>
          </div>
        </div>
        <div className=" mx-auto py-8 flex flex-col lg:flex-row items-center">
        <img src={img}  alt="About Us" className="w-1/3 h-full mr-8 rounded-lg shadow-lg " />
        <div className="w-2/3">
          <p className="text-lg mb-6">
          Welcome to Axis Development, where we specialize in helping you find the perfect residential property to call home. With a deep understanding of the local market and a commitment to personalized service, we are dedicated to making your real estate experience seamless and rewarding. Whether you are a first-time buyer, seasoned investor, or looking to sell your home, our team of professionals is here to guide you every step of the way with integrity and expertise.
          </p>
          <p className="text-lg mb-6">
          At Axis Development, we prioritize your needs and goals above all else. With a focus on transparency, communication, and client satisfaction, we strive to exceed your expectations and build lasting relationships based on trust and respect. Let us be your partner in realizing your real estate dreams.
          </p>
        
         
        </div>
      </div>
        <h1 className="font-bold text-2xl text-center my-10"> ACHIEVEMENTS</h1>
        <section className="p-6 bg-[#1313130D] text-black mb-6">
        
          <div className="container mx-auto grid justify-center grid-cols-1 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
              <p className="text-sm sm:text-base">Customers</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
              <p className="text-sm sm:text-base">Followers on social media</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">300</p>
              <p className="text-sm sm:text-base">Sales</p>
            </div>
           
          </div>
        </section>
      </div>
    );
};

export default About;