export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121826] via-[#0b0e14] to-black" />

      {/* Glow accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 blur-[140px]" />

      {/* CONTENT */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">

        {/* Header */}
        <p className="text-xs tracking-widest text-muted mb-4">
          EXPERIMENT IN PROGRESS
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Coin-Meme <span className="text-accent">CTO</span>
        </h1>

        <p className="text-lg text-muted max-w-xl mb-10">
          A memecoin that evolved without permission.
          <br />
          No roadmap. No leader. No reset.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mb-16">
          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-accent text-black font-semibold shadow-glow hover:scale-105 transition"
          >
            View Chart
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Join Community
          </a>
        </div>

        {/* Glass Panels */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "The Formula",
              text: "Humor × Community ÷ Market Chaos"
            },
            {
              title: "CTO Reality",
              text: "No devs. No paid hype. Direction over promises."
            },
            {
              title: "Why It Works",
              text: "It mocks the system while surviving it."
            }
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-2xl bg-panel backdrop-blur-xl border border-white/10 p-6 hover:border-accent/40 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-muted text-sm">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/10 py-8 text-center text-muted text-sm">
        © Coin-Meme CTO — The formula keeps evolving.
      </footer>

    </main>
  );
}
