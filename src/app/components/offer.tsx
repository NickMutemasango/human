import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image, { StaticImageData } from "next/image";


interface Offer{
heading: string
description: string
image: StaticImageData
}


const offer = (props:Offer) => {
  return (
    <div className="pb-2 pr-2 bg-grey rounded-md w-full  md:w-[46%] xl:w-[30%] ">
      <div className="flex flex-col justify-center bg-white hover:bg-black hover:text-white  rounded-lg items-center shadow-lg py-6 px-3 gap-3">
        <Image src={props.image} alt="" className="w-[35%] " />
        <h2 className="font-bold text-lg">{props.heading}</h2>
        <p className="text-center">
        {props.description}
        </p>
        <button className="border border-orange w-[45%] xl:w-[40%] py-[8px] rounded-md flex justify-center items-center gap-2 text-orange font-semibold">
          Learn more{" "}
          <div className="bg-orange h-5 rounded-full w-5 flex justify-center items-center">
            <HiArrowNarrowRight className="text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default offer;
