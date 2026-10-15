import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:justify-between">
        <Logo className="h-28 w-28" />
        <div className="flex w-full flex-col md:max-w-xl md:items-end">
          {/* Legal links: right-aligned on md+ */}
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-end">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>
            ))}
          </nav>
          {/* Text block: sits on the right but stays left-aligned (no ragged right text) */}
          <div className="mt-6 w-full space-y-3 text-left text-sm">
            <p>{SITE.disclaimer}</p>
            <p>PrimeGearLab is an independent publisher and is not the merchant. TESWAY is a trademark of its owner.</p>
            <p>
              Contact:{" "}
              <a href={`mailto:${SITE.email}`} className="underline hover:text-white">{SITE.email}</a>
            </p>
            <p className="text-xs text-slate-400">{SITE.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
