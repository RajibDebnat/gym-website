"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "../data";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  // useRef to store an array of paragraph elements
  const numberRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    numberRefs.current.forEach((el, index) => {
      if (!el) return;

      const target = parseInt(features[index].number.toString());

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            if (el) el.innerText = Math.floor(Number(el.innerText)).toString();
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-12 font-secondary px-4 bg-[var(--color-primary-color)] text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, i) => (
          <div key={feature.id}>
            <p
              className="font-bold text-6xl sm:text-7xl lg:text-8xl mb-2"
              // Properly assigning the ref without returning any value
              ref={(el) => {
                if (el) {
                  numberRefs.current[i] = el;
                }
              }}
            >
              0
            </p>
            <h6 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {feature.text}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
