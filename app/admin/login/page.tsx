import { AdminLoginForm } from "@/components/admin-login-form";
import { Logo } from "@/components/logo";
import { ParticleField } from "@/components/particle-field";

type AdminLoginPageProps = {
  searchParams: Promise<{
    next?: string;
  }>;
};

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const params = await searchParams;
  const nextPath = params.next?.startsWith("/") ? params.next : "/admin/import";

  return (
    <main className="relative min-h-screen overflow-hidden bg-hero-radial">
      <ParticleField />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10 sm:px-10">
        <div className="w-full max-w-xl rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,42,0.84),rgba(4,11,24,0.76))] p-7 shadow-card backdrop-blur-xl sm:p-9">
          <div className="flex justify-center">
            <Logo compact />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">Admin Access</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sign in to manage the SHOPAI catalog
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              This protects the importer and admin API routes so only authorized admins can modify
              catalog data.
            </p>
          </div>

          <AdminLoginForm nextPath={nextPath} />
        </div>
      </div>
    </main>
  );
}
