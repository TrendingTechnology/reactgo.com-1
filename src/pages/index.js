import React from 'react'
import './main.css'
import MainUi from '../components/mainui/mainui'

class Index extends React.Component {
  render() {
    return (
      <div>
        <MainUi data={this.props.data} />
      </div>
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
