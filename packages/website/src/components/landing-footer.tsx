'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function LandingFooter() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-background-light px-5 py-16 dark:border-white/5 dark:bg-background-dark">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">{t('comingSoon')}</span>
          <h3 className="text-2xl font-bold text-text-main-light dark:text-white">{t('joinCommunity')}</h3>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all hover:scale-110 hover:text-primary dark:bg-surface-dark"
            href="#">
            <span
              aria-label="WeChat"
              className="material-symbols-outlined">
              chat
            </span>
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all hover:scale-110 hover:text-primary dark:bg-surface-dark"
            href="#">
            <span
              aria-label="Twitter / X"
              className="material-symbols-outlined">
              flutter_dash
            </span>
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all hover:scale-110 hover:text-primary dark:bg-surface-dark"
            href="#">
            <span
              aria-label="Instagram"
              className="material-symbols-outlined">
              photo_camera
            </span>
          </a>
        </div>
        <div className="my-2 h-px w-24 bg-gray-300 dark:bg-white/10"></div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-text-sub-light dark:text-text-sub-dark">{t('launchingSoon')}</p>
          <div className="flex cursor-pointer items-center gap-2 grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100">
            <div className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
              <span className="material-symbols-outlined text-xl">ios</span>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium uppercase">{t('downloadOn')}</span>
                <span className="text-sm font-bold">{t('appStore')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link
            href="/privacy"
            className="text-text-sub-light transition-colors hover:text-primary dark:text-text-sub-dark">
            {t('privacy')}
          </Link>
          <span className="text-text-sub-light/50 dark:text-text-sub-dark/50">•</span>
          <Link
            href="/tos"
            className="text-text-sub-light transition-colors hover:text-primary dark:text-text-sub-dark">
            {t('tos')}
          </Link>
          <span className="text-text-sub-light/50 dark:text-text-sub-dark/50">•</span>
          <Link
            href="/about"
            className="text-text-sub-light transition-colors hover:text-primary dark:text-text-sub-dark">
            {t('about')}
          </Link>
          <span className="text-text-sub-light/50 dark:text-text-sub-dark/50">•</span>
          <Link
            href="/contact"
            className="text-text-sub-light transition-colors hover:text-primary dark:text-text-sub-dark">
            {t('contact')}
          </Link>
        </div>

        <p className="mt-8 text-sm text-text-sub-light/60 dark:text-text-sub-dark/60">
          {t('copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
}
