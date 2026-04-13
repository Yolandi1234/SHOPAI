import { AdminImportConsole } from "@/components/admin-import-console";
import { AdminLogoutButton } from "@/components/admin-logout-button";
import { Logo } from "@/components/logo";
import { ParticleField } from "@/components/particle-field";

export default function AdminImportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-hero-radial">
      <ParticleField />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-10">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Logo compact />
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/search?q=gift%20for%20teacher"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back To Search
            </a>
            <AdminLogoutButton />
          </div>
        </header>

        <AdminImportConsole />
      </div>
    </main>
  );
}
