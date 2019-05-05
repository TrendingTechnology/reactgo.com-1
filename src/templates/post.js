import React from 'react'
import CommonMarkdown from '../components/commonmarkdown'
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Jsimg from '../img/js.jpg';
class Post extends React.Component {
  render() {
    // const post = this.props.data.markdownRemark;
    const { url } = this.props.data.site.siteMetadata
    const thumbnail =
      this.props.data.markdownRemark.frontmatter.image &&
      this.props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
    return (
      <Layout>

        <Header siteTitle={'Reactgo'} />
        <CommonMarkdown
          nosidebar
          nomobilebar
          center
          bottom
          thumbnail={thumbnail ? url + thumbnail : url + Jsimg}
          data={this.props.data}
          location={this.props.location}
          pageContext={this.props.pathContext}
        />
        <Footer siteTitle={'Reactgo'} />
      </Layout>
    )
  }
}

export default Post
export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        tags
        image {
          childImageSharp {
            resize(width: 1000, height: 720) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
  }
`
