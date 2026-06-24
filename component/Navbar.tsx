"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "Home", href: "/", id: "hero" },
  { label: "Contact", href: "#lead-form", id: "lead-form" },
  { label: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
  { label: "Process", href: "#step-process", id: "step-process" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);

    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#0B0E14]/80 backdrop-blur-[24px] border-b border-white/5 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[10px] no-underline group"
        >
          <div className="h-[25px] sm:h-[30px] md:h-[40px] w-auto">
            <img
              src="/logo-apex-site.png"
              alt="ApexTrade Logo"
              className="object-contain w-auto h-full"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-[0.92rem] font-medium no-underline transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white bg-white/5"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <CTAButton title="Start Now" />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-white/5 border border-white/10 rounded-xl p-2.5 cursor-pointer text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileMenuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0E14]/98 backdrop-blur-[20px] border-t border-white/5 overflow-hidden"
          >
            <div
              className="p-6 flex flex-col gap-4 h-svh"
              style={{ overflowY: "auto" }}
            >
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-lg font-bold text-white no-underline py-2"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}

              <CTAButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
