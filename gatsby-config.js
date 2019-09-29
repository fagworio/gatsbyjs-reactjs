/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  siteMetadata: {
    title: 'Tutorial',
    description: 'Just some description about the site',
    author: '@jonhDoe',
    data: { name: "João", age: "34" },
  }, 
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
  },
  `gatsby-plugin-sass`, 
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`
]

}
