import { getCloudflareContext } from '@opennextjs/cloudflare';

interface WaitlistRequest {
  email?: unknown;
  source?: unknown;
}

interface WaitlistRow {
  id: string;
  created_at: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(input: unknown) {
  if (typeof input !== 'string') {
    return '';
  }
  return input.trim().toLowerCase();
}

function normalizeSource(input: unknown) {
  if (typeof input !== 'string') {
    return null;
  }
  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }
  return trimmed.slice(0, 80);
}

function isValidEmail(email: string) {
  return email.length > 3 && email.length <= 254 && EMAIL_PATTERN.test(email);
}

function isMissingTableError(error: unknown) {
  if (!(error instanceof Error)) {
    return false;
  }
  return error.message.toLowerCase().includes('no such table');
}

export async function POST(request: Request) {
  let body: WaitlistRequest;

  try {
    body = (await request.json()) as WaitlistRequest;
  } catch {
    return Response.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const email = normalizeEmail(body.email);
  if (!isValidEmail(email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const source = normalizeSource(body.source);

  const { env } = getCloudflareContext();
  const db = env.DB;

  if (!db) {
    return Response.json({ error: 'Database is not configured.' }, { status: 500 });
  }

  try {
    const session = db.withSession('first-primary');
    const existing = await session
      .prepare('SELECT id, created_at FROM waitlist WHERE email = ? LIMIT 1')
      .bind(email)
      .first<WaitlistRow>();

    let status: 'joined' | 'exists' = 'exists';

    if (!existing) {
      const id = crypto.randomUUID();
      const createdAt = new Date().toISOString();
      await session
        .prepare('INSERT INTO waitlist (id, email, source, created_at) VALUES (?, ?, ?, ?)')
        .bind(id, email, source, createdAt)
        .run();
      status = 'joined';
    }

    const row =
      existing ??
      (await session
        .prepare('SELECT id, created_at FROM waitlist WHERE email = ? LIMIT 1')
        .bind(email)
        .first<WaitlistRow>());

    if (!row) {
      return Response.json({ error: 'Failed to store waitlist entry.' }, { status: 500 });
    }

    const positionResult = await session
      .prepare('SELECT COUNT(*) as count FROM waitlist WHERE created_at < ? OR (created_at = ? AND id <= ?)')
      .bind(row.created_at, row.created_at, row.id)
      .first<{ count: number }>();

    const position = Math.max(1, Number(positionResult?.count ?? 1));

    return Response.json({ status, position });
  } catch (error) {
    console.error(error);
    if (isMissingTableError(error)) {
      return Response.json({ error: 'Waitlist table is not initialized.' }, { status: 500 });
    }
    return Response.json({ error: 'Database request failed.' }, { status: 500 });
  }
}
