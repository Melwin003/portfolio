import React, { useEffect, useState } from "react";
import "./TickerStrip.css";

interface Ticker {
  symbol: string;
  price: number;
  changePct: number | null;
  isPositive: boolean;
}

export const TickerStrip = () => {
  const [tickers, setTickers] = useState<Ticker[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://tickerstrip.melwin-shibu003.workers.dev");
        const json = await res.json();
        setTickers(json.tickers || []);
      } catch (err) {
        console.error("Ticker fetch error:", err);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  if (!tickers.length) return null;

  const repeated = [...tickers, ...tickers]; // 2 copies for seamless scroll

  return (
    <div className="ticker-container">
      <div className="ticker-scroll">
        {repeated.map((t, i) => (
          <div key={i} className={`ticker-item ${t.isPositive ? "up" : "down"}`}>
            <span className="symbol">{t.symbol}</span>
            <span className="price">{t.price?.toLocaleString("en-IN") ?? "N/A"}</span>
            <span className="change">
              {t.changePct != null ? (
                <>
                  <svg
                    className="spark"
                    width="32"
                    height="14"
                    viewBox="0 0 32 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Mini graph with more visible trend */}
                    <path
                      d={
                        t.isPositive
                          ? "M2 12 L6 10 L10 8 L14 6 L18 4 L22 2 L26 1 L30 0.5"
                          : "M2 2 L6 4 L10 6 L14 8 L18 10 L22 12 L26 13 L30 13.5"
                      }
                      fill="none"
                      stroke={t.isPositive ? "#00ff9d" : "#ff4d4d"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Optional: Add a subtle fill for better visibility */}
                    <path
                      d={
                        t.isPositive
                          ? "M2 12 L6 10 L10 8 L14 6 L18 4 L22 2 L26 1 L30 0.5 L30 14 L2 14 Z"
                          : "M2 2 L6 4 L10 6 L14 8 L18 10 L22 12 L26 13 L30 13.5 L30 14 L2 14 Z"
                      }
                      fill={t.isPositive ? "rgba(0, 255, 157, 0.1)" : "rgba(255, 77, 77, 0.1)"}
                    />
                  </svg>
                  {t.changePct.toFixed(2)}%
                </>
              ) : (
                "N/A"
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
