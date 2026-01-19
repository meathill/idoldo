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
  const t = messages.metadata.privacy;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        en: '/en/privacy',
        zh: '/zh/privacy',
      },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('privacy');

  const lastUpdated = new Date('2025-01-01').toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sections = ['collect', 'use', 'share', 'security', 'contact'] as const;

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

      {/* Content */}
      <main className="mx-auto max-w-4xl px-5 py-12">
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="mb-4 text-4xl font-bold text-text-main-light dark:text-white">
            {t('title')}
          </h1>
          <p className="mb-8 text-text-sub-light dark:text-text-sub-dark">
            {t('lastUpdated', { date: lastUpdated })}
          </p>

          <p className="mb-8 text-lg leading-relaxed text-text-main-light dark:text-text-main-dark">
            {t('intro')}
          </p>

          {sections.map((section) => (
            <section key={section} className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-text-main-light dark:text-white">
                {t(`sections.${section}.title`)}
              </h2>
              <div className="whitespace-pre-line text-text-main-light dark:text-text-main-dark">
                {t(`sections.${section}.content`)}
              </div>
            </section>
          ))}
        </article>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-white/10">
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
