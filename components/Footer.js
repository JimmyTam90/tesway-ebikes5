import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact Us" },
];

const focusRing =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500";

export default function Footer() {
  return (
    // data-footer-version lets you confirm which build is live: view-source and search for "footer-v2".
    <footer data-footer-version="footer-v2" className="w-full border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left column: logo */}
          <div className="flex shrink-0 items-start justify-center md:justify-start">
            <Logo className="h-24 w-auto md:h-28" />
          </div>

          {/* Right column: links + legal text */}
          <div className="flex w-full flex-col text-center md:max-w-xl md:items-end md:text-left">
            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-300 md:justify-end"
            >
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`transition-colors hover:text-amber-500 ${focusRing}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 w-full space-y-3 border-t border-slate-800/40 pt-4 text-xs text-slate-400 md:text-sm">
              <p>{SITE.disclaimer}</p>
              <p>
                PrimeGearLab is an independent publisher and is not the merchant. Product names and trademarks belong
                to their owners.
              </p>
              <p>
                Contact:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className={`text-slate-300 underline underline-offset-2 transition-colors hover:text-amber-500 ${focusRing}`}
                >
                  {SITE.email}
                </a>
              </p>
              <p className="pt-2 text-xs text-slate-500">{SITE.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
