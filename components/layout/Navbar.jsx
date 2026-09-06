import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background text-white px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-lg font-bold">
        Live Intervals
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/about">About</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/features">Features</Link>
        <Link href="/download">Download</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}