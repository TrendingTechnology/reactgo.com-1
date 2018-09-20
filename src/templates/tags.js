import React from 'react'
import Link from 'gatsby-link'
import js from '../img/jslogo.png'
import MetaPost from '../components/MetaPost'
import jsimg from '../img/js.jpg'
import '../pages/list.css'
import Times from 'react-icons/lib/io/clock'

const Tags = props => {
  const { tag } = props.pathContext
  const { edges, totalCount } = props.data.allMarkdownRemark
  const url = props.data.site.siteMetadata.url
  const pathname = props.location.pathname;
  let totalMin = edges.map(({ node }, i) => node.timeToRead).reduce((a, c) => a + c);

  return (
    <div>
      <MetaPost
        title={`Tutorials - ${tag}`}
        description={`How to ${tag} explains about the ${tag}  with step by step interactive tutorials
        and articles`}
        thumbnail={jsimg}
        url={url}
        pathname={pathname}
        stop
      />
      <div className="post-list auto bglight ">
        <div className="padding-top5">
          <div className="post-setup">
            <h1 className=" slim">{`Tutorials in ${tag}`}
            </h1>
            <strong className="center"><Times className="clock" /> {totalMin + 'min read'}</strong>
            {edges.map(({ node }, i) => (
              <Link to={node.fields.slug} key={i}>
                <div className="post-items">

                  {node.frontmatter.logo && (
                    <span className="list-logo">
                      <img
                        src={node.frontmatter.logo}
                        style={{ margin: 0 }}
                        alt={tag}
                      />
                    </span>
                  )}
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.excerpt}</p>
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
      sort: { fields: [frontmatter___myid], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt(pruneLength:70)
             timeToRead
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
    site {
      siteMetadata {
        url
        author
      }
    }
  }
`
