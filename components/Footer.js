import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact Us" },
];

const linkClass =
  "rounded text-slate-300 transition-colors hover:text-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Cột bên trái: Logo */}
          <Link href="/" aria-label="PrimeGearLab home" className="inline-flex shrink-0">
            <Logo className="h-28 w-28 md:h-32 md:w-32" />
          </Link>

          {/* Cột bên phải: Navigation links, Disclosures, Email & Copyright */}
          <div className="flex w-full flex-col items-center md:max-w-xl md:items-end">
            <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm md:justify-end">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Khối văn bản: Căn giữa trên Mobile, Căn trái gọn gàng trên Desktop */}
            <div className="mt-6 w-full space-y-3 text-center text-sm md:text-left">
              <p>{SITE.disclaimer}</p>
              <p>PrimeGearLab is an independent publisher and is not the merchant. Product names and trademarks belong to their owners.</p>
              <p>
                Contact:{" "}
                <a 
                  href={`mailto:${SITE.email}`} 
                  className="rounded text-slate-300 underline underline-offset-2 transition-colors hover:text-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="pt-1 text-xs text-slate-500">
                {SITE.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
