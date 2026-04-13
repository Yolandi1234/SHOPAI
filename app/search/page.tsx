import { AnimatedSearchBar } from "@/components/animated-search-bar";
import { Logo } from "@/components/logo";
import { ParticleField } from "@/components/particle-field";
import { SearchResultsExperience } from "@/components/search-results-experience";
import { getSearchExperienceWithSupabase } from "@/lib/supabase-search";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const { experience: initialExperience } = await getSearchExperienceWithSupabase(query);

  return (
    <main className="relative min-h-screen overflow-hidden bg-hero-radial">
      <ParticleField />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-10">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo compact />
          <div className="w-full max-w-3xl">
            <AnimatedSearchBar initialQuery={query} />
          </div>
        </header>
        <SearchResultsExperience initialQuery={query} initialExperience={initialExperience} />
      </div>
    </main>
  );
}
