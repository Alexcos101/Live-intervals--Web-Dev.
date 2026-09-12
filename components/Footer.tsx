import { Linkedin, Instagram } from "lucide-react";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Support", href: "#support" },
      { label: "API Docs", href: "#api-docs" },
    ],
  },
];

// Simple TikTok glyph — lucide-react doesn't ship one.
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-.9-.86-1.4-2.05-1.4-3.32h-3.14v13.44c0 1.53-1.24 2.77-2.77 2.77a2.77 2.77 0 0 1-2.77-2.77 2.77 2.77 0 0 1 2.77-2.77c.28 0 .55.04.8.12V9.9a6.02 6.02 0 0 0-.8-.05A6 6 0 0 0 3.3 15.83a6 6 0 0 0 6 6 6 6 0 0 0 6-6V9.32a8.16 8.16 0 0 0 4.6 1.4V7.6a4.85 4.85 0 0 1-3.3-1.78Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-signal text-sm font-bold text-ink">
                LI
              </span>
              <span className="text-base font-semibold tracking-tight text-navyink">
                Live Intervals
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              Shifting safety from reactive to proactive.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-navyink transition-colors hover:bg-black/10"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-navyink transition-colors hover:bg-black/10"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-navyink transition-colors hover:bg-black/10"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold tracking-wide text-navyink/70">
                {col.heading.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate transition-colors hover:text-navyink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>2026 Live Intervals. All rights reserved.</p>
          <p>Built with safety in mind.</p>
        </div>
      </div>
    </footer>
  );
}
