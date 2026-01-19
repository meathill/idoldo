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
  const t = messages.metadata.contact;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        zh: '/zh/contact',
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

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
      <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 py-16 dark:from-primary/5 dark:via-background-dark dark:to-background-dark">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="mb-4 text-4xl font-black text-text-main-light dark:text-white">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-text-sub-light dark:text-text-sub-dark">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-text-main-light dark:text-white">
              {t('info.title')}
            </h2>

            {/* Email Section */}
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-text-main-light dark:text-white">
                <span className="material-symbols-outlined text-primary">mail</span>
                {t('info.email.title')}
              </h3>
              <div className="space-y-2 text-text-sub-light dark:text-text-sub-dark">
                <p>{t('info.email.general')}</p>
                <p>{t('info.email.support')}</p>
                <p>{t('info.email.press')}</p>
              </div>
            </div>

            {/* Social Section */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-text-main-light dark:text-white">
                <span className="material-symbols-outlined text-primary">public</span>
                {t('info.social.title')}
              </h3>
              <p className="mb-4 text-text-sub-light dark:text-text-sub-dark">
                {t('info.social.description')}
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400">
                  <span className="material-symbols-outlined text-xl">chat</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400">
                  <span className="material-symbols-outlined text-xl">flutter_dash</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-surface-dark dark:text-gray-400">
                  <span className="material-symbols-outlined text-xl">photo_camera</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-text-main-light dark:text-white">
              {t('form.title')}
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-text-main-light dark:text-text-main-dark">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-main-light transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-surface-dark dark:text-text-main-dark"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text-main-light dark:text-text-main-dark">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-main-light transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-surface-dark dark:text-text-main-dark"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text-main-light dark:text-text-main-dark">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-main-light transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-surface-dark dark:text-text-main-dark"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-6 py-3 font-bold text-white shadow-glow transition-all hover:bg-primary-dark active:scale-[0.98]">
                {t('form.submit')}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-white/10">
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
