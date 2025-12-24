import Image from "next/image";

const LINKS = {
  chart: "https://dexscreener.com/", // put your real dexscreener link
  telegram: "https://t.me/",         // put your real TG
  x: "https://x.com/",               // put your real X
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-stroke bg-card px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-3 flex items-center justify-center gap-2">
        <span className="h-[1px] w-10 bg-white/15" />
        <span className="text-xs tracking-[0.25em] text-white/60">{kicker}</span>
        <span className="h-[1px] w-10 bg-white/15" />
      </div>
      <h2 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-balance text-base text-white/70">{desc}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="bg-canvas relative min-h-screen overflow-hidden">
      <div className="vignette" />

      {/* Floating blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(184,255,61,0.30),transparent_60%)] blur-2xl animate-drift" />
      <div className="pointer-events-none absolute top-24 -left-24 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(65,217,255,0.26),transparent_60%)] blur-2xl animate-floaty" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(124,255,178,0.18),transparent_60%)] blur-2xl animate-drift" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/15 bg-white/5">
              {/* optional: swap with your own icon later */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(65,217,255,0.45),transparent_55%)]" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Coin-Meme CTO</div>
              <div className="text-xs text-white/60">Experiment in Progress</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
            <a className="hover:text-white" href="#formula">Formula</a>
            <a className="hover:text-white" href="#proof">Proof</a>
            <a className="hover:text-white" href="#join">Join</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={LINKS.chart}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10"
            >
              View Chart
            </a>
            <a
              href={LINKS.telegram}
              className="btn-sheen rounded-full bg-neon px-4 py-2 text-sm font-semibold text-black shadow-neon hover:brightness-110"
            >
              Join Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:pb-16 md:pt-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <Pill>🧪 No dev</Pill>
              <Pill>🧱 No paid marketing</Pill>
              <Pill>🧬 Meme evolved on its own</Pill>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight md:text-6xl">
              The meme that <span className="text-neon">refuses</span> to copy.
            </h1>

            <p className="mt-4 text-balance text-lg text-white/70">
              No roadmap. No empty promises. Just a community-driven experiment with one rule:
              <span className="text-white"> the formula evolves.</span>
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={LINKS.chart}
                className="btn-sheen inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-glow hover:brightness-105"
              >
                Ape responsibly → View Chart
              </a>
              <a
                href={LINKS.x}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Follow the experiment on X
              </a>
            </div>

            <p className="mt-4 text-xs text-white/50">
              DYOR. This is crypto. The lab coat is real, the financial advice is not.
            </p>
          </div>

          {/* Hero image (controlled size) */}
          <div className="glass relative overflow-hidden rounded-3xl p-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(184,255,61,0.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(65,217,255,0.18),transparent_55%)]" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image
                src="/images/hero.png"
                alt="Coin-Meme Hero"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="relative mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-black/35 px-3 py-1 text-xs text-white/70 border border-white/10">
                ✨ Animated glow + grain
              </span>
              <span className="rounded-full bg-black/35 px-3 py-1 text-xs text-white/70 border border-white/10">
                📱 Mobile-first layout
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Formula */}
      <section id="formula" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle
          kicker="THE FORMULA"
          title="Humor × Community ÷ Market Dynamics"
          desc="We don’t chase meta. We mock it — then evolve past it."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { t: "Humor that hits", d: "Memes that roast the entire timeline, including ourselves." },
            { t: "Community-first", d: "CTO energy. Direction + conviction. No paid hype." },
            { t: "Market dynamics", d: "We adapt. We pivot. We keep evolving the narrative." },
          ].map((x) => (
            <div key={x.t} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-card2">
              <div className="mb-2 text-sm font-semibold text-white">{x.t}</div>
              <div className="text-sm text-white/70">{x.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="glass relative overflow-hidden rounded-3xl p-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image src="/images/formula.png" alt="Formula" fill className="object-cover" />
            </div>
          </div>
          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <h3 className="text-xl font-semibold">The rule:</h3>
            <p className="mt-2 text-white/70">
              If it’s predictable, it’s dead. If it’s copied, it’s trash. If it evolves, it lives.
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/70">
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neon" />
                <p><span className="text-white">No “coming soon.”</span> We ship memes, culture, and momentum.</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyanpop" />
                <p><span className="text-white">No fake utility.</span> The utility is the community weaponizing humor.</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-neon2" />
                <p><span className="text-white">No cosplay leadership.</span> CTO means direction, not promises.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={LINKS.telegram} className="btn-sheen rounded-2xl bg-neon px-5 py-3 text-center text-sm font-semibold text-black shadow-neon hover:brightness-110">
                Enter the lab → Telegram
              </a>
              <a href={LINKS.chart} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/10">
                Check the chart
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Gallery */}
      <section id="proof" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionTitle
          kicker="PROOF OF EVOLUTION"
          title="A story you can scroll"
          desc="Small images, clean cards, swipeable on mobile. No giant posters eating the page."
        />

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[
            { src: "/images/moon.png", alt: "Moon formula" },
            { src: "/images/community.png", alt: "Community scene" },
            { src: "/images/hero.png", alt: "Behold the formula" },
          ].map((img) => (
            <div
              key={img.src}
              className="glass min-w-[78%] snap-start overflow-hidden rounded-3xl border border-white/10 p-3 sm:min-w-[48%] md:min-w-[32%]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/20">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
              <div className="mt-3 text-sm font-semibold text-white/90">{img.alt}</div>
              <div className="text-xs text-white/60">Scroll → evolve → repeat.</div>
            </div>
          ))}
        </div>
      </section>

      {/* Join */}
      <section id="join" className="mx-auto max-w-6xl px-4 pb-16 pt-6">
        <div className="glass relative overflow-hidden rounded-[28px] p-6 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(184,255,61,0.20),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(65,217,255,0.14),transparent_60%)]" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Ready to join the experiment?
              </h3>
              <p className="mt-2 text-white/70">
                If you’re sick of copy-paste coins, step into the lab.
                This one evolves.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={LINKS.telegram} className="btn-sheen rounded-2xl bg-neon px-5 py-3 text-center text-sm font-semibold text-black shadow-neon hover:brightness-110">
                  Join Telegram
                </a>
                <a href={LINKS.x} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/10">
                  Follow on X
                </a>
              </div>

              <p className="mt-4 text-xs text-white/50">
                Not financial advice. We’re literally mixing chemicals on the homepage.
              </p>
            </div>

            <div className="relative">
              <div className="glass relative overflow-hidden rounded-3xl p-3">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <Image src="/images/community.png" alt="Community" fill className="object-cover" />
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-5 -right-4 hidden md:block h-24 w-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(184,255,61,0.40),transparent_60%)] blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Coin-Meme CTO — The formula evolves.
          </div>
          <div className="flex gap-4 text-sm">
            <a className="text-white/70 hover:text-white" href={LINKS.chart}>Chart</a>
            <a className="text-white/70 hover:text-white" href={LINKS.telegram}>Telegram</a>
            <a className="text-white/70 hover:text-white" href={LINKS.x}>X</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
