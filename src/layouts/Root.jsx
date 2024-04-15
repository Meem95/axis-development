import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Root = () => {
    return (
    <div >
        <div className="max-w-7xl mx-auto font-poppins ">
            <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-300px)]">
            <Outlet/>
        </div>
        <Footer></Footer>
    </div>
    
       
            
        
    );
};

export default Root;