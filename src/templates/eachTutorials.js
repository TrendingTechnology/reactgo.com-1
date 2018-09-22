import React from 'react'

import CommonMarkdown from '../components/commonmarkdown'
import { graphql } from "gatsby"
import Layout from '../components/layout';
import '../components/index.css'
import '../pages/list.css'
import '../pages/main.css'
import Footer from '../components/tutorialfooter';


function EachTutorial(props) {
  const { course } = props.pageContext
  return (
    <Layout location={props.location} >

      <CommonMarkdown
        data={props.data}
        course={course.slice(1)}
        location={props.location}
        context={props.pageContext}
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
      frontmatter {
        title
        description
        date(formatString: "MMM Do")
        logo
        thumbnail
        tags
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
