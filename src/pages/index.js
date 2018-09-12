import React from 'react'
import './main.css'
import reactLogo from '../img/reactlogo.svg'
import js from '../img/jslogo.png'
import vue from '../img/vuelogo.png'
import ang from '../img/anglogo.png'
import gats from '../img/gatsbylogo.jpeg'
import MainUi from '../components/mainui/mainui'

class Index extends React.Component {
  render() {
    return (
      <div>
        <MainUi course={`react`} data={this.props.data} />
      </div>
    )
  }
}
export default Index

export const query = graphql`
  query Evry {
    allMarkdownRemark(
      # filter: { fields: { slug: { regex: "*/javascript/" } } }
      sort: { fields: [frontmatter___myid], order: ASC }
    ) {
      edges {
        node {
          excerpt(pruneLength:70)
          frontmatter {
            title
            logo
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
