"use client";
import React from "react";
import {
  X,
  Check,
  Zap,
  Gauge,
  DollarSign,
  Headset,
  ArrowRight,
  TrendingUp,
  Layers,
} from "lucide-react";
import CTAButton from "./CTAButton";

/**
 * Premium 3-Column Comparison Table
 * Designed to contrast "Legacy/Others" with "Apex" using a modern dark UI.
 */
const ComparisonTable = () => {
  const rows = [
    {
      feature: "Payout Speed",
      others: "24–48 hours or longer",
      apex: "Cleared within 30 minutes",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      description: "Cleared within 30 minutes",
    },
    {
      feature: "Brokerage Structure",
      others: "High and often variable",
      apex: "Flat, minimal, fully disclosed",
      icon: <DollarSign className="w-5 h-5 text-blue-400" />,
      description: "Flat, minimal, fully disclosed",
    },
    {
      feature: "Order Execution",
      others: "500ms+ average latency",
      apex: "Sub-millisecond execution",
      icon: <Gauge className="w-5 h-5 text-blue-400" />,
      description: "Sub-millisecond execution",
    },
    {
      feature: "Customer Support",
      others: "Email tickets only",
      apex: "24/7 priority human support",
      icon: <Headset className="w-5 h-5 text-blue-400" />,
      description: "24/7 priority human support",
    },
    {
      feature: "Intraday Margin",
      others: "10X–50X typical",
      apex: "Up to 500X MCX & NSE Futures",
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      description: "Up to 500X MCX & NSE Futures",
    },
    {
      feature: "Holding Leverage",
      others: "5X–20X typical",
      apex: "Up to 60X positional",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      description: "Up to 60X positional",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-3 sm:py-6 md:py-12 px-4 sm:px-6 relative overflow-hidden font-sans bg-bg-main"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-accent-blue)]/10 border border-[var(--color-border-blue)] text-[var(--color-accent-blue)] text-xs font-bold uppercase tracking-widest mb-4">
            <span>Why Trade With Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How <span className="text-blue-500">Market X Traders</span> Stands
            Apart
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Most traders switch to a better online trading platform once they
            experience the difference in speed, cost, and support. Here's what
            sets Market X Traders apart:
          </p>
        </div>

        {/* Tabular Container */}
        <div className="rounded-3xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
            <div className="p-6 md:p-8 text-gray-400 font-semibold uppercase tracking-widest text-xs flex items-center">
              Features
            </div>
            <div className="p-6 md:p-8 text-gray-500 font-semibold uppercase tracking-widest text-xs text-center border-x border-white/10">
              Other Platforms
            </div>
            <div className="p-6 md:p-8 text-blue-400 font-bold uppercase tracking-widest text-xs text-center bg-blue-500/5 relative">
              Market X Traders Experience
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/5">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 group hover:bg-white/[0.02] transition-colors"
              >
                {/* Column 1: Feature */}
                <div className="p-6 md:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="hidden md:block p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 group-hover:text-blue-400 transition-colors">
                      {row.icon}
                    </span>
                    <h3 className="text-white font-bold text-sm md:text-base">
                      {row.feature}
                    </h3>
                  </div>
                </div>

                {/* Column 2: Others */}
                <div className="p-6 md:p-6 flex flex-col items-center justify-center border-x border-white/10 text-center">
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-sm md:text-base mb-2">
                    <X className="w-4 h-4 text-red-500/50" />
                    <span>{row.others}</span>
                  </div>
                  <div className="h-1 w-8 bg-white/5 rounded-full"></div>
                </div>

                {/* Column 3: Apex */}
                <div className="p-6 md:p-6 flex flex-col items-center justify-center text-center bg-blue-500/[0.02] relative">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm md:text-base mb-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>{row.apex}</span>
                  </div>
                  <div className="h-1 w-16 bg-blue-500/30 rounded-full"></div>
                  {/* Subtle highlight effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-500/5 transition-opacity pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer / CTA Row */}
          <div className="grid grid-cols-3 bg-white/5 border-t border-white/10">
            <div className="p-6 md:p-8 col-span-2 text-gray-400 text-sm italic flex items-center">
              Join 10,000+ traders making the switch this month.
            </div>
            <CTAButton title="Start Now" />
          </div>
        </div>

        {/* Floating Trust Badge */}
        <div className="mt-12 flex justify-center gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-center">
            <div className="text-white font-bold text-xl leading-none">
              500X
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">
              Leverage
            </div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-white font-bold text-xl leading-none">
              0.01s
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">
              Execution
            </div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-white font-bold text-xl leading-none">
              24/7
            </div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">
              Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
