import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") || "Unknown";

  const response = NextResponse.next();
  response.headers.set("x-detected-country", country);

  return response;
}
