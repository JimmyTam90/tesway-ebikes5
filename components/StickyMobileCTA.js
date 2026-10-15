import CTAButton from "./CTAButton";

export default function StickyMobileCTA() {
  return (
    <div
      className="pointer-events-auto fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95 px-4 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <CTAButton type="collection" k="prime-day-deals" ctaId="sticky-mobile" className="w-full">Shop Prime Day Deals</CTAButton>
    </div>
  );
}
