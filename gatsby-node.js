const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
const _ = require('lodash')
const { generator } = require('./generator')
const { generatePosts } = require('./helper')

const path = require('path')

exports.createPages = require('./content-creators');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

  }
}

console.log('hit')
