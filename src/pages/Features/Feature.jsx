
import slide2 from '../../assets/images/2.jpg';
const Feature = () => {
    return (
        <div>
            <section className="p-4 lg:p-8 bg-[#ECECFF] text-gray-100">
	<div className="container mx-auto space-y-12">
		
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={slide2} alt="" className="h-96  aspect-video"  />
			<div className="flex flex-col justify-center flex-1 p-6 bg-[#C2C0FF]">
				<span className="text-3xl uppercase text-black">WELCOME</span>
				<h3 className="text-4xl font-bold text-black">WE ARE CREATIVE BUILDING - DESIGN COMPANY</h3>
				<p className="my-6 text-black">We Are Creative Building, a design company dedicated to crafting innovative spaces and structures.Transforming ideas into reality, our design company brings imagination to life through architectural ingenuity.</p>
				<button type="button" className="self-start btn bg-gray-100 text-black btn-warning btn-wide">About </button>
                {/* <button type="button" className="btn btn-outline btn-warning btn-wide">Wide</button> */}
			</div>
		</div>
		
	</div>
</section>
        </div>
    );
};

export default Feature;