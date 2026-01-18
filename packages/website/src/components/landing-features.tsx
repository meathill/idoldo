export default function LandingFeatures() {
  return (
    <section className="w-full bg-white py-20 px-5 dark:bg-surface-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-bold text-text-main-light dark:text-white sm:text-4xl">Why IdolDo?</h2>
          <p className="text-lg text-text-sub-light dark:text-text-sub-dark">
            Create, share, and play in seconds. The ultimate platform for fan engagement.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-transparent bg-background-light p-8 transition-all hover:border-primary/20 hover:shadow-lg dark:bg-background-dark">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">magic_button</span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-main-light dark:text-white">One-click Creation</h3>
            <p className="leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              Use our magic wand tool to generate engaging tile-match games from your favorite photos instantly.
            </p>
          </div>
          <div className="group rounded-2xl border border-transparent bg-background-light p-8 transition-all hover:border-primary/20 hover:shadow-lg dark:bg-background-dark">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-600 transition-transform group-hover:scale-110 dark:text-purple-400">
              <span className="material-symbols-outlined text-3xl">bolt</span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-main-light dark:text-white">Instant Play</h3>
            <p className="leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              No downloads required for your friends. Share a link and play instantly via iOS App Clip technology.
            </p>
          </div>
          <div className="group rounded-2xl border border-transparent bg-background-light p-8 transition-all hover:border-primary/20 hover:shadow-lg dark:bg-background-dark">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-400/10 text-pink-500 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">redeem</span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-main-light dark:text-white">Exclusive Rewards</h3>
            <p className="leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              Earn special fan badges, unlock rare card sets, and climb the global fan leaderboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
