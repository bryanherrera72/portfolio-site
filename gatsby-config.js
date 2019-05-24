module.exports = {
  siteMetadata: {
    title: `{BH}`,
    description: `My name is Bryan Herrera. I am a web developer based in Southern California`,
    author: `Bryan Herrera`,
    about: `I am a web developer based in Los Angeles California.\n`+
        `I like to build websites and web apps using the latest technology. When I\'m not doing that, you can find me walking around aimlessly looking for somewhere to belong.`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bryans-site`,
        short_name: `bhdev`,
        start_url: `/`,
        background_color: `#2D3E36`,
        theme_color: `#2D3E36`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //

    //D9D9CA
    //708A82
    // 2D3E36
    // 58828C
    // 181D1B
    
  ],
}
