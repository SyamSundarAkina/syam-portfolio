/** @type {import('next').NextConfig} */
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,
  // Serves images as-is. Keeps the Image Optimization API (and its advisories) out of the picture.
  images: { unoptimized: true },
  // No ESLint setup in this project, so skip linting during `next build`.
  eslint: { ignoreDuringBuilds: true },
  // `STATIC_EXPORT=1 next build` writes a static site to `out/` with relative asset paths,
  // using its own build folder so it never collides with a running `next dev`.
  ...(isExport ? { output: "export", assetPrefix: "/__REL__", distDir: ".next-export" } : {}),
};

export default nextConfig;
