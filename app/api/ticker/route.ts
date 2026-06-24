import { NextResponse } from "next/server";

// Stocks & crypto work on free tier
// Forex/indices via OANDA are premium — removed
// Gold via crypto pair works fine
const SYMBOLS = [
  { symbol: "BINANCE:BTCUSDT", label: "BTC/USD", type: "crypto" },
  { symbol: "BINANCE:ETHUSDT", label: "ETH/USD", type: "crypto" },
  { symbol: "BINANCE:XAUUSDT", label: "GOLD", type: "crypto" }, // Gold via Binance — works free
  { symbol: "AAPL", label: "AAPL", type: "stock" },
  { symbol: "TSLA", label: "TSLA", type: "stock" },
  { symbol: "NVDA", label: "NVDA", type: "stock" },
  { symbol: "MSFT", label: "MSFT", type: "stock" },
  { symbol: "GOOGL", label: "GOOGL", type: "stock" },
  { symbol: "AMZN", label: "AMZN", type: "stock" },
  { symbol: "META", label: "META", type: "stock" },
];

// Fetch with delay to avoid 30/sec burst cap
function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function GET() {
  const key = process.env.FINNHUB_API_KEY;

  const results = [];

  for (const { symbol, label, type } of SYMBOLS) {
    try {
      const res = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${key}`,
        { next: { revalidate: 30 } },
      );

      if (!res.ok) continue; // skip on 429 or any error

      const data = await res.json();

      // Skip if price is 0 or missing — means symbol not supported on free tier
      if (!data.c || data.c === 0) continue;

      results.push({
        symbol,
        label,
        type,
        price: data.c,
        change: data.d,
        changePct: data.dp,
      });
    } catch {
      continue; // silently skip failed symbols
    }

    await delay(100); // 100ms between calls → max 10/sec, well under burst cap
  }

  return NextResponse.json(results);
}
