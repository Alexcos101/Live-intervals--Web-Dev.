import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-secondary px-6 py-8 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Live Intervals. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}