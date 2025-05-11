'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import aboutImg from '../public/others/whoweare.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Aboutus() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          scrub: 2,
        },
      });

      tl.from(aboutRef.current, {
        x: -200,
        opacity: 0,
      }).from(subHeadingRef.current, {
        x: 20,
        opacity: 0,
      }, "-=0.5");

      const fadeTexts = gsap.utils.toArray(".fade-text");
      gsap.from(fadeTexts, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          // end: "bottom 20%",
          scrub: 2,
        },
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-4 md:px-16 relative">
      <div className='relative'>
        <h2 ref={aboutRef} className='text-8xl max-lg:text-6xl max-md:text-5xl text-center font-bold opacity-20 font-(family-name:--font-secondary) mb-4'>
          WHO WE ARE
        </h2>
        <span ref={subHeadingRef} className='absolute z-30 max-lg:text-4xl max-md:text-2xl -bottom-8 left-[50%] text-6xl font-bold font-(family-name:--font-secondary) translate-x-[-50%]'>
          WHO WE ARE
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left side */}
        <div className="relative mt-14 w-full md:w-1/2">
          <h2 className="text-outline absolute text-black z-20 text-[120px] md:text-[160px] tracking-tight opacity-75 font-(family-name:--font-secondary) max-md:-top-20 font-bold -top-40 -left-4 md:-left-10 select-none">
            01
          </h2>
          <Image
            src={aboutImg}
            alt="in a gym a person pulling the rope"
            className="w-full h-auto rounded-md object-cover z-10 relative"
            height={500}
            width={500}
          />
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 z-10">
          <p className="fade-text text-gray-300 mb-4 text-lg font-(family-name:--font-primary)">
            At Journey London we believe CrossFitters come in all shapes and sizes, we are all on a journey towards our own personal best health and fitness levels. A journey that makes us better as athletes, friends and people.
          </p>
          <p className="fade-text text-gray-300 mb-4 text-lg font-(family-name:--font-primary)">
            Our facility is unlike any other gym you’ve been to before. We pride ourselves not only in providing world class CrossFit training, but we also believe in creating a motivating and dynamic environment. We are the community dedicated to your human evolution, one workout at a time.
          </p>
          <p className="fade-text text-gray-300 text-lg font-(family-name:--font-primary)">
            Come in for a free trial class! Lose some body fat, gain some friends, and get fit for life!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
