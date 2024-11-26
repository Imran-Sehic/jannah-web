import { NextResponse } from "next/server";

export function middleware(req: any) {
  const country = req.geo?.country || "Unknown";

  const res = NextResponse.next();

  res.headers.set("x-detected-country", country);

  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );

  return res;
}
