import { AnimatedSearchBar } from "@/components/animated-search-bar";
import { Logo } from "@/components/logo";
import { ParticleField } from "@/components/particle-field";

const insights = [
  "Context-aware search prompts",
  "Fast discovery across stores",
  "AI-guided intent understanding",
];

const metrics = [
  { value: "12x", label: "faster product discovery journeys" },
  { value: "94%", label: "intent match confidence in assisted flows" },
  { value: "320+", label: "store-ready search integrations envisioned" },
];

const pillars = [
  {
    eyebrow: "Intent Capture",
    title: "Natural prompts instead of filters and dead-end menus.",
    body: "Shoppers can describe exactly what they want in plain language, and SHOPAI translates that intent into product-ready search signals.",
  },
  {
    eyebrow: "AI Ranking",
    title: "Results ordered around fit, context, and urgency.",
    body: "The engine prioritizes relevance beyond keywords, using intent, budget, product attributes, and local context to surface the right items faster.",
  },
  {
    eyebrow: "Conversion Layer",
    title: "A premium interface designed to turn curiosity into action.",
    body: "From the search glow to the card presentation, every element is built to feel high-trust, premium, and ready for a next click.",
  },
];

const showcase = [
  {
    title: "Gift Discovery",
    copy: "AI understands recipient, occasion, budget, and style in one prompt.",
    accent: "from-[#ff5fd2]/25 to-[#ff9d6c]/10",
  },
  {
    title: "Nearby Shopping",
    copy: "Blend local intent with commerce results for faster purchase decisions.",
    accent: "from-[#66d9ff]/25 to-[#5c7cff]/10",
  },
  {
    title: "High-Intent Fashion",
    copy: "Turn subjective style language into shoppable, ranked product sets.",
    accent: "from-[#ffd66b]/25 to-[#ff5fd2]/10",
  },
];

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Waitlist", href: "#waitlist" },
];

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "mailto:hello@shopai.ai" },
];

export default function HomePage() {
  return (
    <main id="top" className="relative isolate min-h-screen overflow-hidden bg-hero-radial">
      <ParticleField />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" className="shrink-0">
          <Logo compact />
        </a>

        <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-200 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="rounded-full border border-cyan-300/25 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Join Waitlist
        </a>
      </header>

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
        <div className="hero-ring h-[30rem] w-[30rem] animate-[spin_40s_linear_infinite] opacity-40" />
        <div className="hero-ring h-[38rem] w-[38rem] animate-[spin_52s_linear_infinite_reverse] opacity-30" />
        <div className="hero-ring h-[46rem] w-[46rem] animate-[spin_68s_linear_infinite] opacity-20" />

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
          <div className="animate-orbit">
            <Logo />
          </div>

          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-sm uppercase tracking-[0.45em] text-cyan-200/75">
              The AI-native shopping engine
            </p>
            <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Search shopping like the future already arrived.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              SHOPAI turns intent into discovery with a premium AI search experience built for fast
              answers, smarter matching, and effortless product exploration.
            </p>
          </div>

          <div className="mt-10 w-full">
            <AnimatedSearchBar large />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {insights.map((insight) => (
              <span
                key={insight}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_8px_25px_rgba(0,0,0,0.18)]"
              >
                {insight}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-8 sm:px-10">
        <div className="grid gap-4 rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,19,41,0.84),rgba(4,10,24,0.76))] p-6 shadow-card backdrop-blur-xl md:grid-cols-3 md:p-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5 text-left"
            >
              <div className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                {metric.value}
              </div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="platform"
        className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.34em] text-cyan-200/70">Platform Story</p>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-5xl">
              Built for a world where shopping begins with intent, not category pages.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              SHOPAI is positioned like an AI-native search layer for commerce. The experience is
              fast, expressive, and premium enough to support fundraising decks, waitlists, or an
              early product launch.
            </p>
          </div>

          <div className="grid gap-4">
            {showcase.map((item) => (
              <div
                key={item.title}
                className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${item.accent} p-[1px] shadow-[0_18px_60px_rgba(2,8,20,0.45)]`}
              >
                <div className="h-full rounded-[27px] bg-[linear-gradient(180deg,rgba(9,19,42,0.9),rgba(5,11,24,0.85))] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{item.copy}</p>
                    </div>
                    <div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-12"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="glass-panel rounded-[30px] border border-white/10 p-6 shadow-card"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{pillar.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="waitlist"
        className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="glass-panel rounded-[36px] border border-white/10 p-7 shadow-card sm:p-9">
            <p className="text-sm uppercase tracking-[0.34em] text-cyan-200/70">Founder Signal</p>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-5xl">
              Capture early demand before the full shopping engine goes live.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Use this version as a launch teaser, waitlist page, or investor demo. The visual
              system is already strong enough to support outbound sharing and early user validation.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm uppercase tracking-[0.28em] text-pink-200/70">Audience</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Shoppers, retail partners, and early supporters who want a smarter discovery
                  layer for commerce.
                </p>
              </div>
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">Launch Use</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Waitlist capture, pitch demos, design validation, and a polished public preview
                  of the product direction.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,79,203,0.13),rgba(95,213,255,0.12),rgba(255,255,255,0.04))] p-[1px] shadow-[0_22px_80px_rgba(6,12,30,0.5)]">
            <div className="glass-panel h-full rounded-[35px] px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-sm uppercase tracking-[0.34em] text-cyan-200/70">Join Waitlist</p>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Get launch updates from SHOPAI
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Collect interest now and replace this with your real CRM or email platform later.
              </p>

              <form className="mt-8 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">Email address</span>
                  <input
                    type="email"
                    placeholder="founder@brand.com"
                    className="waitlist-input w-full rounded-2xl border border-white/10 px-4 py-3 text-white outline-none transition"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">I am joining as</span>
                  <select className="waitlist-input w-full rounded-2xl border border-white/10 px-4 py-3 text-white outline-none transition">
                    <option>Shopper</option>
                    <option>Retail Partner</option>
                    <option>Investor</option>
                  </select>
                </label>

                <button
                  type="button"
                  className="w-full rounded-full bg-[linear-gradient(135deg,rgba(255,79,203,0.95),rgba(95,213,255,0.95))] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
                >
                  Join The Waitlist
                </button>
              </form>

              <p className="mt-4 text-xs leading-5 text-slate-400">
                Demo form only for now. I can wire this to Formspree, Resend, Supabase, or your own
                backend next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-0 sm:px-10">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,79,203,0.16),rgba(95,213,255,0.14),rgba(245,203,103,0.12))] p-[1px] shadow-[0_30px_100px_rgba(6,12,30,0.55)]">
          <div className="relative rounded-[39px] bg-[linear-gradient(180deg,rgba(8,17,39,0.94),rgba(5,11,25,0.9))] px-6 py-10 text-center sm:px-10 sm:py-14">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
            <p className="text-sm uppercase tracking-[0.34em] text-cyan-200/70">Launch Ready</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-black tracking-tight text-white sm:text-5xl">
              A homepage that can pitch, convert, and preview the product vision in one screen.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Search it, show it, and keep the future-facing feel consistent from first impression
              to results page. SHOPAI is now set up as a strong starting point for a real launch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/search?q=gift%20for%20teacher"
                className="rounded-full bg-[linear-gradient(135deg,rgba(255,79,203,0.95),rgba(95,213,255,0.95))] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Explore Demo Results
              </a>
              <a
                href="#top"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Back To Search
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto mt-16 flex w-full max-w-7xl flex-col gap-6 px-6 pb-10 pt-12 text-sm text-slate-300 sm:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-xl font-black">
            <span className="text-gradient-shop">SHOP</span>
            <span className="text-gradient-ai">AI</span>
          </div>
          <p className="mt-2 max-w-md leading-6 text-slate-400">
            AI-native shopping search with a premium, future-facing experience.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
