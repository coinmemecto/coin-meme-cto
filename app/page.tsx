export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      {/* Wrapper */}
      <div className="max-w-5xl mx-auto space-y-24">

        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in">
          <p className="text-xs tracking-widest text-gray-400 uppercase">
            Experiment in Progress
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Coin-Meme CTO
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            A memecoin experiment that evolved on its own.
            No roadmap. No promises. Just the formula.
          </p>
        </header>

        {/* Hero Image */}
        <section className="flex justify-center animate-float">
          <img
            src="/images/hero.png"
            alt="Behold the Formula"
            className="w-full max-w-xl rounded-xl shadow-xl"
          />
        </section>

        {/* Formula Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold">The Formula</h2>
            <p className="text-gray-300">
              Viral memecoins don’t follow rules.
              They follow behavior, humor, and shared belief.
            </p>
          </div>

          <img
            src="/images/formula.png"
            alt="The Formula Chalkboard"
            className="w-full rounded-lg shadow-lg hover:scale-[1.02] transition-transform"
          />
        </section>

        {/* Community Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/community.png"
            alt="Community Equals Everything"
            className="w-full rounded-lg shadow-lg hover:scale-[1.02] transition-transform"
          />

          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold">
              Community = Everything
            </h2>
            <p className="text-gray-300">
              No dev worship. No false authority.
              Just collective participation and observation.
            </p>
          </div>
        </section>

        {/* Moon Formula */}
        <section className="text-center space-y-6 animate-fade-in">
          <h2 className="text-2xl font-semibold">
            Moon-Landing Formula
          </h2>

          <img
            src="/images/moon.png"
            alt="Moon Formula"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:scale-[1.03] transition-transform"
          />
        </section>

        {/* Footer Disclaimer */}
        <footer className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          THIS IS AN EXPERIMENT. FOR ENTERTAINMENT PURPOSES ONLY.
        </footer>
      </div>
    </main>
  );
}
