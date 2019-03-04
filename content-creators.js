const _ = require('lodash');
const { generator } = require('./generator');
const { generatePosts } = require('./helper')
const path = require('path')
const { paginate } = require('gatsby-awesome-pagination');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___id], order: ASC }
            limit: 10000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  courseurl
                  tags
                  date
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
        const courseDisplay = path.resolve('src/templates/courseDisplay.js')
        const allPosts = result.data.allMarkdownRemark.edges
        paginate({
          createPage, // The Gatsby `createPage` function
          items: allPosts, // An array of objects
          itemsPerPage: 25, // How many items you want per page
          pathPrefix: ({ pageNumber }) => {
            if (pageNumber === 0) {
              return `/`
            } else {
              return `/page`
            }
          },
          component: path.resolve('src/templates/index.js'), // Just like `createPage()`
        })

        console.log(allPosts.length)
        const blog = allPosts.filter(({ node }) => {

          return !node.frontmatter.courseurl

        })

        blog.sort(function (a, b) {
          return new Date(a.node.frontmatter.date) - new Date(b.node.frontmatter.date);
        })



        blog.forEach(({ node }, index) => {
          let next = index === 0 ? null : blog[index - 1].node


          const prev =
            index === blog.length - 1 ? null : blog[index + 1].node

          createPage({
            path: node.fields.slug,
            component: path.resolve('src/templates/post.js'),
            context: {
              slug: node.fields.slug,
              prev,
              next
            },
          })

        })

        //course names
        let allCourses = []
        // Iterate through each post, putting all found courses into `allCourses array`
        _.each(allPosts, edge => {
          if (_.get(edge, 'node.frontmatter.courseurl')) {
            allCourses = allCourses.concat(edge.node.frontmatter.courseurl)
          }
        })
        // Eliminate duplicate tags
        allCourses = _.uniq(allCourses)





        // Creating each Course display page
        allCourses.forEach(courseurl => {
          createPage({
            path: `/${_.kebabCase(courseurl)}/`,
            component: courseDisplay,
            context: {
              courseurl,
            },
          })
        })


        // creating tutorials for all courses
        const tutorial = allCourses

        //creating tutorials
        tutorial.forEach(tut => {
          return generatePosts(
            tut,
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



