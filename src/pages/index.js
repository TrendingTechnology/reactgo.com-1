import React from 'react'
import './main.css'
import MainUi from '../components/mainui/mainui'
import { graphql } from "gatsby"
import Layout from '../components/layout';
import './list.css';
import Footer from '../components/footer';

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >

        <MainUi data={this.props.data} />
        <Footer siteTitle={'Reactgo'} />
      </Layout>
    )
  }
}
export default Index

export const query = graphql`
  query Evry {
    allMarkdownRemark(
      # filter: { fields: { slug: { regex: "*/javascript/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength:70)
          frontmatter {
            title
            logo
            tags
            course
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
