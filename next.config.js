const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/stardew-gifts' : '',
  assetPrefix: isGithubPages ? '/stardew-gifts/' : '',
};

module.exports = nextConfig;
