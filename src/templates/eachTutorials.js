import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CommonMarkdown from '../components/commonmarkdown'
import Header from '../components/header'
import Footer from '../components/Tutorialfooter'

function EachTutorial(props) {
  const { courseurl } = props.pathContext
  return (
    <Layout>
      <Header siteTitle={'Reactgo'} />
      <CommonMarkdown
        data={props.data}
        tag={courseurl}
        location={props.location}
        pageContext={props.pathContext}
      />
      <Footer siteTitle={'Reactgo'} />
    </Layout>
  )
}

export default EachTutorial

export const query = graphql`
  query EachTutorial($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "MMM Do")
        logo
        thumbnail
        courseurl
        course
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

    allMarkdownRemark(sort: { fields: [frontmatter___id], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            courseurl
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
