const path = require('path')

//filtering by tags
function searchStringInArray(str, arr, lim) {
  if (lim) {
    const items = arr.filter(({ node }) => node.frontmatter.tags[0] === str)
    return items.slice(0, lim)
  }
  return arr.filter(({ node }) => node.frontmatter.tags[0] === str)
}



function generatePosts(str, arr, url, createPage) {
  const eachTutorial = searchStringInArray(str, arr)

  return eachTutorial.forEach(({ node }, index) => {
    return createPage({
      path: node.fields.slug,
      component: path.resolve(url),
      context: {
        tag: str,
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
        prev: index === 0 ? null : eachTutorial[index - 1].node,
        next:
          index === eachTutorial.length - 1
            ? null
            : eachTutorial[index + 1].node,
      },
    })
  })
}

module.exports = { generatePosts, searchStringInArray }
