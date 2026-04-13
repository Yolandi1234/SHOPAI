import { NextRequest, NextResponse } from "next/server";
import { adminCookieName, verifyAdminSessionToken } from "@/lib/admin-auth";

const isProtectedAdminPath = (pathname: string) =>
  pathname.startsWith("/admin") || pathname.startsWith("/api/admin");

const isPublicAdminPath = (pathname: string) =>
  pathname === "/admin/login" ||
  pathname === "/api/admin/login" ||
  pathname === "/api/admin/logout";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isProtectedAdminPath(pathname) || isPublicAdminPath(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(adminCookieName)?.value;
  const isAuthed = verifyAdminSessionToken(token);

  if (isAuthed) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/admin")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
