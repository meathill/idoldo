import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/routing';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next`, `/_vercel`, or `/favicon.ico`
    // - … if they contain a dot (e.g. `file.svg`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
