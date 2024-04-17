
import 'animate.css';
import Marquee from "react-fast-marquee";



const Clients = () => {
    return (
        <div> 
        <div className="my-6 animate__animated animate__bounce">
            <h2 className="text-4xl text-center font-bold">Our Clients</h2>
        </div>
        <Marquee pauseOnHover={true} speed={100}>
       <img src='https://i.ibb.co/429fqZB/1.png' style={{ border: "2px solid black", marginRight: "20px" }} alt="Image 1" />
       <img src='https://i.ibb.co/5hPZxG3/2.png' style={{ border: "2px solid black", marginRight: "20px" }} alt="Image 1" />
       <img src='https://i.ibb.co/WVF9SWB/3.png' style={{ border: "2px solid black", marginRight: "20px" }} alt="Image 1" />
       <img src='https://i.ibb.co/48WvR1h/4.png' style={{ border: "2px solid black", marginRight: "20px" }} alt="Image 1" />
       <img src='https://i.ibb.co/fQ8NH7N/5.png' style={{ border: "2px solid black", marginRight: "20px" }} alt="Image 1" />
     
    </Marquee>
            
        </div>
    );
};

export default Clients;