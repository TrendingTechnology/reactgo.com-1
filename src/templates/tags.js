import React from 'react'
import { Link } from 'gatsby';
import MetaPost from '../components/MetaPost'
import '../pages/list.css'
import Times from 'react-icons/lib/io/clock'
import _ from 'lodash'
import { graphql } from "gatsby"
import Layout from '../components/layout';
import '../pages/main.css'
import Footer from '../components/footer'

const Tags = props => {
  const { tag } = props.pageContext
  const { edges } = props.data.allMarkdownRemark
  const url = props.data.site.siteMetadata.url
  const pathname = props.location.pathname;
  const courseTitle = _.get(edges[0], 'node.frontmatter.course');
  const courseDescription = _.get(edges[0], 'node.frontmatter.description');
  const thumbnail = _.get(edges[0], 'node.frontmatter.thumbnail');
  let totalMin = edges.map(({ node }, i) => node.timeToRead).reduce((a, c) => a + c);

  return (
    <Layout location={props.location} >
      <div>
        <MetaPost
          title={courseTitle ? courseTitle : `Tutorials in ${tag}`}
          description={courseDescription}
          thumbnail={url + thumbnail}
          url={url}
          pathname={pathname}
          stop
        />
        <div className="post-list auto bglight ">
          <div className="padding-top5">
            <div className="post-setup">
              <h1 className=" slim">{courseTitle ? courseTitle : `Tutorials in ${tag}`}
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
      <Footer siteTitle={'Reactgo'} />
    </Layout>
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
            course
            description
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
        url
        author
      }
    }
  }
`
