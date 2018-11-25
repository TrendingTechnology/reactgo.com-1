// import React from 'react'
// import CommonMarkdown from '../components/commonmarkdown'
// import Link from 'gatsby-link'

// class Post extends React.Component {
//   render() {
//     console.log(this.props)
//     const post = this.props.data.markdownRemark
//     const { title } = post.frontmatter
//     const { url } = this.props.data.site.siteMetadata
//     return (
//       <div>
//         <CommonMarkdown
//           nosidebar
//           nomobilebar
//           center
//           thumbnail={url}
//           data={this.props.data}
//           location={this.props.location}
//           pathContext={this.props.pathContext}
//         />
//       </div>
//     )
//   }
// }

// export default Post
// export const pageQuery = graphql`
//   query Post4Query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       excerpt
//       frontmatter {
//         title
//         tags
//       }
//       fields {
//         slug
//       }
//     }
//     site {
//       siteMetadata {
//         url
//         author
//       }
//     }
//   }
// `
