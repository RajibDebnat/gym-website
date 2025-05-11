import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { classesData } from "../data"; // Adjust this path if needed
import Image from "next/image";

function Classes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          scrub: 2,
        },
      });

      tl.from(aboutRef.current, {
        x: -90,
        opacity: 0,
      }).from(
        subHeadingRef.current,
        {
          x: 20,
          opacity: 0,
        },
        "-=0.5"
      );

      const fadeTexts = gsap.utils.toArray(".fade-text");
      gsap.from(fadeTexts, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 0%",
          end: "bottom 20%",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="relative text-center font-bold mb-16">
        <h2
          ref={aboutRef}
          className="text-5xl sm:text-6xl text-center lg:text-7xl xl:text-8xl opacity-20 font-[var(--font-secondary)] mb-4"
        >
          Featured Classes
        </h2>
        <span
          ref={subHeadingRef}
          className="absolute w-full z-30 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[var(--font-secondary)] left-1/2 translate-x-[-50%] -bottom-2 max-sm:bootom-2 "
        >
          Featured Classes
        </span>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
        {classesData.map((classItem) => (
          <div
            key={classItem.id}
            className="relative bg-white/5 rounded-lg shadow-xl group transition-transform hover:scale-105 duration-300"
          >
            <Image
              src={classItem.image}
              alt={classItem.title}
              width={500}
              height={300}
              className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover max-sm:object-fit rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{classItem.title}</h3>
              <button className="px-4 py-2 sm:px-6 sm:py-2 bg-primary-color text-black font-bold font-[var(--font-secondary)] hover:bg-opacity-90 transition-colors duration-200 rounded">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Classes;
