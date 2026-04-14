import { AnimatedSearchBar } from "@/components/animated-search-bar";
import { Logo } from "@/components/logo";
import { ParticleField } from "@/components/particle-field";

const quickSearches = [
  "gift for teacher",
  "pink dress under R500",
  "Samsung charger near me",
  "white sneakers women",
];

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-hero-radial">
      <ParticleField />

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
        <div className="hero-ring h-[24rem] w-[24rem] animate-[spin_40s_linear_infinite] opacity-45" />
        <div className="hero-ring h-[32rem] w-[32rem] animate-[spin_52s_linear_infinite_reverse] opacity-30" />
        <div className="hero-ring h-[40rem] w-[40rem] animate-[spin_68s_linear_infinite] opacity-15" />

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="animate-orbit">
            <Logo />
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.44em] text-cyan-200/70">
            AI Shopping Search
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-black tracking-tight text-white sm:text-6xl">
            Search products the way you think.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            A cleaner shopping search experience with glowing AI guidance, product images, prices,
            stores, locations, and human ratings.
          </p>

          <div className="mt-10 w-full max-w-4xl">
            <AnimatedSearchBar large />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {quickSearches.map((query) => (
              <a
                key={query}
                href={`/search?q=${encodeURIComponent(query)}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                {query}
              </a>
            ))}
          </div>

          <div className="mt-12 grid w-full max-w-5xl gap-4 text-left sm:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Images</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Visual product cards that feel clear, modern, and search-first.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Prices</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Immediate price visibility so shoppers can compare faster.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Locations</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Nearby store options and human ratings for real-world confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
