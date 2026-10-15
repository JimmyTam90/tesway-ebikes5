/** Hub-Spoke deployment: served publicly at https://primegearlab.com/tesway */
const SUBPATH = process.env.NEXT_PUBLIC_BASE_PATH || "/tesway";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: SUBPATH,
  assetPrefix: SUBPATH,
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "teswaybike.com", pathname: "/cdn/shop/files/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Direct visits to the spoke root go to the subpath. The Hub rewrite always targets /tesway.
    return [{ source: "/", destination: SUBPATH, permanent: false, basePath: false }];
  },
};

export default nextConfig;
