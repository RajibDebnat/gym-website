import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import MeetTheTeamGrid from './ui/MeetTheTeamGrid';
function MeetTheTeam() {
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
    <section className='relative'>
          <div className='relative'>
        <h2  ref={aboutRef} className='text-8xl max-lg:text-6xl max-md:text-5xl text-center font-bold opacity-20 font-(family-name:--font-secondary) mb-4'>
          Meet The Team
        </h2>
        <span ref={subHeadingRef}  className='absolute z-30 max-lg:text-4xl max-md:text-2xl -bottom-8 left-[50%] text-6xl font-bold font-(family-name:--font-secondary) translate-x-[-50%]'>
          Meet The Team
        </span>
      </div>
      <div className=' relative'>
        <h2 className="text-outline absolute text-black z-20 text-[120px] md:text-[160px] tracking-tight opacity-75 font-(family-name:--font-secondary) font-bold right-0 select-none">
            02
          </h2>
        <MeetTheTeamGrid />
      </div>
    </section>
  )
}

export default MeetTheTeam