export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="section text-center">
        <p className="uppercase tracking-widest text-sm text-acid mb-4">
          Experiment in Progress
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Coin-Meme CTO
        </h1>

        <p className="text-lg md:text-xl text-textDim max-w-2xl mx-auto">
          A memecoin that evolved without permission.
          <br />
          No roadmap. No leader. No reset.
        </p>

        <div className="mt-16 animate-fadeUp">
          <img
            src="/images/hero.png"
            alt="Coin Meme Hero"
            className="mx-auto max-w-xl rounded-xl shadow-glow animate-float"
          />
        </div>
      </section>

      {/* FORMULA SECTION */}
      <section className="section">
        <div className="panel p-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Behold the Formula
            </h2>

            <p className="text-textDim text-lg">
              Not financial advice.
              <br />
              Just an observation.
            </p>
          </div>

          <img
            src="/images/formula.png"
            alt="The Formula"
            className="rounded-xl shadow-glow"
          />
        </div>
      </section>

      {/* CHARACTER STORY */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/images/community.png"
            alt="Community"
            className="rounded-xl shadow-soft"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              No One Is In Charge
            </h2>

            <p className="text-lg text-textDim leading-relaxed">
              This isn’t a brand.
              <br />
              It’s a phenomenon.
              <br /><br />
              It moves when people believe.
              <br />
              It rests when they don’t.
            </p>
          </div>
        </div>
      </section>

      {/* MOON */}
      <section className="section text-center">
        <h2 className="text-4xl font-bold mb-8">
          Destination Unknown
        </h2>

        <div className="flex justify-center">
          <img
            src="/images/moon.png"
            alt="Moon"
            className="max-w-md rounded-full shadow-glow animate-pulseSlow"
          />
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <footer className="section text-center subtle text-sm">
        THIS IS AN EXPERIMENT. FOR ENTERTAINMENT PURPOSES ONLY.
      </footer>

    </main>
  );
}
