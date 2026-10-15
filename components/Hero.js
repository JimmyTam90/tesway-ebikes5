import Image from "next/image";
import CTAButton from "./CTAButton";
import { FEATURED } from "@/lib/products";
import { SITE } from "@/lib/site";

// DOM order = mobile order: text -> image -> CTAs.
// From md up: balanced 1.05fr / 0.95fr columns (text + CTAs left, image right).
export default function Hero() {
  return (
    <section className="on-dark bg-gradient-to-b from-slate-900 to-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-x-10 md:gap-y-6 md:py-14">
        <div className="md:col-start-1 md:row-start-1 md:self-end">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-300">Independent TESWAY e-bike guide</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Dual-Motor, Long-Range E-Bikes: Compare TESWAY Models
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Compare five TESWAY e-bikes with up to 4000W peak power and up to 200 miles of listed max range, then
            continue to the merchant site to check current options and pricing.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
            <li className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1">Free shipping, 3-7 business days*</li>
            <li className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1">2-year warranty*</li>
            <li className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1">Save up to $1,000 on select models*</li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-700 bg-white p-3 md:col-start-2 md:row-span-2 md:row-start-1 md:self-center">
          <Image
        unoptimized
            src={FEATURED.image}
            alt={FEATURED.alt}
            width={800}
            height={800}
            priority
            sizes="(min-width: 768px) 448px, 100vw"
            className="h-64 w-full object-contain sm:h-80"
          />
        </div>

        <div className="md:col-start-1 md:row-start-2 md:self-start">
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton type="collection" k="all-ebikes" ctaId="hero-primary">Shop All TESWAY E-Bikes</CTAButton>
            <a href="#compare" className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-white px-6 py-3 font-bold hover:bg-slate-800">
              Compare Models
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            *As listed by the merchant on {SITE.dataDate}. Prices and offers can change. Confirm at checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
