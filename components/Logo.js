import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

// Logo-only branding: the image already contains the brand name, so no text label is added beside it.
// Static import means the URL respects basePath/assetPrefix automatically.
export default function Logo({ className = "h-16 w-16", priority = false }) {
  return (
    <Link href="/" aria-label="PrimeGearLab home" className="inline-flex shrink-0">
      <Image
        unoptimized
        src={logo}
        alt="PrimeGearLab - Independent Lab"
        priority={priority}
        sizes="128px"
        className={`${className} rounded-lg object-contain`}
      />
    </Link>
  );
}
