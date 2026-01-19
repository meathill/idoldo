'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const localeNames: Record<string, string> = {
  en: 'EN',
  zh: '中文',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value;
    // Remove current locale from pathname and add new one
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm font-medium text-text-main-light transition-colors hover:border-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-surface-dark dark:text-text-main-dark"
      aria-label="Select language">
      <option value="en">{localeNames.en}</option>
      <option value="zh">{localeNames.zh}</option>
    </select>
  );
}
