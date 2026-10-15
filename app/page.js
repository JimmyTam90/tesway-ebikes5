import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrimeDayBanner from "@/components/PrimeDayBanner";
import Highlights from "@/components/Highlights";
import Collections from "@/components/Collections";
import ProductGrid from "@/components/ProductGrid";
import CompareTable from "@/components/CompareTable";
import Disclosure from "@/components/Disclosure";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimeDayBanner />
        <Highlights />
        <Collections />
        <ProductGrid />
        <CompareTable />
        <Disclosure />
        <FAQ />
        <FinalCTA />
      </main>
      <div className="pb-24 md:pb-0">
        <Footer />
      </div>
      <StickyMobileCTA />
    </>
  );
}
