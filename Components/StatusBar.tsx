import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // social icons

const ScrollProgressWithSections = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active section
  const getSection = () => {
    if (scroll < 25) return '1';
    if (scroll < 50) return '2';
    if (scroll < 75) return '3';
    return '4';
  };

  return (
    <div className=" max-md:hidden fixed right-10 top-1/2 -translate-y-1/2 flex flex-col items-center z-50">
      {/* Vertical Progress Line */}
      <div className="relative h-64 w-1 bg-gray-300">
        <div
          className="absolute top-0 left-0 w-full bg-yellow-400 transition-all duration-200"
          style={{ height: `${scroll}%` }}
        />
      </div>

      {/* Section Number */}
      <div className="mt-4 text-white font-bold text-xl">{getSection()}</div>

      {/* Social Icons */}
      <div className="flex flex-col items-center mt-6 space-y-4 text-white text-lg">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default ScrollProgressWithSections;
