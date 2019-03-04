import React from 'react'
import { graphql } from 'gatsby'
import Metatags from '../components/MetaPost'
import Layout from '../components/layout'
import MainUi from '../components/mainui/mainui'
import Header from '../components/header';
import Pagination from '../components/pagination';
import Footer from '../components/footer'

class Index extends React.Component {
  render() {
    const data = this.props.data
    const url = data.site.siteMetadata.siteUrl;
    const pathContext = this.props.pathContext;
    return (
      <Layout>
        <Metatags
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          url={url}
          thumbnail={'https://reactgo.com/img/download.png'}
          stop
          no
        />
        <Header siteTitle={'Reactgo'} />
        <div>
          <MainUi data={this.props.data} />
          <Pagination pathContext={pathContext} />
        </div>
        <Footer siteTitle={'Home'} />
      </Layout>
    )
  }
}
export default Index

export const query = graphql`
  query Evry($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      # filter: { fields: { slug: { regex: "*/javascript/" } } }
      sort: { fields: [frontmatter___date], order: DESC },
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 70)
          frontmatter {
            title
            logo
            date(formatString: "MMM, Do")
            courseurl
            course
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
