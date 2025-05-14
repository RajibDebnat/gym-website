"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from '../public/home/logo.svg';
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navArray } from "../data";
export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger);

  const navLinksRef = useRef<HTMLLIElement[]>([]); // for stagger animation

  useEffect(() => {
    gsap.from(navLinksRef.current, {
      // scrollTrigger: {
      //   trigger: navLinksRef.current[0], // trigger first item
      //   start: "top 80%",
      //   toggleActions: "play none none none",
      // },
      y: -100,
      opacity: 0,
      // duration:0.1 ,
      stagger: 0.3,

    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black font-[--font-secondary] sticky top-0 z-50 px-24 max-xl:px-12 max-lg:px-2">
      <nav className="flex justify-between items-center px-4 py-2 max-lg:px-0">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src={logo} alt="gym logo" height={150} width={150} />
          </Link>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-6 items-center text-white tracking-widest font-medium">
          {navArray.map(
            (item, i) => (
              <li
                key={item.text}
                
                ref={(el) => {
                  if (el) navLinksRef.current[i] = el;
                }}
              >
                <Link href={`#${item.link}`}>{item.text}</Link>
              </li>
            )
          )}
        </ul>

        {/* Contact button */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="mailto:rajibfreelancing@gmail.com"
            className="bg-primary-color px-4 py-4 font-bold text-[16px] tracking-widest text-black"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="lg:hidden border-t  bg-balck-800">
          <ul className="flex flex-col gap-4 px-4 py-3 text-white  font-(family-name:--font-secondary) font-medium">
            <li>
              <Link onClick={() => setIsOpen(false)} href="#">HOME</Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} href="#whoweare">WHO WE ARE </Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} href="#classes">CLASSES</Link>
            </li> 
            <li>
              <Link onClick={() => setIsOpen(false)} href="#meettheteam">MEET THE TEAM</Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} href="#membership">MEMBERSHIP </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-primary-color text-black px-3 py-1 rounded text-sm font-semibold">
                24x7
              </span>
            <a
  href="mailto:rajibfreelancing@gmail.com"
  className=" tracking-wider font-medium text-sm"
>
  rajibfreelancing@gmail.com
</a>

            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
