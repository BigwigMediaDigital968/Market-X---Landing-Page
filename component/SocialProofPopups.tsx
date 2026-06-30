"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────────────────
interface WithdrawalEvent {
  id: number;
  name: string;
  location: string;
  amount: string;
  time: string;
}

// ── Static data ───────────────────────────────────────────────────────────────
const TIME_AGO = [
  "just now",
  "1 min ago",
  "2 min ago",
  "4 min ago",
  "6 min ago",
  "9 min ago",
  "14 min ago",
  "20 min ago",
];

const USERS = [
  { name: "Deepthi", city: "Gurgaon", amount: "₹2,07,129" },
  { name: "Harsh", city: "Hyderabad", amount: "₹99,737" },
  { name: "Bhavna", city: "Belgaum", amount: "₹1,53,604" },
  { name: "Aravind", city: "Salem", amount: "₹1,71,033" },
  { name: "Manish", city: "Guwahati", amount: "₹2,122" },
  { name: "Charan", city: "Kochi", amount: "₹61,659" },
  { name: "Dev", city: "Kurnool", amount: "₹2,43,358" },
  { name: "Karan", city: "Mysore", amount: "₹9,929" },
  { name: "Pradeep", city: "Amritsar", amount: "₹43,242" },
  { name: "Vaishnavi", city: "Chennai", amount: "₹2,37,751" },
  { name: "Aravind", city: "Warangal", amount: "₹2,39,960" },
  { name: "Kavya", city: "Hyderabad", amount: "₹1,97,143" },
  { name: "Rohit", city: "Faridabad", amount: "₹2,40,100" },
  { name: "Rohit", city: "Pune", amount: "₹1,42,912" },
  { name: "Aman", city: "Varanasi", amount: "₹2,21,785" },
  { name: "Varun", city: "Hyderabad", amount: "₹67,330" },
  { name: "Charan", city: "Ranchi", amount: "₹2,15,072" },
  { name: "Ajay", city: "Bhopal", amount: "₹2,45,207" },
  { name: "Karthik", city: "Udaipur", amount: "₹1,55,920" },
  { name: "Harini", city: "Madurai", amount: "₹64,386" },
  { name: "Vaishnavi", city: "Nagpur", amount: "₹1,19,583" },
  { name: "Anjali", city: "Gurgaon", amount: "₹1,15,175" },
  { name: "Varun", city: "Rajkot", amount: "₹17,260" },
  { name: "Rakesh", city: "Nellore", amount: "₹96,346" },
  { name: "Ritika", city: "Thrissur", amount: "₹35,537" },
  { name: "Ajay", city: "Hubli", amount: "₹53,992" },
  { name: "Harini", city: "Gwalior", amount: "₹1,80,775" },
  { name: "Sakshi", city: "Ahmedabad", amount: "₹20,938" },
  { name: "Rakesh", city: "Guntur", amount: "₹1,66,520" },
  { name: "Deepak", city: "Surat", amount: "₹1,01,077" },
  { name: "Ajay", city: "Meerut", amount: "₹30,613" },
  { name: "Sai Teja", city: "Ahmedabad", amount: "₹1,53,302" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Shuffle once on load so order is different every session
const shuffled = [...USERS].sort(() => Math.random() - 0.5);
let cursor = 0; // cycles through shuffled list, never random-repeats back-to-back
let uid = 0;

const generateEvent = (): WithdrawalEvent => {
  const user = shuffled[cursor % shuffled.length];
  cursor++;
  return {
    id: uid++,
    name: user.name,
    location: user.city,
    amount: user.amount,
    time: pick(TIME_AGO),
  };
};

// ── Avatar ────────────────────────────────────────────────────────────────────
const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  const hue =
    name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 360;
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-black flex-shrink-0"
      style={{
        background: `linear-gradient(135deg, hsl(${hue},65%,52%), hsl(${(hue + 40) % 360},75%,42%))`,
        color: "#fff",
        boxShadow: `0 2px 8px hsl(${hue},60%,40%, 0.35)`,
      }}
    >
      {initials}
    </div>
  );
};

// ── Card ──────────────────────────────────────────────────────────────────────
const WithdrawalCard = ({
  event,
  onDismiss,
}: {
  event: WithdrawalEvent;
  onDismiss: () => void;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
    whileHover={{ scale: 1.02 }}
    onClick={onDismiss}
    className="relative w-fit max-w-[450px] cursor-pointer group overflow-hidden select-none backdrop-blur-2xl bg-white/10 px-5 py-4"
    style={{
      borderRadius: "20px",
      boxShadow: `
                0 0 0 1px rgba(255, 255, 255, 0.12) inset,
                0 0 20px rgba(0, 0, 0, 0.4),
                0 12px 30px -10px rgba(0, 0, 0, 0.6)
            `,
    }}
  >
    {/* Glossy mesh highlight */}
    <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_60%)] animate-[spin_15s_linear_infinite]" />
    </div>

    {/* Grain overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "120px",
      }}
    />

    {/* Sweep effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

    {/* Top accent line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.6)]" />

    {/* Content */}
    <div className="relative flex items-center gap-3 text-[14px] leading-relaxed text-white/90 font-medium">
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
      </span>

      <p className="tracking-tight">
        <span className="font-bold text-emerald-400  tracking-wide">
          {event.name}
        </span>
        {" from "}
        <span className="text-accent-blue font-semibold italic">
          {event.location}
        </span>
        {" just withdrew "}
        <span className="font-black text-emerald-400">{event.amount}</span>
        {" successfully."}
      </p>
    </div>
  </motion.div>
);

// ── Root component — timing logic UNCHANGED ───────────────────────────────────
export default function SocialProofPopups() {
  const [events, setEvents] = useState<WithdrawalEvent[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback((id: number) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const addEvent = useCallback(() => {
    const event = generateEvent();
    setEvents((prev) => [...prev.slice(-2), event]);
    setTimeout(() => dismiss(event.id), 2000);
  }, [dismiss]);

  const schedule = useCallback(() => {
    const delay = 4000 + Math.random() * 5000;
    timerRef.current = setTimeout(() => {
      addEvent();
      schedule();
    }, delay);
  }, [addEvent]);

  useEffect(() => {
    const first = setTimeout(
      () => {
        addEvent();
        schedule();
      },
      3000 + Math.random() * 2000,
    );
    return () => {
      clearTimeout(first);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [addEvent, schedule]);

  return (
    <div
      className={`
            fixed z-[9990] pointer-events-none flex flex-col gap-3
            top-20 left-1/2 -translate-x-1/2 w-[calc(100vw)] items-center
            sm:bottom-10 sm:top-auto sm:w-auto
        `}
    >
      <AnimatePresence mode="popLayout">
        {events.map((event) => (
          <>
            <div key={event.id} className="pointer-events-auto p-2">
              <WithdrawalCard
                event={event}
                onDismiss={() => dismiss(event.id)}
              />
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              24/7 Withdrawal Available
            </div>
          </>
        ))}
      </AnimatePresence>
    </div>
  );
}
