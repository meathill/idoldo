'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function WaitlistPage() {
  const [copied, setCopied] = useState(false);
  const searchParams = useSearchParams();
  const statusParam = searchParams.get('status');
  const positionParam = searchParams.get('position');
  const parsedPosition = Number.parseInt(positionParam ?? '', 10);
  const positionLabel =
    Number.isFinite(parsedPosition) && parsedPosition > 0 ? parsedPosition.toLocaleString('en-US') : '4,892';
  const titleText = statusParam === 'exists' ? "You're already on the list!" : "You're on the list!";
  const introText = statusParam === 'exists' ? 'Welcome back!' : 'Thank you for joining the waitlist.';

  async function handleCopy() {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText('IDOL-888-DO');
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 font-display text-text-main-light dark:from-background-dark dark:via-surface-dark dark:to-background-dark dark:text-text-main-dark">
      <div className="pointer-events-none absolute inset-0 z-0 bg-confetti"></div>
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-64 w-full bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col px-6 py-8">
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <span
                className="material-symbols-outlined filled"
                style={{
                  fontSize: '20px',
                  fontVariationSettings: "'FILL' 1",
                }}>
                favorite
              </span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">IdolDo</h2>
          </Link>
        </div>

        <div className="mb-8 mt-4 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <span
              className="material-symbols-outlined absolute -right-6 -top-4 animate-pulse text-yellow-400"
              style={{
                fontSize: '32px',
                fontVariationSettings: "'FILL' 1",
              }}>
              spark
            </span>
            <span
              className="material-symbols-outlined absolute -left-8 bottom-0 animate-bounce text-primary/60"
              style={{ fontSize: '24px' }}>
              celebration
            </span>
            <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-primary to-secondary p-1 shadow-xl shadow-primary/20">
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white dark:bg-surface-dark">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpQ_raEsZFTs8KuBq0FIqoVufngmj5jWcn-QdN7RtXicNYSBnWBBYj--px-TcnRjtR4cFfPiFVKPDTtVzcZL9npBRMIP3IPELiRtaLkfQZv0ajoFKxxKblN0ewNTWlqHTgLnPBMUf_IgmxLhc7HmXvYY6riOq4VGkg2aJiJdcM4y2LCkyXiDRbpJxvrIxu9Gna_nYyTJKt0st2kjsaFCqJQ2n4XGk2B7o8DVXwrzKAIHu-v2BFJRi-QUlWGxOvGRHGgYgxKl5LTvPI')",
                  }}></div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-full border-4 border-white bg-green-500 p-1.5 text-white shadow-sm dark:border-surface-dark">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '20px' }}>
                check
              </span>
            </div>
          </div>

          <h1 className="mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-extrabold text-transparent">
            {titleText}
          </h1>
          <p className="font-medium leading-relaxed text-text-sub-light dark:text-text-sub-dark">
            {introText} You are currently <span className="font-bold text-primary">#{positionLabel}</span> in line to
            create your own idol universe.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-purple-100 bg-white p-6 shadow-xl shadow-primary/5 transition-transform hover:scale-[1.02] dark:border-white/5 dark:bg-surface-dark">
          <div className="mb-4 text-center">
            <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary dark:bg-purple-900/30 dark:text-purple-300">
              Fan Ambassador
            </span>
            <h3 className="text-lg font-bold">Your Exclusive Invite Code</h3>
            <p className="mt-1 text-sm text-text-sub-light dark:text-text-sub-dark">
              Share this code to skip the line!
            </p>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-dashed border-primary/30 bg-background-waitlist p-2 pl-5 dark:bg-background-dark">
            <span className="font-mono text-lg font-bold tracking-widest text-primary">IDOL-888-DO</span>
            <button
              onClick={handleCopy}
              className="group flex items-center gap-1 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-white active:scale-95 dark:bg-surface-light"
              type="button">
              <span>{copied ? 'Copied!' : 'Copy'}</span>
              {!copied && (
                <span
                  className="material-symbols-outlined group-hover:hidden"
                  style={{ fontSize: '18px' }}>
                  content_copy
                </span>
              )}
              {copied && (
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '18px' }}>
                  check
                </span>
              )}
            </button>
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-blue-50 p-3 dark:bg-blue-900/10">
            <span
              className="material-symbols-outlined shrink-0 text-blue-500"
              style={{ fontSize: '20px' }}>
              rocket_launch
            </span>
            <p className="text-xs font-medium leading-snug text-blue-700 dark:text-blue-200">
              <span className="font-bold">Referral Bonus:</span> Every friend who joins using your code bumps you up{' '}
              <span className="font-bold">100 spots</span> on the waitlist!
            </p>
          </div>
        </div>

        <div className="mb-8 grid w-full grid-cols-1 gap-4">
          <button
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#07C160] font-bold text-white shadow-lg shadow-green-200 transition-transform hover:bg-[#06ad56] active:scale-95 dark:shadow-none"
            type="button">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '24px' }}>
              chat_bubble
            </span>
            Share on WeChat
          </button>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#E6162D] font-bold text-white shadow-lg shadow-red-200 transition-transform hover:bg-[#d41429] active:scale-95 dark:shadow-none"
              type="button">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '20px' }}>
                public
              </span>
              Weibo
            </button>
            <button
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-black font-bold text-white shadow-lg shadow-gray-200 transition-transform hover:bg-gray-800 active:scale-95 dark:shadow-none"
              type="button">
              <span className="text-xl font-sans">𝕏</span>
              Twitter
            </button>
          </div>
        </div>

        <div className="mt-auto flex flex-col items-center pt-6">
          <div className="relative mb-4 h-32 w-full max-w-[280px] overflow-hidden rounded-2xl shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
            <div className="flex h-full items-end justify-center gap-2 px-4 pb-0">
              <div
                className="h-20 w-16 translate-y-2 -rotate-6 rounded-t-lg bg-cover bg-top opacity-80"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7rve9iM3mMbx1OZjr-RHnAXKp83rTQwRHnw2DdeUnv8L5WS8eU2guPKRwmkyOIeyZHyCkgRQPmfawZv1P2YjNcJNGRysqOhsUHafABwY-ZhGKUOkpa2VTIehlmey0ig34AiWkdSTTYMBAkmC9juIluLB90BWmlrV52CMKApBta0izUv8VXXNRIAaFREbsX5j4D-thnI2pp7EcD6ITmupBScdySltGjhqBXlGZDRFW2v_3akHwWHEJQjuc__H6jv6pHTeKrRGNmQT4')",
                }}></div>
              <div
                className="h-24 w-20 rounded-t-lg bg-cover bg-top shadow-lg"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvc3cU3_9RjcI-_yDi8EljSQlQsPi9oiHtMNSU2ZwbrsatDDla_je0mgbpaZixiJh0hxX0Q2nrcykPbP4lebnlGMkLFGSymjG1RBhWPI4-YkFN2JcO635vyGRKc-9mL7cFPHgD_xD4qbAKIsxhMgfTHUf5VhBDMowkBFBnHlr8VFan9LISNyRfm_n0bHaQpuQYAn_LzFatwBod6l8sh8bpNRx-LC24Y_LPbkk3UA4ns-P2Vp_GGILBKO94PYUGxJhbmc1zDrHVK31b')",
                }}></div>
              <div
                className="h-20 w-16 translate-y-2 rotate-6 rounded-t-lg bg-cover bg-top opacity-80"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBafX3UFxmjAJ2bBLL9067eOuHtM76UYX8y6ojRDXeARtuXhisjYMbuKjro7F4ZwpJ9Jo7AeGmJ5xdJ3MOrCxryS99rbZQuCZGAVFzzMkb9QH6y9yAv_WCoq0rRR1YGEMlQF0b6DrkHfmzmUQPTrpolMAwGWXSZRV6zaaA80tfYEuFWXcInFWuyf8OSQmkYtBRqSDif_UBSFVFByf0Yogl6T2TU7Y72NaYyYapP0Z3BH_7iFsmjC1KVD86PU6HkuTJiQhYDBYd_ex3_')",
                }}></div>
            </div>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-text-sub-light transition-colors hover:text-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
