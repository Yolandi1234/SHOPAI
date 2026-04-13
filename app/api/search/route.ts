import { NextRequest, NextResponse } from "next/server";
import { Coordinates } from "@/lib/mock-products";
import { getSearchExperienceWithSupabase } from "@/lib/supabase-search";

const parseCoordinate = (value: string | null) => {
  if (!value) return undefined;

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() ?? "";
  const latitude = parseCoordinate(searchParams.get("lat"));
  const longitude = parseCoordinate(searchParams.get("lng"));

  const coordinates: Coordinates | undefined =
    latitude !== undefined && longitude !== undefined
      ? { latitude, longitude }
      : undefined;

  const { experience, source } = await getSearchExperienceWithSupabase(query, coordinates);

  return NextResponse.json({
    ...experience,
    source,
  });
}
