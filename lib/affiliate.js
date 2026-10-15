// Central affiliate destination resolver. No component builds affiliate URLs on its own.
export const MERCHANT_ORIGIN = "https://teswaybike.com";
const MERCHANT_HOST = "teswaybike.com";
const AFFILIATE_PARAM = "ref";
const AFFILIATE_VALUE = "pwcheysy";

export const DEFAULT_AFFILIATE_URL = "https://teswaybike.com/?ref=pwcheysy";

// Product deep links (exact URLs from the project input, except where noted).
export const PRODUCT_LINKS = {
  "x7-awd": "https://teswaybike.com/products/tesway-x7-awd?ref=pwcheysy",
  "x7-pro": "https://teswaybike.com/products/tesway-x7-pro?ref=pwcheysy",
  "x5-awd": "https://teswaybike.com/products/tesway-x5-awd?ref=pwcheysy",
  "x9-ultra": "https://teswaybike.com/products/tesway-x9-ultra?ref=pwcheysy",
  // Supplied slug /products/tesway-c5-awd returned HTTP 404 when checked on Oct 15, 2026.
  // The merchant's own pages link to /products/tesway-c5-awd-cargo-ebike, so that verified slug is used.
  "c5-awd": "https://teswaybike.com/products/tesway-c5-awd-cargo-ebike?ref=pwcheysy",
};

// Collection deep links (exact URLs from the project input). All three pages loaded on Oct 15, 2026.
// The "ebiks" spelling in the dual-motor slug is the merchant's own.
export const COLLECTION_LINKS = {
  "all-ebikes": "https://teswaybike.com/collections/ebikes?ref=pwcheysy",
  "dual-motor": "https://teswaybike.com/collections/dual-motor-ebiks?ref=pwcheysy",
  accessories: "https://teswaybike.com/collections/accessories?ref=pwcheysy",
};

function isValid(url) {
  try {
    const u = new URL(url);
    return (
      u.protocol === "https:" &&
      u.hostname === MERCHANT_HOST &&
      u.searchParams.get(AFFILIATE_PARAM) === AFFILIATE_VALUE
    );
  } catch {
    return false;
  }
}

/** type: "default" | "product" | "collection". Returns a validated URL or null (no CTA is rendered for null). */
export function resolveAffiliateUrl(type = "default", key) {
  let url = null;
  if (type === "product") url = PRODUCT_LINKS[key] ?? null;
  else if (type === "collection") url = COLLECTION_LINKS[key] ?? null;
  else url = DEFAULT_AFFILIATE_URL;
  return url && isValid(url) ? url : null;
}
