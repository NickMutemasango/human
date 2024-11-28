import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image, { StaticImageData } from "next/image";


interface Testimonials {
image: StaticImageData
description: string
name: string
}


const testimonials = (props:Testimonials) => {
  return (
    <div className="flex flex-col shadow-lg rounded-b-lg md:w-[45%] xl:w-[30%]">
      <div className="flex justify-center items-center hover:text-orange gap-6 py-7">
        <HiArrowNarrowRight className="w-[40%]"/>
       <div className="rounded-full border-4 hover:border-orange">
       <Image src={props.image} alt="" className="w-full h-full"/>
       </div>
        <HiArrowNarrowRight className="w-[40%]"/>
      </div>
      <div className="bg-grey hover:bg-orange hover:text-white text-black rounded-xl px-3 py-6 flex flex-col justify-center items-center gap-3">
        <p className="text-center text-xs">
         {props.description}
        </p>
        <h3 className="font-bold">{props.name}</h3>
        <p>UI/UX Designer</p>
      </div>
    </div>
  );
};

export default testimonials;
