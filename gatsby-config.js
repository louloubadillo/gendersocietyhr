module.exports = {
  
  siteMetadata: {
    title: 'LBlog',
    author: 'LouLouBadillo'
  },

  plugins:[
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173473797-1",
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options:{
        plugins:[
          {
            resolve: 'gatsby-remark-images',
            options:{
              maxWidth: 400,
              quality: 90,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    }
    
  ]
}
