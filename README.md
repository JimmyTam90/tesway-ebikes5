# tesway-ebikes (PrimeGearLab spoke)

Next.js 14.2.35 (App Router, JavaScript) + Tailwind 3. Served publicly at https://primegearlab.com/tesway
through the Hub rewrite; deployed spoke: https://tesway-ebikes5.vercel.app/tesway

- `npm install && npm run build` to verify. `basePath` and `assetPrefix` are both `/tesway`.
- Hub: merge the two rewrites in `hub/vercel.json` into the Hub project's existing `vercel.json`. Do not overwrite other spokes.
- Affiliate URLs live only in `lib/affiliate.js`. Optional tracking IDs go in `.env` (see `.env.example`).
