"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "B2B Solutions", href: "#b2b-solutions" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-white"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-signal text-sm font-bold text-ink">
            LI
          </span>
          <span className="text-base font-semibold tracking-tight">
            Live Intervals
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#get-started"
            className="rounded-full border border-signal px-5 py-2 text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-ink"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="mx-6 flex flex-col gap-1 rounded-2xl border border-white/10 bg-forest/95 p-4 backdrop-blur">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="mt-2 rounded-full border border-signal px-5 py-2.5 text-center text-sm font-medium text-signal transition-colors hover:bg-signal hover:text-ink"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
