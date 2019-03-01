const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://reactgo.com'


module.exports = {
  siteMetadata: {
    title: 'Reactgo - a place to improve your modern javascript skills',
    description:
      'It provides  tutorials & articles about modern open source web technologies such as react,vuejs and gatsby ',
    url: URL,
    siteUrl: URL,
    author: 'Sai gowtham',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: URL,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'src',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'src',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-125559599-1`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#000',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/img/download.png',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
            },
          },
          `gatsby-remark-code-titles`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { fields: [frontmatter___date], order: DESC }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
  ],
}
