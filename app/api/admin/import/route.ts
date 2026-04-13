import { NextRequest, NextResponse } from "next/server";
import { parseAdminImportPayload } from "@/lib/admin-import";
import { hasSupabaseAdminEnv, supabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  if (!hasSupabaseAdminEnv || !supabaseAdmin) {
    return NextResponse.json(
      {
        error:
          "Supabase admin credentials are missing. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local.",
      },
      { status: 400 }
    );
  }

  try {
    const body = (await request.json()) as { payload?: string };
    const rawPayload = body.payload?.trim();

    if (!rawPayload) {
      return NextResponse.json({ error: "No import payload was provided." }, { status: 400 });
    }

    const payload = parseAdminImportPayload(rawPayload);

    const { error: storeError } = await supabaseAdmin.from("stores").upsert(payload.stores);
    if (storeError) {
      throw storeError;
    }

    const { error: productError } = await supabaseAdmin.from("products").upsert(payload.products);
    if (productError) {
      throw productError;
    }

    return NextResponse.json({
      success: true,
      importedStores: payload.stores.length,
      importedProducts: payload.products.length,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Import failed for an unknown reason.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
