
import 'animate.css';
const About = () => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto mt-16">
        <div className="px-8 py-2 bg-[#1313130D] text-black ">
          <div className="py-2 font-bold text-center text-3xl animate__animated animate__bounce">
            <span>About Book Vibe</span>
          </div>
        </div>
        <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center">
        <img src="https://i.ibb.co/DRzfDyR/1.jpg"  alt="About Us" className="w-1/3 mr-8 rounded-lg shadow-lg" />
        <div className="w-2/3">
          <p className="text-lg mb-6">
            At Book Vibe, we believe in the power of literature to inspire, educate, and entertain. 
            Our mission is to connect readers with their next favorite book and create a vibrant 
            community of book lovers.
          </p>
          <p className="text-lg mb-6">
            Founded in [Year], Book Vibe has quickly become a trusted destination for book enthusiasts 
            of all ages. Whether you're searching for the latest bestseller, exploring classic literature, 
            or discovering hidden gems, we've got you covered.
          </p>
          <p className="text-lg mb-6">
            Our team of passionate readers handpicks each title in our curated collection, ensuring that 
            every book you find on our shelves is worth your time. From fiction to non-fiction, from 
            mystery to romance, from fantasy to science fiction – we've curated a diverse selection 
            to cater to every taste and interest.
          </p>
          <p className="text-lg mb-6">
            Book Vibe is more than just a bookstore; it's a community hub where book lovers can connect, 
            share recommendations, and participate in lively discussions. Join us for author events, 
            book clubs, and other exciting activities that celebrate the joy of reading.
          </p>
          <p className="text-lg">
            Thank you for choosing Book Vibe as your literary companion. Let's embark on a journey 
            through the pages together!
          </p>
        </div>
      </div>
        <h1 className="font-bold text-2xl text-center my-10"> Achivements</h1>
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
              <p className="text-sm sm:text-base">Published books</p>
            </div>
           
          </div>
        </section>
      </div>
    );
};

export default About;