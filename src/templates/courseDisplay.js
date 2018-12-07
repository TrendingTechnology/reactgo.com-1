import React from 'react'
import { Link, graphql } from 'gatsby'
import Times from 'react-icons/lib/io/clock'
import _ from 'lodash'
import Layout from '../components/layout'
import MetaPost from '../components/MetaPost'
import Header from '../components/header'
import Footer from '../components/footer'
import '../components/list.css'
import '../components/mainui/main.css'

const CourseDisplay = props => {
  const { courseurl } = props.pageContext
  const { edges } = props.data.allMarkdownRemark
  const url = props.data.site.siteMetadata.url
  const pathname = props.location.pathname
  const courseTitle = _.get(edges[0], 'node.frontmatter.course')
  const courseDescription = _.get(edges[0], 'node.excerpt')
  const thumbnail = _.get(edges[0], 'node.frontmatter.thumbnail')
  let totalMin = edges
    .map(({ node }, i) => node.timeToRead)
    .reduce((a, c) => a + c)

  return (
    <Layout>
      <Header siteTitle={'Reactgo'} />
      <MetaPost
        title={courseTitle ? courseTitle : `Tutorials in ${courseurl}`}
        description={courseDescription}
        thumbnail={url + thumbnail}
        url={url}
        pathname={pathname}
        stop
      />
      <div className="post-list auto bglight ">
        <div className="padding-top5">
          <div className="post-setup">
            <h1 className=" slim">
              {courseTitle ? courseTitle : `Tutorials in ${courseurl}`}
            </h1>
            <strong className="center">
              <Times className="clock" /> {totalMin + 'min read'}
            </strong>
            {edges.map(({ node }, i) => (
              <Link to={node.fields.slug} key={i}>
                <div className="post-items">
                  {node.frontmatter.logo && (
                    <span className="list-logo">
                      <img
                        src={node.frontmatter.logo}
                        style={{ margin: 0 }}
                        alt={courseurl}
                      />
                    </span>
                  )}
                  <h2>{node.frontmatter.title}</h2>
                  <p className="excerpt">{node.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer siteTitle={'Reactgo'} />
    </Layout>
  )
}

export default CourseDisplay

export const pageQuery = graphql`
  query TagPage2($courseurl: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___id], order: ASC }
      filter: { frontmatter: { courseurl: { eq: $courseurl } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 70)
          timeToRead
          frontmatter {
            title
            logo
            course
            courseurl
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
