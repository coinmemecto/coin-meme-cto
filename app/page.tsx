export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

        <p className="tracking-[0.3em] text-xs text-green-400 mb-6 animate-fade-in">
          EXPERIMENT IN PROGRESS
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-rise">
          Coin-Meme CTO
        </h1>

        <p className="text-gray-300 max-w-xl mb-12 animate-fade-in delay-200">
          A memecoin that evolved without permission.
          <br />
          No roadmap. No leader. No reset.
        </p>

        <img
          src="/images/hero.png"
          className="w-full max-w-md animate-float shadow-[0_0_80px_rgba(34,197,94,0.35)]"
          alt="The Experiment"
        />

        <div className="absolute bottom-8 text-xs text-gray-500 animate-pulse">
          ↓ Observe the experiment ↓
        </div>
      </section>

      {/* FORMULA */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              The Formula
            </h2>

            <p className="text-lg text-gray-300 mb-4">
              Viral Memecoin =
            </p>

            <p className="text-2xl font-mono text-green-400 mb-6">
              (Humor × Community) ÷ Market Dynamics
            </p>

            <p className="text-gray-400">
              You don’t control it.
              <br />
              You either participate…
              <br />
              or you watch it evolve without you.
            </p>
          </div>

          <img
            src="/images/formula.png"
            className="w-full max-w-sm mx-auto animate-glow"
            alt="Formula"
          />
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="relative bg-neutral-900 py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/images/community.png"
            className="w-full max-w-sm mx-auto animate-float"
            alt="Community"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Community Is the Catalyst
            </h2>

            <p className="text-gray-300 text-lg">
              No insiders.
              <br />
              No guarantees.
              <br />
              Just shared belief…
              <br />
              and collective momentum.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-5xl font-extrabold mb-8">
          The Experiment Is Live
        </h2>

        <p className="text-gray-400 mb-12">
          Most people will overthink.
          <br />
          Some will watch.
          <br />
          A few will ape.
        </p>

        <div className="flex justify-center gap-8 text-green-400 text-sm">
          <a href="https://dexscreener.com/solana/gw3hhfzhunahywjrl9fkvybrrifnazc7bs92s5enusrx" target="_blank">
            View Chart
          </a>
          <a href="https://t.me/CoinMemeCTO" target="_blank">
            Telegram
          </a>
          <a href="https://x.com/i/communities/2002714238331080902" target="_blank">
            X Community
          </a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <footer className="py-10 text-center text-xs text-gray-600">
        THIS IS AN EXPERIMENT. FOR ENTERTAINMENT PURPOSES ONLY.
      </footer>
    </main>
  );
}
