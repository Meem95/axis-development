
import slide2 from '../../assets/images/2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';
AOS.init();

const Feature = () => {
    return (
        <div>
            <section className="p-4 lg:p-8 bg-[#ECECFF] text-gray-100" >
	<div className="container mx-auto space-y-12">
		
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={slide2} alt="" className="h-96  aspect-video"  />
			<div className="flex flex-col justify-center flex-1 p-6 bg-white shadow-xl" >
				<span className="text-3xl uppercase text-black " data-aos="fade-right"
     data-aos-duration="1500">WELCOME</span>
				<h3 data-aos="fade-right"
     data-aos-duration="1500" className="text-4xl font-bold text-black">WE ARE CREATIVE BUILDING - DESIGN COMPANY</h3>
				<p data-aos="fade-right"
     data-aos-duration="1500" className="my-6 text-black">We Are Creative Building, a design company dedicated to crafting innovative spaces and structures.Transforming ideas into reality, our design company brings imagination to life through architectural ingenuity.</p>
				<Link to="/about"><button data-aos="fade-right"
     data-aos-duration="1500" className="btn btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-md bg-[#ECECFF] text-black font-bold">About</button></Link>
			</div>
			
		</div>
		
	</div>
</section>
        </div>
    );
};

export default Feature;