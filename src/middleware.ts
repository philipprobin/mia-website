import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const supportedLangs = ['de', 'pl'];
const defaultLang = 'de';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already contains a supported language
  const pathnameHasLang = supportedLangs.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLang) {
    return;
  }

  // Redirect from root to the preferred language
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language');
    let preferredLang = defaultLang;

    if (acceptLanguage) {
      const langs = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
      for (const lang of langs) {
        if (supportedLangs.includes(lang)) {
          preferredLang = lang;
          break;
        }
        const baseLang = lang.split('-')[0];
        if (supportedLangs.includes(baseLang)) {
          preferredLang = baseLang;
          break;
        }
      }
    }

    request.nextUrl.pathname = `/${preferredLang}`;
    return NextResponse.redirect(request.nextUrl);
  }
}
