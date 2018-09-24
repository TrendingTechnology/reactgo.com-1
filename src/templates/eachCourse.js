// import React from 'react'
// import '../pages/list.css'
// import MainUi from '../components/mainui/mainui'
// import Link from 'gatsby-link'
// import MetaPost from '../components/MetaPost';
// import thumbnail from '../img/js.jpg';

// class EachCourse extends React.Component {
//   render() {
//     const url = this.props.data.site.siteMetadata.url
//     const pathname = this.props.location.pathname
//     const { data } = this.props
//     const { cs } = this.props.pathContext
//     // console.log(this.props)

//     return (
//       <div className="bglight auto">
//         < MetaPost
//           title={`Start Learning ${cs} tutorials`}
//           description={`Improve your  ${cs} with articles and tutorials levelup your beginner skills`}
//           thumbnail={thumbnail}
//           url={url}
//           pathname={pathname}
//           stop
//         />
//         <div className="padding-top5">
//           <h1 className=" slim">
//             Start learning{' '}
//             <strong style={{ textTransform: 'capitalize' }}>{cs}</strong>
//           </h1>
//           <div className="grid-2">
//             <MainUi course={cs} data={data} />
//           </div>
//         </div>

//         {data.bycourse && (
//           <div className="post-list auto">
//             <ul className="post-setup">
//               <h1 className=" slim">
//                 Trending posts in{' '}
//                 <strong style={{ textTransform: 'capitalize' }}>{cs}</strong>
//               </h1>
//               {data.bycourse.edges.map(({ node }, i) => (
//                 <Link to={node.fields.slug} key={i}>
//                   <li className="post-items">
//                     {
//                       <div className="ribbon">
//                         <span>{cs}</span>
//                       </div>
//                     }
//                     <h2>{node.frontmatter.title}</h2>
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     )
//   }
// }
// export default EachCourse;

// export const query = graphql`
//   query EachCourse($cs: String) {
//     allMarkdownRemark(sort: { fields: [frontmatter___myid], order: ASC }) {
//       edges {
//         node {
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }

//     bycourse: allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { tags: { in: [$cs] } } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }

//      site {
//       siteMetadata {
//         url
//         author
//       }
//     }
//   }
// `
