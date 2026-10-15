import Link from "next/link";
import Logo from "./Logo";
import Footer from "./Footer";

export default function LegalLayout({ title, children }) {
  return (
    <>
      <header className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex h-20 max-w-3xl items-center px-4"><Logo /></div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <div className="mt-6 space-y-4 text-slate-600 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_a]:text-brand [&_a]:underline">
          {children}
        </div>
        <p className="mt-10"><Link href="/" className="font-semibold text-brand underline">← Back to home</Link></p>
      </main>
      <Footer />
    </>
  );
}
