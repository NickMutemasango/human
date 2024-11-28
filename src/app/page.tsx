"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import About from "../../public/images/about.svg";
import Causes from "./components/causes";
import Offer from "./components/offer";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

import Child from "../../public/images/child.svg";
import Water from "../../public/images/water.svg";
import Treatment from "../../public/images/treatment.svg";

import T1 from "../../public/images/t1.svg";
import T2 from "../../public/images/T2.svg";

import C1 from "../../public/images/c1.svg";
import C2 from "../../public/images/c2.svg";
import C3 from "../../public/images/c3.svg";

// small screen backgrounds
import Smallbg1 from "../../public/images/small1.svg";
import Smallbg2 from "../../public/images/small2.svg";
import Smallbg3 from "../../public/images/small3.svg";
import Smallbg4 from "../../public/images/small4.svg";
import Smallbg5 from "../../public/images/small5.svg";

// big screen backgrounds
import Bigbg1 from "../../public/images/big1.svg";
import Bigbg2 from "../../public/images/big2.svg";
import Bigbg3 from "../../public/images/big3.svg";
import Bigbg4 from "../../public/images/big4.svg";

export default function Home() {
  const smallBackgrounds = [Smallbg1, Smallbg2, Smallbg3, Smallbg4, Smallbg5];
  const bigBackgrounds = [Bigbg1, Bigbg2, Bigbg3, Bigbg4];

  const [selected, setSelected] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = (index) => {
    setSelected(index);
  };

  // Detect screen size and set the default background
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.matchMedia("(max-width: 980px)").matches;
      setIsSmallScreen(isSmall);
      setCurrentIndex(0); // Set the default background to the first image for the current device
    };

    // Initial check and add event listener for resizing
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get the current background based on the screen size
  const currentBackground = isSmallScreen
    ? smallBackgrounds[currentIndex]
    : bigBackgrounds[currentIndex];

  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex ===
      (isSmallScreen ? smallBackgrounds : bigBackgrounds).length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (isSmallScreen ? smallBackgrounds : bigBackgrounds).length - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col ">
      <div className="bg-hero bg-cover  bg-no-repeat bg-center h-[100vh] w-[100%]">
       

        <div
          className="relative h-screen w-screen"
          style={{
            backgroundImage: `url(${currentBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/60 h-full w-full justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center text-center lg:space-y-5">
              <h1 className="text-white text-4xl font-semibold lg:w-[40%] xl:w-[30%]">
                Let's change the world with humanity
              </h1>
              <p className="text-white/50 lg:w-[44%] xl:w-[35%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                minim veniam, quis nostrud{" "}
              </p>
              <button className="bg-orange px-4 py-[6px] rounded-md flex justify-center items-center gap-2 text-white font-semibold">
                Learn more{" "}
                <div className="bg-white h-5 rounded-full w-5 flex justify-center items-center">
                  <FaArrowRight className="text-orange" />
                </div>
              </button>
            </div>
            <div className="flex justify-center lg:justify-between lg:items-center lg:top-0  h-full w-full absolute top-[65%] lg:px-10 py-[8px]">
              <button
                className="bg-green w-8 h-8 rounded-full mr-5 flex items-center justify-center"
                onClick={handlePrev}
              >
                <FaArrowLeft className="text-white" />
              </button>
              <button
                className="bg-green w-8 h-8 rounded-full flex items-center justify-center"
                onClick={handleNext}
              >
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="px-3 lg:px-10 pt-5 lg:pt-20 flex flex-col-reverse lg:flex-row lg:gap-3 xl:gap-5 pb-16">
        <div className="lg:w-1/2">
          <Image src={About} alt="" className="w-full xl:h-[80%] xl:w-full" />
        </div>
        <div className="flex flex-col space-y-4  md:items-center lg:items-start lg:w-1/2">
          <div className="bg-orange/25 text-orange font-bold w-[30%] md:w-[15%] lg:w-[22%] xl:w-[18%]  py-1 flex justify-center items-center rounded-[12px]">
            <h4>About us</h4>
          </div>
          <h1 className="font-bold text-3xl text-[#001D23] md:w-[70%] lg:w-[95%] xl:w-[80%]">
            We Help People In Need Around The World
          </h1>
          <div className="bg-orange rounded-md pb-[2px] w-full md:w-[70%] lg:w-[95%] xl:w-[80%]">
            <div className="flex flex-col gap-2 bg-grey rounded-sm px-4 py-2">
              <p className="text-sm xl:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                minim veniam, quis nostrud Lorem ipsum dolor sit amet
              </p>
              <div className="flex gap-2">
                <p className="font-bold">Arthur T Kunaka</p>
                <p className="text-base">CEO/Founder</p>
              </div>
            </div>
          </div>
          <p className="text-sm  md:w-[70%] lg:w-[95%] xl:text-base xl:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do minim veniam, quis nostrud{" "}
          </p>
          <div className="flex gap-5 pb-5 w-full  md:w-[70%] lg:w-[95%] xl:w-[80%]">
            <button className="bg-orange w-[45%] xl:w-[30%] py-[8px] rounded-md flex justify-center items-center gap-2 text-white font-semibold">
              Learn more{" "}
              <div className="bg-white h-5 rounded-full w-5 flex justify-center items-center">
                <HiArrowNarrowRight className="text-orange" />
              </div>
            </button>
            <button className="border border-orange w-[45%] xl:w-[30%] py-[8px] rounded-md flex justify-center items-center gap-2 text-orange font-semibold">
              Donate now{" "}
              <div className="bg-orange h-5 rounded-full w-5 flex justify-center items-center">
                <HiArrowNarrowRight className="text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div className="px-3 lg:px-10">
        <div className="px-3 lg:px-10 flex flex-col space-y-3  justify-center items-center bg-grey py-10">
          <div className="bg-orange/25 text-orange font-bold w-[40%] md:w-[20%] lg:w-[15%] xl:w-[13%]  py-1 flex justify-center items-center rounded-[12px] mb-10">
            <h4>Feature Causes</h4>
          </div>
          <h1 className="font-bold text-3xl pb-5 md:w-[50%] text-center xl:w-[30%]">
            Every Child Deserves The Opportunity To Learn
          </h1>
          <div className="flex flex-col gap-10 md:flex-row flex-wrap md:justify-between ">
            <Causes
              heading="Education For African Children"
              title="Education"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  
minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
              image={C1}
            />
            <Causes
              heading="Ensure Pure Drinking Water"
              title="Pure Water"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  
minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
              image={C2}
            />
            <Causes
              heading="Ensure Medical Treatment"
              title="Healthy Life"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  
minim veniam, quis nostrud Lorem ipsum dolor sit amet,"
              image={C3}
            />
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className="px-3 lg:px-16 flex flex-col space-y-3  justify-center items-center  py-10">
        <div className="bg-orange/25 text-orange font-bold w-[35%] md:w-[20%] lg:w-[15%] xl:w-[10%]  py-1 flex justify-center items-center rounded-[12px] mb-10">
          <h4>What we do</h4>
        </div>
        <h1 className="font-bold text-3xl pb-5 md:w-[50%] text-center xl:w-[30%]">
          Learn More What We Do And Get Involved
        </h1>
        <div className="flex flex-col gap-6 md:flex-row flex-wrap md:justify-between ">
          <Offer
            heading="Child Education "
            image={Child}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          />
          <Offer
            heading="Pure Drinking Water"
            image={Water}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          />
          <Offer
            heading="Medical Treatment"
            image={Treatment}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          />
        </div>
      </div>

      {/* Donate */}
      <div className=" bg-donate bg-center bg-cover bg-no-repeat ">
        <div className="bg-black/30 w-full h-[100%] px-5 py-7 md:py-10 xl:py-16 flex flex-col gap-5 md:items-center lg:flex-row">
          <div className="flex flex-col gap-4 text-white md:items-center lg:items-start ">
            <button className="bg-white w-[45%] md:w-[25%] xl:w-[25%] py-[8px]  rounded-2xl flex justify-center items-center gap-2 text-orange font-semibold">
              Donate now{" "}
              <div className="bg-orange h-5 rounded-full w-5 flex justify-center items-center">
                <HiArrowNarrowRight className="text-white" />
              </div>
            </button>
            <h2 className="font-bold text-2xl lg:w-[75%] xl:w-[65%]">
              Thanks For The Results Achieved With You
            </h2>
            <p className="md:w-[60%] md:text-center lg:text-start lg:w-[90%] xl:w-[75%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
              adipis elit, sed do minim
            </p>
          </div>

          <div className="bg-white px-5 py-5 flex flex-col gap-5 md:w-[80%] xl:py-10">
            <input
              type="text"
              placeholder="Your name"
              className="bg-grey w-full rounded-lg px-2 py-2"
            />
            <input
              type="email"
              placeholder="Your email"
              className="bg-grey w-full rounded-lg px-2 py-2"
            />
            <button className="bg-orange w-[45%] md:w-[35%] xl:w-[30%] py-[8px] rounded-md flex justify-center items-center gap-2 text-white font-semibold">
              Donate now{" "}
              <div className="bg-white h-5 rounded-full w-5 flex justify-center items-center">
                <HiArrowNarrowRight className="text-orange" />
              </div>
            </button>
            <div className="flex">
              {["$10", "$20", "$30"].map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`bg-grey flex justify-center items-center w-[35%] font-bold py-2 
            ${index === 0 ? "rounded-l-lg" : ""} 
            ${index === 2 ? "rounded-r-lg" : ""} 
            ${
              selected === index
                ? "border-orange  text-orange border-orange border-2"
                : ""
            }`}
                >
                  <p>{label}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-3 lg:px-16 flex flex-col space-y-3  justify-center items-center  py-10">
        <div className="bg-orange/25 text-orange font-bold w-[35%] md:w-[20%] lg:w-[15%] xl:w-[10%]  py-1 flex justify-center items-center rounded-[12px] mb-10">
          <h4>Testimonials</h4>
        </div>
        <h1 className="font-bold text-3xl pb-5 md:w-[50%] text-center xl:w-[30%]">
          Trusted By Thousands Of People And Non-profits
        </h1>
        <div className="flex flex-col gap-6 md:flex-row flex-wrap md:justify-between ">
          <Testimonials
            image={T1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipis elit, sed do minim"
            name="Arthur T Kunaka"
          />
          <Testimonials
            image={T2}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipis elit, sed do minim"
            name="Arthur T Kunaka"
          />
          <Testimonials
            image={T1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipis elit, sed do minim"
            name="Arthur T Kunaka"
          />
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
