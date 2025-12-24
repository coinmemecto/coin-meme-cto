"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const LINKS = {
  chart: "https://dexscreener.com/solana/gw3hhfzhunahywjrl9fkvybrrifnazc7bs92s5enusrx",
  telegram: "https://t.me/CoinMemeCTO",
  x: "https://x.com/i/communities/2002714238331080902",
};

const CA = "BBqYTFGCj7Uia5qWHHQmxRx4jhQcFHydEynv2r3ipump";

export default function Page() {
  const [copied, setCopied] = useState(false);

  const copyCA = async () => {
    await navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-5 py-10">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-black tracking-tight">
          Coin-Meme CTO
        </h1>
        <nav className="flex gap-4 text-sm">
          <a href={LINKS.chart} target="_blank">Chart</a>
          <a href={LINKS.telegram} target="_blank">Telegram</a>
          <a href={LINKS.x} target="_blank">Community</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto mt-16 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            The Memecoin Formula<br />
            <span className="text-emerald-300">Evolved.</span>
          </h2>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            No dev. No roadmap. No promises.<br />
            Just a community-driven experiment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={LINKS.chart}
              target="_blank"
              className="border border-white/20 rounded px-4 py-2 hover:bg-white/10 transition"
            >
              View Chart
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              className="border border-white/20 rounded px-4 py-2 hover:bg-white/10 transition"
            >
              Join Telegram
            </a>
          </div>

          {/* CA */}
          <div className="mt-6 border border-white/20 rounded p-3 font-mono text-xs">
            <button onClick={copyCA}>
              {CA}
            </button>
            <div className="mt-1 text-zinc-400">
              {copied ? "Copied." : "Tap to copy"}
            </div>
          </div>
        </div>

        {/* Mascot Image */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="border border-white/20 rounded p-4 bg-black/40"
        >
          <Image
            src="/images/hero.png"
            alt="Coin-Meme Mascot"
            width={520}
            height={360}
            priority
          />
        </motion.div>
      </section>

      {/* Formula */}
      <section className="max-w-6xl mx-auto mt-20 text-center">
        <h3 className="text-2xl font-black mb-4">The Formula</h3>
        <p className="font-mono text-lg text-emerald-300">
          (Humor × Community) ÷ Market Dynamics
        </p>
      </section>

      {/* Meme Gallery */}
      <section className="max-w-6xl mx-auto mt-16 grid gap-4 md:grid-cols-3">
        {["meme1.png", "meme2.png", "meme3.png"].map((img) => (
          <div key={img} className="border border-white/20 rounded p-3 bg-black/40">
            <Image
              src={`/images/${img}`}
              alt={img}
              width={400}
              height={300}
            />
          </div>
        ))}
      </section>

      {/* Footer Disclaimer */}
      <footer className="mt-20 text-center text-xs text-zinc-400">
        THIS IS AN EXPERIMENT. I REPEAT, THIS IS AN EXPERIMENT.<br />
        FOR ENTERTAINMENT PURPOSES ONLY.
      </footer>
    </main>
  );
}
