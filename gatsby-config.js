module.exports = {
  siteMetadata: {
    title: `{BH}`,
    description: `My name is Bryan Herrera. I am a web developer based in Los Angeles, California`,
    author: `Bryan Herrera`,
    about: 
        `I am a web developer based in Los Angeles, California.\n\n`+
        `I build websites (or web apps, if you will) using the latest technology`+
        ` to help my clients improve their online presence.\n\n`+
        `When I\'m not doing that, you'll typically find me self teaching so I can keep up with the latest trends.`+
        ` I also really enjoy playing drums, listening to music, and watching movies.\n\n`+
        `In the fall of 2018 I graduated with a degree in computer science from California State University, Northidge.` +
        ` I took a liking towards web development because it's a field that's always changing and growing so of course, I had to be a part of it.\n\n`+
        ` If you're interested to see what I could offer you, take a look at my resume using the link below.`+
        ` Additionally, you could reach me through the contact link above, or any of my social links at the bottom of the page.`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog/`,
        name: "blogMarkdown",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectImages`,
        path: `${__dirname}/src/images/project-images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-json`,
    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bryanhdev`,
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
