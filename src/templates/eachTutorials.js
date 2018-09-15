import React from 'react'

import CommonMarkdown from '../components/commonmarkdown'

function EachTutorial(props) {
  const { course } = props.pathContext
  return (
    <CommonMarkdown
      data={props.data}
      course={course.slice(1)}
      location={props.location}
      pathContext={props.pathContext}
    />
  )
}

export default EachTutorial

export const query = graphql`
  query EachTutorial($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      birthTime
      modifiedTime
      frontmatter {
        title
        description
        date(formatString: "MMM Do")
        logo
        thumbnail
        tags
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        url
        author
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___myid], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
