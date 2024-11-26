export function middleware(req, ev) {
  const res = NextResponse.next();

  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  return res;
}
