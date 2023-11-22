const { withContentlayer } = require('next-contentlayer');

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src https://www.itaiaxelrad.com;
  font-src 'self';
  style-src 'self' https://www.itaiaxelrad.com;
`;

const securityHeaders = [
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  // },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // Sets security headers for all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
});
