'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Cursor() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to('#cursor', {
        x: clientX - 10,
        y: clientY - 10,
        duration: 1,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="pointer-events-none fixed top-0 left-0 h-[20px] w-[20px] bg-slate-400 rounded-full z-[9999]"
    ></div>
  );
}

export default Cursor;
