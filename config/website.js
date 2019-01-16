const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Alexi Taylor Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Alexi Taylor', // Alternative Site title for SEO
  siteTitleShort: 'Alexi Taylor', // short_name for manifest
  siteUrl: 'https://alexitaylor.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Alexi Taylor Software Engineer portfolio displaying experience and projects',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@alexitaylor', // Twitter Username
  // ogSiteName: '', // Facebook Site Name

  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
