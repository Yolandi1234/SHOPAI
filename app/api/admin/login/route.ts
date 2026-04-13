import { NextRequest, NextResponse } from "next/server";
import {
  adminCookieName,
  createAdminSessionToken,
  hasAdminAuthEnv,
  validateAdminCredentials,
} from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  if (!hasAdminAuthEnv) {
    return NextResponse.json(
      {
        error:
          "Admin auth is not configured. Add ADMIN_USERNAME, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET to .env.local.",
      },
      { status: 400 }
    );
  }

  const body = (await request.json()) as {
    username?: string;
    password?: string;
  };

  const username = body.username?.trim() ?? "";
  const password = body.password ?? "";

  if (!validateAdminCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: adminCookieName,
    value: createAdminSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}
