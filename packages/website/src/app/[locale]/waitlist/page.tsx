import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import WaitlistView from '@/components/waitlist-view';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    status?: string;
    position?: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.metadata.waitlist;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}/waitlist`,
      languages: {
        en: '/en/waitlist',
        zh: '/zh/waitlist',
      },
    },
  };
}

export default async function WaitlistPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const search = await searchParams;
  setRequestLocale(locale);

  const statusParam = search?.status ?? null;
  const positionParam = search?.position ?? null;

  return (
    <WaitlistView
      statusParam={statusParam}
      positionParam={positionParam}
    />
  );
}
