'use client'
import React, { useRef } from 'react'
import heroImg from '../public/home/hero.png'
import Image from 'next/image'
import ScrollProgressWithSections from "./StatusBar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
    
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

function Hero() {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
const textAnimate = useRef<HTMLHeadingElement>(null);

useEffect(() => {
  if (textAnimate.current) {
    gsap.from(textAnimate.current, {
      y: 400,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }
}, []);

  return (
    <div className=" bg-black relative  h-full w-full">
      {/* Background Image */}
      <Image
        src={heroImg} // replace with your image path
        alt="Hero Background"
        className=" h-[100vh] max-sm:opacity-65 max-md:object-cover object-contain"

      />
      <div  className="absolute top-0 inset-0 flex flex-col  z-40 px-24 max-xl:px-10 max-sm:px-2 justify-center ">
        <h1 ref={textAnimate} className="text-[64px] max-lg:text-[60px]  max-md:text-5xl max-sm:text-4xl  leading-[1.1] uppercase  tracking-widest font-(family-name:--font-secondary)   w-[50%] max-xl:w-[70%] max-lg:w-[90%]  font-bold text-white mb-4">
        The only
<span className=' text-primary-color'> impossible
journey </span> is
the one you
<span className=' text-primary-color'> never begin.</span>
        </h1>
        <div>

        <button  className="bg-primary-color my-4 font-(family-name:--font-secondary)   text-black px-16 py-4  font-semibold hover:opacity-90 cursor-pointer transition">
          Get Started
        </button>
        </div>
      </div>

      {/* Overlay Content */}
{/* <ScrollProgressWithSections /> */}
    </div>
  )
}

export default Hero;
