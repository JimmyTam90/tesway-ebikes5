import Image from "next/image";
import CTAButton from "./CTAButton";

// Card DOM order: IMAGE -> TITLE -> SPECS -> CTA. The CTA is the last element on every breakpoint.
export default function ProductCard({ product }) {
  const s = product.specs;
  const rows = [
    ["Peak power", s.peak],
    ["Battery", s.battery],
    ["Max speed", s.speed],
    ["Max range", s.range],
    ["Suspension", s.suspension],
    ["Max load", s.load],
  ];
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-100 p-3">
        <Image
        unoptimized
          src={product.image}
          alt={product.alt}
          width={800}
          height={800}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="h-48 w-full object-contain sm:h-56"
        />
      </div>
      <h3 className="px-5 pt-5 text-xl font-bold">{product.name}</h3>
      <div className="px-5 pb-5 pt-2">
        <p className="text-xs font-bold uppercase tracking-wider text-brand">{product.tag}</p>
        <p className="mt-2">
          <span className="text-2xl font-extrabold">{product.price}</span>{" "}
          <span className="text-sm text-slate-500 line-through">{product.regular}</span>
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 text-sm">
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
              <dd className="font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-auto p-5 pt-0">
        <CTAButton type="product" k={product.id} ctaId={`product-${product.id}`} className="w-full">
          View {product.name.replace("TESWAY ", "").split(" ").slice(0, 2).join(" ")}
        </CTAButton>
      </div>
    </article>
  );
}
