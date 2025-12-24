import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center px-6 pt-24 pb-32">
        <div className="animate-pulse mb-6 text-xs tracking-widest text-green-400">
          EXPERIMENT IN PROGRESS
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Coin-Meme CTO
        </h1>

        <p className="max-w-xl text-slate-300 mb-10">
          A memecoin experiment that evolved on its own.
          No roadmap. No promises. Just the formula.
        </p>

        <Image
          src="/images/hero.png"
          alt="Coin Meme Hero"
          width={420}
          height={420}
          priority
          className="rounded-xl shadow-[0_0_40px_rgba(34,197,94,0.35)]"
        />

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="https://dexscreener.com/solana/gw3hhfzhunahywjrl9fkvybrrifnazc7bs92s5enusrx"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            View Chart
          </a>

          <a
            href="https://t.me/CoinMemeCTO"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            Telegram
          </a>

          <a
            href="https://x.com/i/communities/2002714238331080902"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            X Community
          </a>
        </div>
      </section>

      {/* FORMULA */}
      <section className="px-6 py-24 flex flex-col items-center gap-12 bg-slate-950">
        <h2 className="text-3xl font-semibold">
          The Formula
        </h2>

        <Image
          src="/images/formula.png"
          alt="Coin Meme Formula"
          width={520}
          height={520}
          className="rounded-xl shadow-lg"
        />

        <p className="max-w-2xl text-slate-300 text-center">
          Viral Memecoin = (Humor × Community) ÷ Market Dynamics
        </p>
      </section>

      {/* MOON */}
      <section className="px-6 py-24 flex flex-col items-center gap-12">
        <h2 className="text-3xl font-semibold">
          Moon-Landing Formula
        </h2>

        <Image
          src="/images/moon.png"
          alt="Moon Landing Formula"
          width={520}
          height={520}
          className="rounded-xl shadow-lg"
        />

        <p className="text-slate-300">
          BUY + HODL + DCA = MOON
        </p>
      </section>

      {/* COMMUNITY */}
      <section className="px-6 py-24 flex flex-col items-center gap-12 bg-slate-950">
        <h2 className="text-3xl font-semibold">
          Community
        </h2>

        <Image
          src="/images/community.png"
          alt="Community"
          width={520}
          height={520}
          className="rounded-xl shadow-lg"
        />

        <p className="text-slate-300 text-xl">
          Community = EVERYTHING
        </p>
      </section>

      {/* CA */}
      <section className="px-6 py-16 text-center">
        <p className="text-slate-400 text-sm mb-2">
          Contract Address
        </p>
        <code className="block bg-slate-800 rounded-lg p-4 text-green-400 break-all">
          BBqYTFGCj7Uia5qWHHQmxRx4jhQcFHydEynv2r3ipump
        </code>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-xs text-slate-500">
        THIS IS AN EXPERIMENT. I REPEAT, THIS IS AN EXPERIMENT.
        FOR ENTERTAINMENT PURPOSES ONLY.
      </footer>
    </main>
  );
}
