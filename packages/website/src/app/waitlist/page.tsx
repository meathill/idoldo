import WaitlistView from '@/components/waitlist-view';

type WaitlistPageProps = {
  searchParams?: {
    status?: string;
    position?: string;
  };
};

export default function WaitlistPage({ searchParams }: WaitlistPageProps) {
  const statusParam = searchParams?.status ?? null;
  const positionParam = searchParams?.position ?? null;

  return (
    <WaitlistView
      statusParam={statusParam}
      positionParam={positionParam}
    />
  );
}
