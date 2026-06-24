"use client";

import { useEffect, useState } from "react";

type Ticker = {
  symbol: string;
  price: string;
  change: string;
  up: boolean;
};

const FALLBACK_TICKERS: Ticker[] = [
  { symbol: "BTC/USD", price: "67,432.10", change: "+2.34%", up: true },
  { symbol: "ETH/USD", price: "3,821.55", change: "+1.87%", up: true },
  { symbol: "EUR/USD", price: "1.0842", change: "-0.12%", up: false },
  { symbol: "GBP/USD", price: "1.2671", change: "+0.08%", up: true },
  { symbol: "GOLD", price: "2,341.60", change: "+0.45%", up: true },
  { symbol: "S&P 500", price: "5,280.14", change: "+0.72%", up: true },
  { symbol: "NQ/USD", price: "18,754.20", change: "-0.31%", up: false },
  { symbol: "AAPL", price: "189.45", change: "+1.23%", up: true },
  { symbol: "TSLA", price: "182.30", change: "-0.85%", up: false },
  { symbol: "NVDA", price: "876.90", change: "+3.42%", up: true },
];

const brands = [
  "SEC Regulated",
  "256-bit Encryption",
  "ISO 27001 Certified",
  "99.9% Uptime Guarantee",
  "FINRA Compliant",
  "SOC 2 Type II Audited",
];

export default function TickerBar() {
  const [tickers, setTickers] = useState<Ticker[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTickers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ticker");
      if (!res.ok) return;
      const data = await res.json();
      //console.log(data)
      if (!data?.length) return;

      const mapped: Ticker[] = data
        .filter((t: any) => t.price && t.changePct != null)
        .map((t: any) => ({
          symbol: t.label,
          price: formatPrice(t.price, t.type),
          change: `${t.changePct >= 0 ? "+" : ""}${t.changePct?.toFixed(2)}%`,
          up: t.changePct >= 0,
        }));

      setTickers(mapped);
    } catch {
      // silently keep fallback data showing
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickers();
    const id = setInterval(fetchTickers, 1000 * 10); // refresh every 10 seconds
    return () => clearInterval(id);
  }, []);

  const doubled = [...tickers, ...tickers];

  return (
    <div className="relative overflow-hidden">
      {/* Live ticker */}
      <div className="bg-bg-card/90 border-y border-border-main py-3 overflow-hidden">
        <div className="ticker-inner flex gap-12 animate-[ticker_35s_linear_infinite]">
          {loading && !(doubled?.length > 0)
            ? Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 whitespace-nowrap shrink-0 animate-pulse"
                >
                  <div className="h-3 w-12 rounded bg-white/10" />
                  <div className="h-3 w-16 rounded bg-white/10" />
                  <div className="h-3 w-10 rounded bg-white/10" />
                  <div className="h-2 w-2 rounded-full bg-white/10" />
                </div>
              ))
            : doubled.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 whitespace-nowrap shrink-0"
                >
                  <span className="font-mono text-[0.78rem] font-semibold text-text-secondary">
                    {t.symbol}
                  </span>
                  <span className="font-mono text-[0.82rem] text-white font-medium">
                    {t.price}
                  </span>
                  <span
                    className={`font-mono text-[0.75rem] font-medium ${
                      t.up ? "text-accent-green" : "text-[#FF4B6A]"
                    }`}
                  >
                    {t.change}
                  </span>
                  <span className="text-border-main/30 text-[0.6rem]">●</span>
                </div>
              ))}
        </div>
      </div>
      {/* Trust bar */}
      <div className="px-6 py-5 flex items-center bg-[#00093d] justify-center gap-10 flex-wrap border-b border-border-main/80">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center gap-2 opacity-55 transition-opacity duration-200 cursor-default hover:opacity-100"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L8.5 5.5H13L9.5 8L11 12.5L7 10L3 12.5L4.5 8L1 5.5H5.5L7 1Z"
                fill="#00FFA3"
              />
            </svg>
            <span className="font-sans text-[0.78rem] text-text-secondary font-medium">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatPrice(price: number, type: string): string {
  if (!price) return "—";
  if (type === "forex") return price.toFixed(4);
  if (price >= 1000)
    return price.toLocaleString("en-US", { maximumFractionDigits: 2 });
  return price.toFixed(2);
}
