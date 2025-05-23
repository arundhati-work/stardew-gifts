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
}

module.exports = nextConfig;