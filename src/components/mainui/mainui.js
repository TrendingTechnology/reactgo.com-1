import React from 'react'
import { searchStringInArray } from '../../../helper'
import Link from 'gatsby-link'

// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1)
// }

class MainUi extends React.Component {
  render() {
    const { allMarkdownRemark } = this.props.data
    const heading = allMarkdownRemark.edges.map(
      ({ node }) => node.frontmatter.tags[0]
    )

    return (
      <div>
        <div className="post-list auto bglight ">
          <div className="padding-top5">
            <div className="post-setup">
              <h1 className=" slim">{`Learn React tutorials for beginners`}</h1>
              {allMarkdownRemark.edges.map(({ node }, i) => (
                <Link to={node.fields.slug} key={i}>
                  <div className="post-items">
                    {node.frontmatter.logo && (
                      <span className="list-logo">
                        <img
                          src={node.frontmatter.logo}
                          style={{ margin: 0 }}
                          alt={node.frontmatter.tags[0]}
                        />
                      </span>
                    )}
                    {/* <div className="ribbon">
                      <span>{props.course}</span>
                    </div> */}

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
}

export default MainUi
