import React from 'react'
import Link from 'gatsby-link'
import js from '../img/jslogo.png'
import MetaPost from '../components/MetaPost'
import jsimg from '../img/js.jpg'
import '../pages/list.css'

const Tags = props => {
  const { tag } = props.pathContext
  const { edges, totalCount } = props.data.allMarkdownRemark
  const url = props.data.site.siteMetadata.url
  const pathname = props.location.pathname
  return (
    <div>
      <MetaPost
        title={`Trending Posts - ${tag}`}
        description={`How to ${tag} explains about the modern  web development technologies with step by step tutorials
        and articles`}
        thumbnail={jsimg}
        url={url}
        pathname={pathname}
        stop
      />
      <div className="post-list auto ">
        <div className="padding-top5">
          <div className="post-setup">
            <h1 className=" slim">{`Trending posts in ${tag}`}</h1>
            {props.data.allMarkdownRemark.edges.map(({ node }, i) => (
              <Link to={node.fields.slug} key={i}>
                <div className="post-items">
                  {
                    <div className="ribbon">
                      <span>{tag}</span>
                    </div>
                  }
                  <h2>{node.frontmatter.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query TagPage2($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
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
