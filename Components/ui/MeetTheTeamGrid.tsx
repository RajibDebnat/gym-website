'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import trainer1 from '../../public/team/trainer1.jpg';
import trainer2 from '../../public/team/trainer2.jpg';
import trainer3 from '../../public/team/trainer3.jpg';
import trainer4 from '../../public/team/trainer4.jpg';
import trainer5 from '../../public/team/trainer5.jpg';
import trainer6 from '../../public/team/trainer6.jpg';
import trainer7 from '../../public/team/trainer7.jpg';
import trainer8 from '../../public/team/trainer8.jpg';

gsap.registerPlugin(ScrollTrigger);

const trainers = [
  { name: 'Alex Carter', image: trainer1 },
  { name: 'Sophie Lee', image: trainer2 },
  { name: 'David Kim', image: trainer3 },
  { name: 'Emily Stone', image: trainer4 },
  { name: 'Michael Ross', image: trainer5 },
  { name: 'Nina Patel', image: trainer6 },
  { name: 'Ryan Brooks', image: trainer7 },
  { name: 'Lily Chen', image: trainer8 },
];

function MeetTheTeamGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.trainer-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub:2,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 px-4 md:px-16 bg-black text-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            
            className={`trainer-card relative group overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ${
              index === 6 || index === 7 ? 'max-lg:hidden' : ''
            }`}
            
          >
            <Image
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-auto object-cover"
              width={300}
              height={300}
            />
            <div className="absolute inset-0 bg-primary-color bg-opacity-40 opacity-0 group-active:opacity-80 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
              <p className="font-bold text-slate-800 text-3xl font-[--font-secondary]">
                {trainer.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeamGrid;
