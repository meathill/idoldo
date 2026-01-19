import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.metadata.about;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: '/en/about',
        zh: '/zh/about',
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const values = ['creativity', 'community', 'simplicity'] as const;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-surface-light/80 backdrop-blur-md dark:border-white/5 dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl text-primary">star</span>
            <span className="text-lg font-bold">IdolDo</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 py-20 dark:from-primary/5 dark:via-background-dark dark:to-background-dark">
        <div className="absolute inset-0 bg-confetti opacity-30"></div>
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <h1 className="mb-6 text-5xl font-black text-text-main-light dark:text-white">
            {t('hero.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-text-sub-light dark:text-text-sub-dark">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-5 py-16">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-text-main-light dark:text-white">
            {t('mission.title')}
          </h2>
          <p className="text-lg leading-relaxed text-text-main-light dark:text-text-main-dark">
            {t('mission.content')}
          </p>
        </section>

        {/* Story */}
        <section className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-text-main-light dark:text-white">
            {t('story.title')}
          </h2>
          <p className="text-lg leading-relaxed text-text-main-light dark:text-text-main-dark">
            {t('story.content')}
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-text-main-light dark:text-white">
            {t('values.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg dark:border-white/5 dark:bg-surface-dark">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <span className="material-symbols-outlined text-2xl text-primary">
                    {value === 'creativity' ? 'palette' : value === 'community' ? 'groups' : 'auto_awesome'}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-main-light dark:text-white">
                  {t(`values.${value}.title`)}
                </h3>
                <p className="text-text-sub-light dark:text-text-sub-dark">
                  {t(`values.${value}.description`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 pt-8 dark:border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary-dark">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            {locale === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>
        </div>
      </main>
    </div>
  );
}
