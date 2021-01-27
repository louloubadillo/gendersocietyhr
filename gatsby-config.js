module.exports = {
  
  siteMetadata: {
    title: 'Feminismo',
    author: 'LouLouBadillo'
  },

  plugins:[
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
