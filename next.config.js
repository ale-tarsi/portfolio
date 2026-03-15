/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  ...(isGitHubPages && {
    output: "export",
    basePath: "/portfolio",
  }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
