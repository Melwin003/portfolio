// ticker-proxy.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// Final list: indices + 20-25 major Indian stocks (Yahoo tickers)
const SOURCES = [
  { name: "NIFTY 50", symbol: "^NSEI" },
  { name: "SENSEX", symbol: "^BSESN" },
  { name: "NIFTY BANK", symbol: "^NSEBANK" }, // if issues, you can remove or replace
  { name: "NIFTY IT", symbol: "^CNXIT" },     // try ^CNXIT for NIFTY IT (Yahoo varies)
  // Stocks — use .NS suffix for NSE
  { name: "RELIANCE", symbol: "RELIANCE.NS" },
  { name: "TCS", symbol: "TCS.NS" },
  { name: "INFY", symbol: "INFY.NS" },
  { name: "ADANIENT", symbol: "ADANIENT.NS" },
  { name: "ADANIPORTS", symbol: "ADANIPORTS.NS" },
  { name: "HDFCBANK", symbol: "HDFCBANK.NS" },
  { name: "ITC", symbol: "ITC.NS" },
  { name: "SBIN", symbol: "SBIN.NS" },
  { name: "BHARTIARTL", symbol: "BHARTIARTL.NS" },
  { name: "WIPRO", symbol: "WIPRO.NS" },
  { name: "LT", symbol: "LT.NS" },
  { name: "ONGC", symbol: "ONGC.NS" },
  { name: "HINDUNILVR", symbol: "HINDUNILVR.NS" },
  { name: "TITAN", symbol: "TITAN.NS" },
  { name: "MARUTI", symbol: "MARUTI.NS" },
  { name: "BAJFINANCE", symbol: "BAJFINANCE.NS" },
  // Add more here as you want...
];

async function fetchYahoo(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?region=IN&lang=en-IN`;
  try {
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" }});
    const json = await r.json();

    const result = json?.chart?.result?.[0];
    if (!result) {
      throw new Error("No data for " + symbol);
    }

    const meta = result.meta || {};
    const price = meta.regularMarketPrice ?? meta.chartPreviousClose ?? null;
    // prefer Yahoo percent if present
    let changePct = null;
    if (typeof meta.regularMarketChangePercent === "number") {
      changePct = Number(meta.regularMarketChangePercent).toFixed(2);
    } else if (meta.previousClose && price) {
      // fallback compute percent
      changePct = (((price - meta.previousClose) / meta.previousClose) * 100).toFixed(2);
    }

    return {
      price: price != null ? Number(price) : null,
      changePct: changePct != null ? Number(changePct) : null
    };
  } catch (err) {
    // bubble up with a sensible message (we will catch in caller)
    throw new Error(`No data for ${symbol} — ${err.message}`);
  }
}

app.get("/api/ticker", async (req, res) => {
  try {
    const results = await Promise.all(SOURCES.map(async (s) => {
      try {
        const data = await fetchYahoo(s.symbol);
        if (data.price == null) return null;
        return {
          symbol: s.name,
          rawSymbol: s.symbol,
          price: data.price,
          changePct: data.changePct, // number or null
          isPositive: data.changePct != null ? data.changePct >= 0 : null
        };
      } catch (err) {
        console.error("Error fetching", s.name, err.message);
        return null;
      }
    }));

    const tickers = results.filter(Boolean);

    // You can optionally cache the response for e.g. 15s in memory (not implemented here)
    res.json({ tickers });
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Failed to fetch tickers", details: String(err) });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Yahoo Finance Ticker proxy running at http://localhost:${PORT}/api/ticker`));
