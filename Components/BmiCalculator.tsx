"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [weight, setWeight] = useState<number | string>("");
  const [height, setHeight] = useState<number | string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");

  const aboutRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLSpanElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const calculateBMI = () => {
    const w = typeof weight === "string" ? parseFloat(weight) : weight;
    const h = typeof height === "string" ? parseFloat(height) : height;

    if (w > 0 && h > 0) {
      const hInMeters = h / 100;
      const bmiValue = parseFloat((w / (hInMeters * hInMeters)).toFixed(2));
      setBmi(bmiValue);

      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue < 24.9) setStatus("Normal");
      else if (bmiValue < 29.9) setStatus("Overweight");
      else setStatus("Obese");
    }
  };

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
        x: -70,
        opacity: 0,
      }).from(
        subHeadingRef.current,
        {
          x: 20,
          opacity: 0,
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (resultRef.current && bmi) {
      gsap.fromTo(
        resultRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: resultRef.current,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        }
      );
    }
  }, [bmi]);

  return (
    <main
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br flex flex-col items-center justify-center p-6"
    >
      <div className="relative max-sm:text-center font-bold mb-16">
        <h2
          ref={aboutRef}
          className="font-secondary max-sm:leading-12 uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl opacity-20 mb-4 text-center"
        >
          BMI CALCULATOR
        </h2>
        <span
          ref={subHeadingRef}
          className="absolute uppercase w-full z-30 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary left-1/2 translate-x-[-50%] -bottom-2"
        >
          BMI CALCULATOR
        </span>
      </div>

      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg space-y-4">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />

        <button
          onClick={calculateBMI}
          className="w-full bg-primary-color hover:bg-amber-500 text-black font-bold font-secondary py-2 rounded-lg transition duration-300"
        >
          Calculate BMI
        </button>
      </div>

      {bmi !== null && (
        <div
          ref={resultRef}
          className="mt-12 text-center p-6 rounded-2xl shadow-xl max-w-md w-full"
        >
          <h2 className="text-2xl font-semibold text-primary-colorz">
            Your BMI: {bmi}
          </h2>
          <p className="text-lg text-gray-600 mt-2">Status: {status}</p>
        </div>
      )}
    </main>
  );
}
