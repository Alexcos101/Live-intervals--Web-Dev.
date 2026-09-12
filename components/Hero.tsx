import { Smartphone, ShieldCheck, Wifi, BatteryCharging, ChevronDown } from "lucide-react";
import Nav from "./Nav";
import NetworkBackground from "./NetworkBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink"
    >
      <NetworkBackground />

      <div className="relative z-10">
        <Nav />

        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-6 text-center sm:px-8 sm:pb-28 sm:pt-10 lg:pb-32">
          <span className="mb-7 inline-flex items-center rounded-full border border-signaldim px-4 py-1.5 text-[11px] font-semibold tracking-wide text-signal sm:text-xs">
            PROACTIVE SAFETY TECHNOLOGY
          </span>

          <h1 className="text-[2.25rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
            Safety should never be reactive.
            <br />
            You decide how often we check in.
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/60 sm:text-lg">
            Live Intervals automates location sharing at intervals you
            control. If something goes wrong, your trusted contacts know
            exactly where to find you — even when you&apos;re offline.
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <Smartphone size={18} strokeWidth={2.2} />
              Download the App
            </a>
            <a
              href="#b2b-solutions"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:w-auto"
            >
              Explore B2B Solutions
            </a>
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 text-xs text-white/45 sm:flex-row sm:gap-8 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-signal/70" />
              End-to-end encrypted
            </span>
            <span className="inline-flex items-center gap-2">
              <Wifi size={16} className="text-signal/70" />
              Works offline
            </span>
            <span className="inline-flex items-center gap-2">
              <BatteryCharging size={16} className="text-signal/70" />
              Battery optimized
            </span>
          </div>
        </div>

        <div className="flex justify-center pb-8">
          <ChevronDown size={20} className="text-white/30" />
        </div>
      </div>
    </section>
  );
}
