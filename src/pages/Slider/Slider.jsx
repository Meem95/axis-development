import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import slide1 from '../../assets/images/s1.jpg';
import slide2 from '../../assets/images/s2.jpg';
import slide3 from '../../assets/images/s3.jpg';
const Slider = () => {
    return (
        <div>
    <Swiper navigation={true} modules={[Navigation]} loop={true}>
       
        <SwiperSlide >
            <div className="flex justify-center items-center  ">
                <img className='bg-no-repeat bg-cover w-full' src={slide1}/>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="slide slide2">
                <img className='bg-no-repeat bg-cover w-full' src={slide2}/>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="slide slide2">
                <img className='bg-no-repeat bg-cover w-full' src={slide3}/>
            </div>
        </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Slider;