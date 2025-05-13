import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

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

  const getSection = () => {
    if (scroll < 25) return '1';
    if (scroll < 50) return '2';
    if (scroll < 75) return '3';
    return '4';
  };

  return (
    <div className="max-md:hidden fixed right-10 top-1/2 -translate-y-1/2 flex flex-col items-center z-50">
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
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/rajib-debnath-0715a6236/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/webzz.io/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ScrollProgressWithSections;
