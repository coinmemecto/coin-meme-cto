"use client";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-bg">

      {/* FLOATING BACKGROUND ORBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-96 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-2000" />
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-highlight/20 rounded-full blur-3xl animate-float delay-4000" />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center space-y-8 animate-float">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-semibold">
            Experiment In Progress
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Coin-Meme <span className="text-primary">CTO</span>
          </h1>

          <p className="text-xl text-muted max-w-2xl mx-auto">
            A memecoin that evolved on its own.  
            No roadmap. No leader. No reset.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 rounded-xl bg-primary text-white font-bold shadow-float hover:scale-105 transition"
            >
              View Chart
            </a>

            <a
              href="#"
              className="px-8 py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition"
            >
              Join Community
            </a>
          </div>
        </div>
      </section>

      {/* THE FORMULA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 className="text-4xl font-bold">
            The Formula
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Humor", color: "primary" },
              { title: "Community", color: "accent" },
              { title: "Market Chaos", color: "highlight" },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl shadow-soft p-10 hover:shadow-float transition transform hover:-translate-y-2"
              >
                <div className={`text-5xl font-extrabold text-${item.color}`}>
                  {item.title}
                </div>
                <p className="mt-4 text-muted">
                  The variable you can’t fake.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTO REALITY */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              CTO Reality
            </h2>
            <p className="text-lg text-muted">
              No dev. No paid hype.  
              Direction over promises.
            </p>
            <p className="text-lg text-muted">
              This survives because it mocks the system while living inside it.
            </p>
          </div>

          {/* IMAGE SLOT (CHARACTER GOES HERE LATER) */}
          <div className="h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-float">
            <span className="text-muted font-semibold">
              Character Scene Placeholder
            </span>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold">
            Why It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "It mocks trends instead of chasing them",
              "It feels discovered, not sold",
              "The formula keeps evolving",
            ].map((text) => (
              <div
                key={text}
                className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-float transition"
              >
                <p className="text-lg text-muted">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-30 animate-pulse" />

        <div className="relative max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl font-extrabold">
            The Formula Keeps Evolving
          </h2>
          <p className="text-xl opacity-90">
            You’re either early… or watching.
          </p>

          <a
            href="#"
            className="inline-block px-10 py-5 bg-white text-primary font-bold rounded-xl shadow-float hover:scale-105 transition"
          >
            Ape Responsibly
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-muted">
        © Coin-Meme CTO — No promises. Just momentum.
      </footer>
    </main>
  );
}
