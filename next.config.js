const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/stardew-gifts' : '',
  assetPrefix: isGithubPages ? '/stardew-gifts/' : '',
};
