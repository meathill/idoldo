'use client';

import { useTranslations } from 'next-intl';

export default function LandingFeatures() {
  const t = useTranslations('features');

  return (
    <section className="w-full bg-white py-20 px-5 dark:bg-surface-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-bold text-text-main-light dark:text-white sm:text-4xl">{t('title')}</h2>
          <p className="text-lg text-text-sub-light dark:text-text-sub-dark">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-transparent bg-background-light p-8 transition-all hover:border-primary/20 hover:shadow-lg dark:bg-background-dark">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">magic_button</span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-main-light dark:text-white">{t('oneClick.title')}</h3>
            <p className="leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              {t('oneClick.description')}
            </p>
          </div>
          <div className="group rounded-2xl border border-transparent bg-background-light p-8 transition-all hover:border-primary/20 hover:shadow-lg dark:bg-background-dark">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 transition-transform group-hover:scale-110 dark:text-purple-400">
              <span className="material-symbols-outlined text-3xl">bolt</span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-main-light dark:text-white">{t('instantPlay.title')}</h3>
            <p className="leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              {t('instantPlay.description')}
            </p>
          </div>
          <div className="group rounded-2xl border border-transparent bg-background-light p-8 transition-all hover:border-primary/20 hover:shadow-lg dark:bg-background-dark">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-400/10 text-pink-500 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">redeem</span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-main-light dark:text-white">{t('rewards.title')}</h3>
            <p className="leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              {t('rewards.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
