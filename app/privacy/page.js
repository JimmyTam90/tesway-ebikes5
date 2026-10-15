import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata = { title: "Privacy Policy | PrimeGearLab", alternates: { canonical: `${SITE.baseUrl}/privacy` } };

export default function Page() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>This policy explains how {SITE.name} ({SITE.origin.replace("https://", "")}) handles information when you visit this website.</p>
      <h2>Information we collect</h2>
      <p>We do not offer accounts or collect payments. If analytics or advertising tags are enabled, they may collect technical data such as pages viewed, device and browser type, approximate location and the buttons you click. If you email us, we receive your email address and message.</p>
      <h2>Cookies and advertising technologies</h2>
      <p>Analytics and advertising partners such as Google and Meta may use cookies or similar technologies where enabled. You can control cookies in your browser settings.</p>
      <h2>Third-party websites</h2>
      <p>Buttons on this site lead to the merchant&apos;s website, which has its own privacy practices. We do not control the merchant&apos;s site. Your purchase is completed there.</p>
      <h2>Contact</h2>
      <p>Questions about this policy: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalLayout>
  );
}
