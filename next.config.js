require('dotenv').config();

module.exports = {
  env: {
    WEB_URI: process.env.WEB_URI,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  useSuspense: false,
};
