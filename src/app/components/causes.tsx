import React from "react";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

interface Causes{
heading: string
description: string
title: string
image: string
}

const causes = (props:Causes) => {



  return (
    <div className="bg-orange pt-1 rounded-xl relative flex flex-col items-center w-full md:w-[46%] shadow-lg  xl:w-[30%]">
      <div>
        <div className="bg-white rounded-md flex flex-col space-y-4 px-4 lg:px-2 justify-center items-center">
          <h1 className="font-bold text-[18px] pt-10">
            {props.heading}
          </h1>
          <p className="text-center text-lg pb-6">
           {props.description}
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <Image src={props.image} alt="Cause" className=""/>
          <div className="absolute    bg-black/35 w-full h-full flex justify-center items-center">
          <button className="border  border-orange w-[45%] xl:w-[40%] py-[8px] rounded-md flex justify-center items-center gap-2 text-orange font-semibold">
            Read More{" "}
            <div className="bg-orange h-5 rounded-full w-5 flex justify-center items-center">
              <HiArrowNarrowRight className="text-white" />
            </div>
          </button>
          </div>
        </div>
      </div>
      <div className="bg-orange py-[2px] w-[35%] flex justify-center items-center absolute top-0">
        <h2 className="text-white text-xl">{props.title}</h2>
      </div>
    </div>
  );
};

export default causes;
