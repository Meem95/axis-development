import Clients from "../Clients/Clients";
import Feature from "../Features/Feature";
import Slider from "../Slider/Slider";
import Subscription from "../Subscription/Subscription";


const Home = () => {
    return (
        <div className=" m-0 p-0">
        <div>
        <Slider></Slider>
        </div>
        <div className="my-20">
            <Feature></Feature>
        </div>
       
           <Subscription></Subscription>
           <div className="mb-5">
            <Clients></Clients>
           </div>
        </div>
    );
};

export default Home;