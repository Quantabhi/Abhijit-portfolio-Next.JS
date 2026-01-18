"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const path = document.querySelector<SVGPathElement>(".timeline-path");
    const dots = document.querySelectorAll(".timeline-dot");
    const labels = document.querySelectorAll(".timeline-label");

    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.set(dots, {
      scale: 0,
      transformOrigin: "center",
    });

    gsap.set(labels, {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      delay: 0.7,
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 2.6,
      ease: "power2.out",
    })
      .to(
        dots,
        {
          scale: 1,
          duration: 0.4,
          stagger: 0.15,
          ease: "back.out(2)",
        },
        "-=0.8"
      )
      .to(
        labels,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <div className="maindiv">
      {/* NAV */}
      <nav className="relative z-20 px-6 py-8 md:px-12 flex items-center justify-between max-w-[1460px] mx-auto">
        <div>
          <span className="text-xs font-bold tracking-[0.3em] uppercase hidden sm:block">
            Portfolio
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.25em] text-gray-400">
          <Link href="/about" className="hover:text-black transition-colors">
            ABOUT
          </Link>
          <Link href="/work" className="hover:text-black transition-colors">
            WORK
          </Link>
          <a
            href="mailto:abhijitmondal012@gmail.com"
            className="hover:text-black transition-colors"
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main className="relative min-h-[calc(100vh-96px)] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* LEFT */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <h1 className="text-7xl md:text-9xl lg:text-[140px] font-black tracking-tighter text-black">
                <span className="block leading-[0.9]">Abhijit</span>
                <span className="block mt-6 leading-[0.9]">Mondal</span>
              </h1>

              <div className="flex items-center gap-4">
                <span className="h-[2px] w-16 bg-black" />
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-black">
                  Frontend Engineer
                </h2>
              </div>
            </div>

            <p className="max-w-md text-lg text-gray-600 leading-relaxed font-light">
              Iove to  learning new skills and improving every day. I enjoy working with ideas that mix technology, logic and creativity.
            </p>

            <div className="pt-6">
              <button
                aria-label="Scroll to explore more"
                className="flex items-center gap-2 px-6 h-14 text-sm font-bold uppercase tracking-widest text-[#506795] hover:text-black transition-colors"
              >
                View Portfolio
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "16px" }}
                >
                  arrow_outward
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT — TIMELINE */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[650px] flex items-center -mt-20 lg:-mt-32">
            <div className="w-full relative">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 500 300"
              >
                <path
                  className="timeline-path text-black"
                  d="M0 280 C 50 280, 80 270, 120 220 C 160 170, 200 240, 250 180 C 300 120, 350 50, 480 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />

                <circle
                  className="timeline-dot text-black"
                  cx="120"
                  cy="220"
                  r="3"
                  fill="currentColor"
                />
                <circle
                  className="timeline-dot text-black"
                  cx="250"
                  cy="180"
                  r="3"
                  fill="currentColor"
                />
                <circle
                  className="timeline-dot text-black"
                  cx="480"
                  cy="20"
                  r="5"
                  fill="currentColor"
                />
              </svg>

              <div className="timeline-label absolute left-0 bottom-[10%] flex flex-col items-start">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  2020
                </span>
                <span className="text-[12px] font-medium text-black mt-1">
                  Early failures
                </span>
              </div>

              <div className="timeline-label absolute left-[24%] bottom-[14%] flex flex-col items-start">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  2021
                </span>
                <span className="text-[10px] font-medium text-black mt-1">
                  Started from zero
                </span>
              </div>

              <div className="timeline-label absolute left-[50%] bottom-[28%] flex flex-col items-start">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  2023
                </span>
                <span className="text-[10px] font-medium text-black mt-1">
                  Learning phase
                </span>
              </div>

              <div className="timeline-label absolute right-0 top-[-20px] flex flex-col items-end">
                <span className="text-[11px] font-black text-white bg-black px-3 py-1 mt-1 uppercase tracking-tighter italic">
                  Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
