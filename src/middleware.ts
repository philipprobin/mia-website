import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";

const supportedLangs = ["de", "pl"];
const defaultLang = "de";

acceptLanguage.languages(supportedLangs);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;


  // Allow Google Search Console verification files at root
  if (pathname === "/google2e672a4ba1bb5751.html") {
    return NextResponse.next();
  }


  // Check if the pathname already contains a supported language
  const pathnameHasLang = supportedLangs.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLang) {
    return NextResponse.next();
  }

  // Redirect from root to the preferred language
  const lang =
    acceptLanguage.get(request.headers.get("Accept-Language")) || defaultLang;
  const url = new URL(`/${lang}${pathname}`, request.url);

  return NextResponse.redirect(url);
}