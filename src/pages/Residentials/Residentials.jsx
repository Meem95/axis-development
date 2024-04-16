import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { BiCategoryAlt } from "react-icons/bi";
import { CiSquareAlert, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Residentials = ({ cards }) => {
    const { estate_title, facilities, image, description, id, segment_name, area, price, status, build, location} = cards;

    return (
        <div>
            <div className="md:w-1/3 lg:w-1/4 p-4" data-aos="zoom-in" data-aos-duration="1500">
                <div className="card lg:w-96 bg-base-100 shadow-xl relative">
                    <div className="relative">
                        <span className="absolute top-0 left-0 bg-[#2f400e] text-white rounded-2xl p-1 w-16 mt-3 font-bold text-center">{status}</span>
                        <figure>
                            <img className="" src={image} alt="Shoes" />
                        </figure>
                    </div>
                    <div className="card-actions justify-evenly bg-[#2f400e] p-1">
                        <div className="text-white flex p-1">
                            <p className="text-xs uppercase font-bold space-x-2">
                                {facilities.map((facility, idx) => (
                                    <span key={idx} className="p-2"> #{facility} </span>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-black">
                            {estate_title}
                            <div className="badge badge-neutral badge-outline">{price}</div>
                        </h2>
                        <div className="flex"><CiLocationOn /> <span className="text-[#2f400e]"> {location}</span></div>
                        {description.length > 200 ? (
                            <p className="text-black">
                                {description.slice(0, 200)}{" "}
                                <Link to={`/residential/${id}`} className="text-blue-600 font-bold">
                                    Read More...
                                </Link>
                            </p>
                        ) : (
                            <p className="text-black">{description}</p>
                        )}
                        <div className="card-actions justify-evenly bg-[#ECECFF] p-1 rounded-xl">
                            <div className="text-black flex p-1"><CiSquareAlert /> {area}</div>
                            <div className="text-black flex p-1"><BiCategoryAlt /> {segment_name}</div>
                            <div className="text-black flex p-1"> <SlCalender /> {build}</div>
                        </div>
                        <div className="text-center">
                            <Link to={`/residential/${id}`}>
                                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-[#ECECFF] text-black font-bold">View Property</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Residentials;
