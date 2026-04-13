"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Coordinates, SearchExperience } from "@/lib/mock-products";

type SearchResultsExperienceProps = {
  initialQuery: string;
  initialExperience: SearchExperience;
};

type LocationState = "idle" | "locating" | "ready" | "denied" | "error";

const buildSearchUrl = (query: string, location?: Coordinates) => {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (location) {
    params.set("lat", String(location.latitude));
    params.set("lng", String(location.longitude));
  }

  return `/api/search?${params.toString()}`;
};

export function SearchResultsExperience({
  initialQuery,
  initialExperience,
}: SearchResultsExperienceProps) {
  const [experience, setExperience] = useState<SearchExperience>(initialExperience);
  const [location, setLocation] = useState<Coordinates | undefined>();
  const [locationState, setLocationState] = useState<LocationState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    let active = true;

    const refreshExperience = async () => {
      setIsRefreshing(true);

      try {
        const response = await fetch(buildSearchUrl(initialQuery, location), {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Search refresh failed");
        }

        const nextExperience = (await response.json()) as SearchExperience;
        if (active) {
          setExperience(nextExperience);
          setErrorMessage("");
        }
      } catch {
        if (active) {
          setErrorMessage("Could not refresh local store results right now.");
        }
      } finally {
        if (active) {
          setIsRefreshing(false);
        }
      }
    };

    if (location) {
      void refreshExperience();
    }

    return () => {
      active = false;
    };
  }, [initialQuery, location]);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationState("error");
      setErrorMessage("Geolocation is not supported in this browser.");
      return;
    }

    setLocationState("locating");
    setErrorMessage("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationState("ready");
      },
      () => {
        setLocationState("denied");
        setErrorMessage("Location access was denied, so results stay in demo mode.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  };

  const { products, topPick, nearbyStores, serviceHighlights, aiSummary, userAreaLabel } =
    experience;

  return (
    <section className="mt-10 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,42,0.8),rgba(4,11,24,0.7))] p-6 shadow-card backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">AI Results</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {initialQuery ? `Top matches for "${initialQuery}"` : "Trending AI shopping matches"}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            {aiSummary}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            {products.length} results surfaced
          </div>
          <button
            type="button"
            onClick={requestLocation}
            disabled={locationState === "locating" || isRefreshing}
            className="rounded-full border border-cyan-300/25 bg-white/5 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {locationState === "locating"
              ? "Finding your area..."
              : locationState === "ready"
                ? "Location connected"
                : "Use my location"}
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-slate-200">
          Coverage: {userAreaLabel}
        </span>
        {isRefreshing ? (
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100">
            Refreshing nearby store matches...
          </span>
        ) : null}
        {errorMessage ? (
          <span className="rounded-full border border-pink-300/20 bg-pink-300/10 px-4 py-2 text-pink-100">
            {errorMessage}
          </span>
        ) : null}
      </div>

      {topPick ? (
        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Top Recommended</p>
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-center">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gradient-to-r from-pink-400/20 to-cyan-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    {topPick.badge}
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-gold ring-1 ring-white/10">
                    AI Rating {topPick.aiScore}%
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-white">{topPick.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  {topPick.description}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Price</div>
                    <div className="mt-2 text-xl font-semibold text-white">{topPick.price}</div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Closest Store
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      {topPick.storeDistance}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={topPick.retailerUrl}
                    className="rounded-full bg-[linear-gradient(135deg,rgba(255,79,203,0.95),rgba(95,213,255,0.95))] px-5 py-3 text-sm font-semibold text-slate-950"
                  >
                    Go To Shop
                  </a>
                  <a
                    href="#nearby-stores"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
                  >
                    See Nearby Stores
                  </a>
                </div>
              </div>

              <div className="min-w-0 flex-1 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                  Services Available
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {serviceHighlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside
            id="nearby-stores"
            className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
              Closest Stores
            </p>
            <div className="mt-4 space-y-4">
              {nearbyStores.map((store) => (
                <div
                  key={`${store.id}-${store.distanceLabel}`}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{store.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {store.category} in {store.city}
                      </p>
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-100">
                      {store.distanceLabel}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{store.fulfillment}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {store.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      ) : null}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
