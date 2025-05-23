/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/stardew-gifts' : '',
  assetPrefix: isGithubPages ? '/stardew-gifts' : '',
  // Ensure CSS is handled correctly
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig;