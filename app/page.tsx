'use client';
import Navbar from "@/Components/Header";
import Image from "next/image";
import Hero from "../Components/Hero";
import ScrollProgressWithSections from "@/Components/StatusBar";
import Aboutus from "@/Components/Aboutus";
import MeetheTeam from "@/Components/MeetTheTeam";
import Classes from "@/Components/Classes";

import Cursor from "@/Components/Cursor";
export default function Home() {

  
  return (
    <main className=" relative  overflow-x-clip       bg-black  ">
    <Navbar />
    <Hero />
    <Aboutus />
    <MeetheTeam />
    <div className=" relative">

    <div className="  h-[300px] w-[120%] bg-primary-color absolute -z-1 -left-52 -rotate-[7deg]"></div>
    </div>
    <Classes />
    <ScrollProgressWithSections />
    <Cursor />  
    </main>
  );
}
