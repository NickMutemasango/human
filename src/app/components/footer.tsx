import React from "react";
import Image from "next/image";
import Footer from "../../../public/images/footer.svg";
import Facebook from "../../../public/images/fb.svg";
import Insta from "../../../public/images/insta.svg";
import Twiiter from "../../../public/images/tw.svg";
import Link from "next/link";

const footer = () => {
  return (
    <div className="bg-green">
      <div className=" flex flex-col px-3 py-6 text-white gap-10 lg:flex-row lg:justify-between">
        <div className="text-white flex flex-col gap-5 lg:w-[15%] xl:w-[18%]">
          <Image src={Footer} alt="" className="w-[50%] md:w-[40%] lg:w-[80%] xl:w-[60%] " />
          <p className="w-[60%] md:w-[45%] lg:w-[100%] xl:w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            minim{" "}
          </p>
          <div className="flex gap-6">
            <Image src={Twiiter} alt="" />
            <Image src={Facebook} alt="" />
            <Image src={Insta} alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl pb-6">Quick Links</h1>
          <div className="flex flex-col gap-3">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/">About</Link>
            </div>
            <div>
              <Link href="/">Causes</Link>
            </div>
            <div>
              <Link href="/">Pages</Link>
            </div>
            <div>
              <Link href="/">Contact</Link>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col">
        <h1 className="font-bold text-xl pb-6">Address</h1>
      </div> */}
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl pb-3">Newsletter</h1>
          <p className="w-[60%] md:w-[45%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className="relative bg-transparent border border-orange w-[90%] md:w-[55%] lg:w-[70%]  xl:w-[70%] rounded-lg  flex justify-center items-center px-2 h-[6vh]">
            <input
              type="text"
              className="w-full h-full bg-transparent outline-none rounded-lg"
              placeholder="Your email"
            />
            <button className="font-bold absolute right-1 bg-orange text-white text-lg py-[4px] xl:py-[2px] xl:px-3 md:py-[8px] lg:py-[2px] md:px-5 px-4 rounded-lg">
              Sign-up
            </button>
          </div>
        </div>
      </div>

      <div className="pb-5">
        <hr className="pb-4" />

        <div className="flex flex-col gap-2 md:flex-row text-white px-3 md:justify-between">
          <p className="text-xs">
            Copyright 2023{" "}
            <span className="text-blue font-bold"> Xcrodema </span>
            <span className="text-orange font-bold">Pigmentosum. </span>All
            rights reserved<span></span>
          </p>
          <p className="text-xs font-thin">
            Designed by{" "}
            <span className="text-orange font-bold">Arthur Kunaka</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
