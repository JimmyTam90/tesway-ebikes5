"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import CTAButton from "./CTAButton";

const NAV = [
  { href: "#collections", label: "Collections" },
  { href: "#models", label: "Models" },
  { href: "#compare", label: "Compare" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-4 px-4">
        <Logo priority />

        {/* Desktop: logo left, navigation + CTA right-aligned */}
        <div className="ml-auto hidden items-center justify-end gap-6 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-blue-300">{n.label}</a>
            ))}
          </nav>
          <CTAButton type="collection" k="all-ebikes" ctaId="header-explore" className="min-h-11 px-5 py-2 text-sm">
            Explore E-Bikes
          </CTAButton>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-slate-800 bg-slate-950 px-4 pb-6 pt-2 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            <Link href="/" onClick={() => setOpen(false)} className="border-b border-slate-800 py-4 text-lg font-semibold">Home</Link>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-slate-800 py-4 text-lg font-semibold">{n.label}</a>
            ))}
          </nav>
          <CTAButton type="collection" k="all-ebikes" ctaId="mobile-menu-explore" className="mt-5 w-full">Explore E-Bikes</CTAButton>
        </div>
      )}
    </header>
  );
}
