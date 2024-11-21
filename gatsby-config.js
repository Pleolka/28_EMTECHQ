/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [],
}
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "Przedszkole Sióstr Serafitek w Żywcu",
    author: "IKS Aleksandra Fabian",
    siteUrl: `https://www.przedszkoleoswiecim.com.pl`,
  },

  /* Your site config here */
  plugins: [
    /* npm install --global gatsby-cli */
    /* MANIFEST
     ** npm install gatsby-plugin-manifest
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },

    /* STYLED COMPONENT
     ** npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components
     */
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    /* SITE MAP
   npm install gatsby-plugin-sitemap
   */
    `gatsby-plugin-sitemap`,

    /* ROBOTS TXT
  npm install --save gatsby-plugin-robots-txt
  */
    "gatsby-plugin-robots-txt",

    /* SHARP
   npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
   */
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,

    /* GATSBY FILE SYSTEM 
   zapytania graphql do plików systemowych
   npm install --save gatsby-source-filesystem
   */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data/`,
      },
    },

    /*GATSBY IMAGE 
   wymagana wcześniej instalacja sharp i source system
   npm install --save gatsby-plugin-image
   */
    "gatsby-plugin-image",

    /*GATSBY PLAYGROUND
   npm install --save gatsby-plugin-playground
   */
    `gatsby-plugin-playground`,

    /*GOOGLE FONT
npm install gatsby-plugin-google-fonts --save
   */

    /* COOKIE
   npm install --save gatsby-plugin-gdpr-cookies
   npm install --save react-cookie-consent
   */
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    // },
  ],
}
