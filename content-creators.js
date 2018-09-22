const _ = require('lodash')
const { generator } = require('./generator')
const { generatePosts } = require('./helper')

const path = require('path')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___myid], order: ASC }
            limit: 10000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const tagTemplate = path.resolve('src/templates/tags.js')
          const allPosts = result.data.allMarkdownRemark.edges




          //articles
          // generatePosts('/a', allPosts, './src/templates/post.js', createPage)

          //tags
          let tags = []
          // Iterate through each post, putting all found tags into `tags`
          _.each(allPosts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
              tags = tags.concat(edge.node.frontmatter.tags)
            }
          })
          // Eliminate duplicate tags
          tags = _.uniq(tags)





          // Make separate pages for each tag
          tags.forEach(tag => {
            createPage({
              path: `/${_.kebabCase(tag)}/`,
              component: tagTemplate,
              context: {
                tag,
              },
            })
          })

          const tutorial = tags

          //tutorials
          tutorial.forEach(tut => {
            return generatePosts(
              `/${tut.length > 9 ? tut : tut.slice(0, 9)}`,
              allPosts,
              './src/templates/eachTutorials.js',
              createPage
            )
          })

          return
        })
    )
  })
}
