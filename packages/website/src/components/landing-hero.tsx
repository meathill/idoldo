'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LandingHero() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  function handleJoin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push('/waitlist');
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-surface-light/80 backdrop-blur-md dark:border-white/5 dark:bg-background-dark/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl text-primary">star</span>
            <h2 className="text-xl font-bold tracking-tight">IdolDo</h2>
            <span className="ml-1 hidden rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-primary sm:inline-block">
              Beta
            </span>
          </div>
          <div className="flex items-center">
            <Link
              className="rounded-full bg-primary/10 px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/20 dark:bg-primary dark:text-white dark:hover:bg-primary-dark"
              href="/waitlist">
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      <header className="@container mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-12 lg:py-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="z-10 flex max-w-[600px] flex-col gap-8 text-center lg:w-1/2 lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-text-main-light dark:text-white sm:text-5xl lg:text-6xl">
                Make a Game for Your{' '}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Idol</span>{' '}
                in 3 Seconds
              </h1>
              <h2 className="mx-auto max-w-lg text-lg font-medium leading-relaxed text-text-sub-light dark:text-text-sub-dark sm:text-xl lg:mx-0">
                Unleash your creativity. No coding required. Share instantly via App Clip and let the fandom play.
              </h2>
            </div>
            <form
              onSubmit={handleJoin}
              className="mx-auto flex w-full max-w-md flex-col gap-2 rounded-full border border-gray-100 bg-white p-2 shadow-lg dark:border-white/5 dark:bg-surface-dark sm:flex-row lg:mx-0">
              <div className="flex h-12 flex-1 items-center px-4 sm:h-14">
                <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark">mail</span>
                <input
                  className="ml-2 w-full border-none bg-transparent text-text-main-light placeholder:text-text-sub-light/50 focus:ring-0 dark:text-white dark:placeholder:text-text-sub-dark/50"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="h-12 whitespace-nowrap rounded-full bg-primary px-8 font-bold text-white shadow-glow transition-all active:scale-95 sm:h-14 hover:bg-primary-dark">
                Get Early Access
              </button>
            </form>
            <p className="flex items-center justify-center gap-1 text-xs font-medium text-text-sub-light dark:text-text-sub-dark lg:justify-start">
              <span className="material-symbols-outlined text-sm">lock</span>
              No spam. Unsubscribe anytime.
            </p>
          </div>

          <div className="perspective-1000 relative mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-3xl -z-10 animate-pulse sm:h-[500px] sm:w-[500px]"></div>
            <div className="relative flex h-[600px] w-full max-w-[400px] items-center justify-center">
              <div className="absolute bottom-0 left-[-20px] z-0 w-[200px] origin-bottom-right -rotate-[15deg] scale-90 transform opacity-90 transition-transform duration-500 hover:rotate-0 hover:scale-100 hover:shadow-2xl hover:z-20 sm:bottom-[-20px] sm:left-[-40px] sm:w-[240px]">
                <div className="rounded-[2.5rem] border-4 border-gray-800 bg-gray-900 p-2 shadow-2xl">
                  <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[2rem] bg-surface-dark">
                    <div className="p-4 pt-8 text-center text-white">
                      <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Top Fans</h4>
                      <div className="mt-4 flex h-32 items-end justify-center gap-2">
                        <div className="group relative h-16 w-10 rounded-t-lg bg-gray-700/80 backdrop-blur-md">
                          <div className="absolute -top-6 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-gray-400 text-[8px] font-bold text-black">
                            B
                          </div>
                          <div className="mt-1 text-center text-[10px] font-bold">2</div>
                        </div>
                        <div className="relative h-24 w-12 rounded-t-lg bg-gradient-to-b from-primary to-purple-600 shadow-[0_0_15px_rgba(238,43,173,0.5)]">
                          <div className="absolute -top-8 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-yellow-400 text-[10px] font-bold text-black">
                            A
                          </div>
                          <div className="mt-1 text-center text-xs font-bold">1</div>
                        </div>
                        <div className="relative h-12 w-10 rounded-t-lg bg-gray-700/80 backdrop-blur-md">
                          <div className="absolute -top-6 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-orange-700 text-[8px] font-bold text-white">
                            C
                          </div>
                          <div className="mt-1 text-center text-[10px] font-bold">3</div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex h-8 items-center gap-2 rounded-full border border-white/5 bg-white/5 px-2">
                          <div className="h-5 w-5 rounded-full bg-white/20"></div>
                          <div className="h-2 w-12 rounded-full bg-white/10"></div>
                          <div className="ml-auto flex h-4 w-8 items-center justify-center rounded-full bg-primary/20 text-[8px] font-bold text-primary">
                            #4
                          </div>
                        </div>
                        <div className="flex h-8 items-center gap-2 rounded-full border border-white/5 bg-white/5 px-2">
                          <div className="h-5 w-5 rounded-full bg-white/20"></div>
                          <div className="h-2 w-12 rounded-full bg-white/10"></div>
                          <div className="ml-auto flex h-4 w-8 items-center justify-center rounded-full bg-primary/20 text-[8px] font-bold text-primary">
                            #5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-[-20px] z-0 w-[200px] origin-bottom-left rotate-[15deg] scale-90 transform opacity-90 transition-transform duration-500 hover:rotate-0 hover:scale-100 hover:shadow-2xl hover:z-20 sm:bottom-[-20px] sm:right-[-40px] sm:w-[240px]">
                <div className="rounded-[2.5rem] border-4 border-gray-800 bg-gray-900 p-2 shadow-2xl">
                  <div className="relative flex aspect-[9/19.5] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-surface-dark">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-surface-dark to-surface-dark"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative flex h-32 w-24 items-center justify-center overflow-hidden rounded-xl border-2 border-white/50 bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-[0_0_30px_rgba(234,179,8,0.4)] rotate-3">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-30"></div>
                        <span className="material-symbols-outlined text-5xl text-white drop-shadow-md">star</span>
                      </div>
                      <h4 className="mt-6 text-lg font-bold tracking-tight text-white">Rare Item!</h4>
                      <div className="mt-2 h-1 w-12 rounded-full bg-white/20"></div>
                    </div>
                    <div className="absolute left-1/4 top-1/4 h-1 w-1 animate-ping rounded-full bg-white"></div>
                    <div className="absolute bottom-1/3 right-1/4 h-2 w-2 animate-bounce rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-[260px] transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 sm:w-[300px]">
                <div className="rounded-[3.5rem] bg-[#4a4a4a] p-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
                  <div className="rounded-[3.3rem] border border-gray-700 bg-black p-[6px]">
                    <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[3rem] bg-gray-900">
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf3SKcAj0uTsak0JMDQ0AqB6qiLeiS8p1qRZmvtOPwAAmEXlPyOW_nUCjbYLhJ0Sjlz-eq6SASgiIqbTc-vpofMFzQqsmTCqmxjoxG8EwZS-tmukxmXxXp7i4hWnjSgUFK_I9wXT69szwwASEMbhseGItwDdGlb_U1qBWLJL9fglCdIi8p1aIvgqAeLrcPhkdf4y39llh82t4GN1VNQpyxHXtKIZye1D4B86H-mRb9IJioT9FTIQyNassLhDJFsHI_PeeDaBfcFOR-')",
                        }}></div>
                      <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-black/20 via-transparent to-black/80">
                        <div className="z-20 flex h-14 w-full items-center justify-between px-6 pt-3">
                          <span className="font-sans text-[10px] font-medium text-white">9:41</span>
                          <div className="flex gap-1.5">
                            <span className="material-symbols-outlined text-[14px] text-white">
                              signal_cellular_alt
                            </span>
                            <span className="material-symbols-outlined text-[14px] text-white">wifi</span>
                            <span className="material-symbols-outlined text-[14px] text-white">battery_full</span>
                          </div>
                        </div>
                        <div className="absolute left-1/2 top-3 z-30 flex h-8 w-28 -translate-x-1/2 items-center justify-end rounded-full bg-black pr-2">
                          <div className="mr-5 h-2 w-2 rounded-full bg-[#1a1a1a]"></div>
                        </div>
                        <div className="relative z-10 mt-1 flex items-center justify-between px-5">
                          <button
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                            type="button">
                            <span className="material-symbols-outlined text-lg">pause</span>
                          </button>
                          <div className="flex flex-col items-center">
                            <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
                              Level 24
                            </span>
                            <div className="h-1.5 w-24 overflow-hidden rounded-full border border-white/10 bg-gray-800/80">
                              <div className="h-full w-2/3 bg-gradient-to-r from-primary to-purple-500 shadow-[0_0_10px_rgba(238,43,173,0.5)]"></div>
                            </div>
                          </div>
                          <button
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                            type="button">
                            <span className="material-symbols-outlined text-lg">settings</span>
                          </button>
                        </div>
                        <div className="relative z-10 flex flex-1 items-center justify-center p-4">
                          <div className="grid w-full grid-cols-4 gap-3">
                            <div className="group relative aspect-square overflow-hidden rounded-full border-2 border-white bg-pink-100 shadow-lg">
                              <div className="absolute inset-0 bg-primary/20 transition-colors group-hover:bg-transparent"></div>
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-primary/50">
                                face_3
                              </span>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-white bg-purple-100 shadow-lg">
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-purple-600/50">
                                face_2
                              </span>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-white bg-blue-100 shadow-lg">
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-blue-600/50">
                                face_4
                              </span>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-white bg-pink-100 shadow-lg">
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-primary/50">
                                face_3
                              </span>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-white bg-yellow-100 shadow-lg">
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-yellow-600/50">
                                face_5
                              </span>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-white bg-blue-100 shadow-lg">
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-blue-600/50">
                                face_4
                              </span>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-white bg-purple-100 shadow-lg">
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-purple-600/50">
                                face_2
                              </span>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-white bg-yellow-100 shadow-lg">
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-yellow-600/50">
                                face_5
                              </span>
                            </div>
                            <div className="aspect-square rounded-full border-2 border-dashed border-white/20 bg-white/5"></div>
                            <div className="aspect-square rounded-full border-2 border-dashed border-white/20 bg-white/5"></div>
                            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-white bg-pink-100 shadow-lg ring-4 ring-primary/50 animate-pulse">
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-3xl text-primary/50">
                                face_3
                              </span>
                            </div>
                            <div className="aspect-square rounded-full border-2 border-dashed border-white/20 bg-white/5"></div>
                          </div>
                        </div>
                        <div className="relative z-10 flex h-28 items-end justify-center gap-4 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-8">
                          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl shadow-xl">
                            <button
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-lg transition-all hover:-translate-y-1 hover:scale-110"
                              type="button">
                              <span className="material-symbols-outlined text-lg">undo</span>
                            </button>
                            <button
                              className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-primary to-purple-600 text-white shadow-lg shadow-primary/40 ring-4 ring-black/20 transition-all hover:-translate-y-1 hover:scale-110"
                              type="button">
                              <span className="material-symbols-outlined text-3xl">shuffle</span>
                            </button>
                            <button
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-orange-500 text-white shadow-lg transition-all hover:-translate-y-1 hover:scale-110"
                              type="button">
                              <span className="material-symbols-outlined text-lg">lightbulb</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
