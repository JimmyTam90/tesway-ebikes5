import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export default function ProductGrid() {
  return (
    <section id="models" className="scroll-mt-24 py-12" aria-labelledby="models-title">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="models-title" className="text-2xl font-extrabold sm:text-3xl">Top TESWAY e-bike models</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Struck-through figures are regular prices listed by the merchant. Prices as listed on {SITE.dataDate}. Confirm
          current pricing at checkout.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(PRODUCTS ?? []).map((p) => (
            <ProductCard key={p?.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
