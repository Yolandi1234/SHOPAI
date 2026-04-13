"use client";

import { useState } from "react";
import { sampleImportPayload } from "@/lib/admin-import";

const defaultPayload = JSON.stringify(sampleImportPayload, null, 2);

export function AdminImportConsole() {
  const [payload, setPayload] = useState(defaultPayload);
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const importPayload = async () => {
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/admin/import", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
      });

      const result = (await response.json()) as
        | { success: true; importedStores: number; importedProducts: number }
        | { error: string };

      if (!response.ok || "error" in result) {
        throw new Error("error" in result ? result.error : "Import failed");
      }

      setStatus(
        `Imported ${result.importedStores} stores and ${result.importedProducts} products into Supabase.`
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Import failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,42,0.84),rgba(4,11,24,0.76))] p-6 shadow-card backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/70">Admin Import</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Load your SHOPAI catalog from JSON
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Paste stores and products here, then import them into Supabase in one shot. This is
              the fastest way to move from demo data to a working MVP catalog.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setPayload(defaultPayload)}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Reset Sample Payload
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <label className="mb-3 block text-sm font-medium text-slate-200">
              Import payload JSON
            </label>
            <textarea
              value={payload}
              onChange={(event) => setPayload(event.target.value)}
              spellCheck={false}
              className="min-h-[520px] w-full rounded-[28px] border border-white/10 bg-slate-950/50 px-5 py-4 font-mono text-sm leading-6 text-slate-100 outline-none ring-0 transition focus:border-cyan-300/40"
            />
          </div>

          <div className="space-y-5">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-xl font-semibold text-white">How to use it</h2>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>1. Add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`.</li>
                <li>2. Run your schema first so the `stores` and `products` tables exist.</li>
                <li>3. Paste or edit the JSON payload.</li>
                <li>4. Click import and refresh the search page.</li>
              </ol>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-xl font-semibold text-white">Important</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                This importer is intentionally lightweight and does not include auth yet. It is best
                used during MVP setup in a controlled environment.
              </p>
            </div>

            <button
              type="button"
              onClick={importPayload}
              disabled={isSubmitting}
              className="w-full rounded-full bg-[linear-gradient(135deg,rgba(255,79,203,0.95),rgba(95,213,255,0.95))] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Importing..." : "Import To Supabase"}
            </button>

            {status ? (
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
                {status}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
