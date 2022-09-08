// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Buidl for Web3 | Lumos Labs',
  siteUrl: 'https://hack.lumoslabs.co',
  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'UA-238825085-2',
        enabled: true,
        debug: true
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
    }
  ]
}
