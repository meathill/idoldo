export default function LandingFooter() {
  return (
    <footer className="w-full border-t border-gray-200 bg-background-light px-5 py-16 dark:border-white/5 dark:bg-background-dark">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Coming Soon</span>
          <h3 className="text-2xl font-bold text-text-main-light dark:text-white">Join the Community</h3>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all hover:scale-110 hover:text-primary dark:bg-surface-dark"
            href="#">
            <span
              aria-label="WeChat"
              className="material-symbols-outlined">
              chat
            </span>
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all hover:scale-110 hover:text-primary dark:bg-surface-dark"
            href="#">
            <span
              aria-label="Twitter / X"
              className="material-symbols-outlined">
              flutter_dash
            </span>
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all hover:scale-110 hover:text-primary dark:bg-surface-dark"
            href="#">
            <span
              aria-label="Instagram"
              className="material-symbols-outlined">
              photo_camera
            </span>
          </a>
        </div>
        <div className="my-2 h-px w-24 bg-gray-300 dark:bg-white/10"></div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-text-sub-light dark:text-text-sub-dark">Launching soon on the App Store</p>
          <div className="flex cursor-pointer items-center gap-2 grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100">
            <div className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
              <span className="material-symbols-outlined text-xl">ios</span>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium uppercase">Download on the</span>
                <span className="text-sm font-bold">App Store</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-text-sub-light/60 dark:text-text-sub-dark/60">
          © 2024 IdolDo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
