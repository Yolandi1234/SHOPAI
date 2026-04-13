"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const EXAMPLE_SEARCHES = [
  "pink dress under R500",
  "dog bed for large breeds",
  "gift for teacher",
  "Samsung charger near me",
];

type AnimatedSearchBarProps = {
  initialQuery?: string;
  large?: boolean;
};

export function AnimatedSearchBar({
  initialQuery = "",
  large = false,
}: AnimatedSearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [exampleIndex, setExampleIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);

  const activeExample = useMemo(
    () => EXAMPLE_SEARCHES[exampleIndex % EXAMPLE_SEARCHES.length],
    [exampleIndex]
  );

  useEffect(() => {
    if (query) return;

    const typeInterval = window.setInterval(() => {
      setTypedLength((current) => {
        if (current >= activeExample.length) {
          window.clearInterval(typeInterval);
          return current;
        }

        return current + 1;
      });
    }, 45);

    return () => window.clearInterval(typeInterval);
  }, [activeExample, query]);

  useEffect(() => {
    if (query) return;

    const rotateInterval = window.setInterval(() => {
      setTypedLength(0);
      setExampleIndex((current) => (current + 1) % EXAMPLE_SEARCHES.length);
    }, 3000);

    return () => window.clearInterval(rotateInterval);
  }, [query]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const finalQuery = query.trim() || activeExample;
    router.push(`/search?q=${encodeURIComponent(finalQuery)}`);
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      className={`search-glow relative mx-auto w-full ${large ? "max-w-4xl" : "max-w-3xl"}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="glass-panel relative flex min-h-[72px] items-center gap-3 rounded-full border border-white/10 px-5 py-3 shadow-aura sm:min-h-[84px] sm:px-7">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold">
            <path
              d="M10.5 3.75a6.75 6.75 0 1 0 4.243 11.997l4.255 4.255 1.06-1.06-4.255-4.255A6.75 6.75 0 0 0 10.5 3.75Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative min-w-0 flex-1">
          <input
            value={query}
            onChange={(event) => {
              const nextQuery = event.target.value;
              setQuery(nextQuery);

              if (!nextQuery) {
                setTypedLength(0);
              }
            }}
            aria-label="Search products with AI"
            className={`w-full bg-transparent pr-4 outline-none placeholder:text-transparent ${
              large ? "text-lg sm:text-2xl" : "text-base sm:text-xl"
            } font-medium tracking-[0.01em] text-white`}
            placeholder={activeExample}
          />

          <AnimatePresence mode="wait">
            {!query && (
              <motion.div
                key={activeExample}
                className={`pointer-events-none absolute inset-y-0 left-0 flex items-center text-white/60 ${
                  large ? "text-lg sm:text-2xl" : "text-base sm:text-xl"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <span>{activeExample.slice(0, typedLength)}</span>
                <span className="ml-0.5 inline-block h-[1.15em] w-[2px] animate-blink bg-gradient-to-b from-pink-300 to-cyan-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-[linear-gradient(135deg,rgba(255,79,203,0.95),rgba(95,213,255,0.95))] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(95,213,255,0.22)] transition hover:shadow-[0_14px_36px_rgba(255,79,203,0.22)] sm:px-6"
        >
          Search
        </motion.button>
      </div>
    </motion.form>
  );
}
