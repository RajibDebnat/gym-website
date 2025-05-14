'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: 'FLEXI',
    price: '£99.99 / month',
    features: ['12 Classes Per Month', '3 Classes Per Week', 'No joining fees', 'JOIN TODAY'],
  },
  {
    title: 'ALL ACCESS',
    price: '£199.99 / month',
    features: ['Unlimited Classes Per Month', '3 Classes Per Day', 'No joining fees', 'JOIN TODAY'],
  },
  {
    title: 'OFF-PEAK',
    price: '£149.99 / month',
    features: ['20 Classes Per Month', '5 Classes Per Week', 'No joining fees', 'JOIN TODAY'],
  },
];

function Membership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          scrub: 2,
        },
      });

      tl.from(aboutRef.current, {
        x: -70,
        opacity: 0,
      }).from(
        subHeadingRef.current,
        {
          x: 20,
          opacity: 0,
        },
        '-=0.5' // overlaps the animations a little
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="membership" ref={sectionRef} className="relative my-16 px-4">
      {/* Headings */}
      <div className="relative max-sm:text-center font-bold mb-16">
        <h2
          ref={aboutRef}
          className="font-secondary uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl opacity-20 mb-4 text-center"
        >
          MEMBERSHIPS
        </h2>
        <span
          ref={subHeadingRef}
          className="absolute uppercase w-full z-30 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary left-1/2 translate-x-[-50%] -bottom-2"
        >
          MEMBERSHIPS
        </span>
      </div>

      {/* Section Number */}
      <h2 className="text-outline absolute text-black z-20 text-[120px] md:text-[160px] tracking-tight opacity-75 font-(family-name:--font-secondary) font-bold right-28 max-sm:right-0 max-sm:top-10 -top-10 select-none">
        04
      </h2>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 text-center ">
        {plans.map((plan, index) => {
          const isMiddle = index === 1;
          return (
            <div
              key={index}
              className={`bg-[#ffffff] font-secondary text-black shadow-xl p-8 py-12 transition-all duration-300 flex flex-col items-center 
              ${isMiddle ? 'scale-110 opacity-100' : 'opacity-70'}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
              <ul className="space-y-3 text-left mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <FaCheck />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="https://wa.me/8597613182?text=Hi%20I%20want%20to%20know%20more%20about%20your%20gym"
                className="flex justify-center"
              >
                <button className="mt-6 px-6 py-2 text-black font-extrabold bg-[#fff500]">
                  JOIN TODAY
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Membership;
