"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CTAButton from "./CTAButton";

const content =
  "🚀 500X Intraday Margin • 💰 Low Brokerage • ⚡ Fast Account Opening • 📈 Advanced Trading Platform • 🕐 24/7 Support";

export default function Hero() {
  const subheadings = [
    "Institutional grade speed.",
    "Real-time market analytics.",
  ];

  // Common typography class to ensure identical sizing
  const sharedTypographyClass =
    "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-[1.1]";

  return (
    <div
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-[#0B0E14] font-sans selection:bg-[#3D6BFF]/30"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/elevator-video-frame.jpg"
          width={1920}
          height={1080}
          className="absolute object-cover w-full h-full opacity-30"
          alt="Hero Video Frame"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/90 via-[#0B0E14]/40 to-[#0B0E14]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center md:justify-end h-full px-6 text-center max-w-6xl mx-auto">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-4 py-1.5 rounded-full bg-[#3D6BFF]/10 border border-[#3D6BFF]/20 flex items-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00FFA3]">
            Live Trading
          </span>
        </motion.div>

        <div className="flex flex-col space-y-2">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${sharedTypographyClass} text-white`}
          >
            Open Your Trading Account with Market X Traders.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight leading-relaxed text-zinc-400"
          >
            India's Best Online Trading Platform - Commission-Free
          </motion.h2>

          {/* Typing Subheading (Matched Size) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${sharedTypographyClass}`}
          >
            <TypewriterText texts={subheadings} />
          </motion.div>
        </div>

        <div className="hidden flex-col space-y-2 max-w-2xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-base md:text-xl sm:text-2xl mt-4  font-medium leading-relaxed text-white`}
          >
            <div className="">
              <p>
                🚀 500X Intraday Margin | 📊 60X Holding | ⚡ Options 7X/4X{" "}
                <br /> 💰 Low Brokerage | ⚡ Fastest Payout | 🕐 24/7 Support
              </p>
            </div>
          </motion.div>
        </div>
        <div className="hidden flex-col space-y-2 max-w-2xl mx-auto w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 overflow-hidden relative"
          >
            {/* Glassy Container with Fixed Height */}
            <div className="relative bg-white/5 rounded-xl py-3 px-2 flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              {/* Edge Fades for smooth entry/exit */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/20 to-transparent z-10 pointer-events-none" />

              {/* Marquee Animation */}
              <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }} // Adjust -1000 based on content length
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20, // Lower = faster scrolling
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicating content to ensure seamless loop */}
                <p className="text-base md:text-xl sm:text-2xl font-medium leading-relaxed text-white inline-block">
                  {content} &nbsp;&nbsp; | &nbsp;&nbsp; {content} &nbsp;&nbsp; |
                  &nbsp;&nbsp;
                </p>
                <p className="text-base md:text-xl sm:text-2xl font-medium leading-relaxed text-white inline-block">
                  {content} &nbsp;&nbsp; | &nbsp;&nbsp; {content} &nbsp;&nbsp; |
                  &nbsp;&nbsp;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col space-y-2 max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4"
          >
            {/* Mask Image creates the 'dissolving' effect at the edges.
          The middle (20% to 80%) is fully opaque, while the ends fade to transparent.
        */}
            <div
              className="relative overflow-hidden py-2"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              }}
            >
              <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {/* Using a span for a cleaner inline flow */}
                <span className="text-base md:text-xl sm:text-2xl font-medium leading-relaxed text-white">
                  {content} &nbsp;&nbsp;&nbsp;&nbsp; {content}{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-base md:text-xl sm:text-2xl font-medium leading-relaxed text-white">
                  {content} &nbsp;&nbsp;&nbsp;&nbsp; {content}{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-5">
          <CTAButton />

          <a
            href="#connect-form"
            className="px-6 py-4 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/10"
          >
            Request Callback
          </a>
        </div>

        {/* Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 mb-8 md:mt-12 md:mb-10 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-4 sm:pt-10 w-full"
        >
          <div>
            <p className="text-[#8E96A5] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              24H Volume Processed
            </p>
            <p className="text-white font-mono text-xl md:text-2xl font-bold">
              $12.4B
            </p>
          </div>
          <div>
            <p className="text-[#8E96A5] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              Tradeable Instruments
            </p>
            <p className="text-white font-mono text-xl md:text-2xl font-bold">
              500+
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-[#8E96A5] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              Global Network Nodes
            </p>
            <p className="text-white font-mono text-xl md:text-2xl font-bold">
              14,200+
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-[#8E96A5] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              Average Execution Time
            </p>
            <p className="text-[#00FFA3] font-mono text-xl md:text-2xl font-bold">
              0.8ms
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
const TypewriterText = ({ texts }: { texts: any }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = texts[index];

      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setSpeed(50);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
          setSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, speed]);

  return (
    <span className="text-text-muted inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1.5 h-[0.9em] ml-2 bg-accent-blue align-middle"
      />
    </span>
  );
};
