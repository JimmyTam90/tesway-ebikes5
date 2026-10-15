import { SITE } from "@/lib/site";

export default function sitemap() {
  return ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"].map((p) => ({
    url: `${SITE.baseUrl}${p}`,
    priority: p === "" ? 1 : 0.3,
  }));
}
