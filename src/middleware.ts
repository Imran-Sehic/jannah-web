import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  const country = request.geo?.country || "Unknown";

  const response = NextResponse.next();
  response.headers.set("x-detected-country", country);

  return response;
}
