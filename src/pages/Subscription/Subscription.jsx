import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Subscription = () => {
  return (
    <div
      className="w-full bg-gray-500 mb-14 bg-no-repeat bg-cover " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
      style={{
        backgroundImage: "url('https://i.ibb.co/VYYFDq3/real-estate-agent-offer-house-600nw-363324191.webp')",
      }}
    >
      <div className=" flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">
          Get Our Updates
        </h1>
        <p className=" pb-8 text-2xl font-bold antialiased text-center text-white ">
          Find out Latest Everything
        </p>
        <div className="flex flex-row border-0">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold border-1  rounded-r-lg sm:w-1/3 bg-[#ECECFF] text-black"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
