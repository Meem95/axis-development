import { useLoaderData } from "react-router-dom";
import Clients from "../Clients/Clients";
import Feature from "../Features/Feature";
import Slider from "../Slider/Slider";
import Subscription from "../Subscription/Subscription";

import Residentials from "../Residentials/Residentials";

import 'animate.css';
import { Helmet } from "react-helmet";


const Home = () => {
    const residentials = useLoaderData();
    console.log(residentials)
  return (
    <div className=" m-0 p-0">
   <Helmet>
   <title> Axis | Home</title>
   </Helmet>
      <div>
        <Slider></Slider>
      </div>
      <div className="my-15">
        <Feature></Feature>
      </div>
    
      <div className="min-h-screen max-w-7xl mx-auto">
      <section className="py-6 sm:py-12 ">
        <div className=" p-6 mx-auto space-y-5">
        <div className="my-6 animate__animated animate__bounce">
            <h2 className="text-5xl text-center ">Residential</h2>
        </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {residentials.map((residential) => (
          <Residentials key={residential.id} cards={residential}></Residentials>
        ))}
          </div>
        </div>
      </section>
    </div>
      
      <Subscription></Subscription>
      <div className="mb-5">
        <Clients></Clients>
      </div>
    </div>
  );
};

export default Home;
