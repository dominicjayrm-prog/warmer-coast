/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://warmercoast.com',
  generateRobotsTxt: true,
  exclude: ['/app/*', '/account/*', '/checkout/*', '/api/*', '/login'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/app', '/account', '/checkout', '/api'],
      },
    ],
  },
};
