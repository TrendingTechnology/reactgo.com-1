import React from 'react'
import Link from 'gatsby-link'
import { searchStringInArray } from '../../helper'
import './sidebar.css'

function CreateLink(props) {
  return (
    <div style={{ paddingBottom: '.6rem' }}>
      <span className="dottedline" />
      <Link
        to={props.node.fields.slug}
        aria-current="page"
        activeClassName="active"
      >
        <span
          className="dotted"
          style={{ backgroundColor: `${props.active && '#7ED438'}` }}
        />
        <span
          className="dottedline"
        />
        {props.node.frontmatter.title || 'no title found'}
      </Link>
    </div>
  )
}

class Sidebar extends React.Component {
  render() {
    const { tag, clogo, pathname } = this.props
    const { allMarkdownRemark } = this.props.data
    const searchedCourse = searchStringInArray(
      `${tag.toLowerCase()}`,
      allMarkdownRemark.edges
    )
    return (
      <div className={`sidebar ${this.props.right && 'rightbar'} `}>
        <Link to={'/' + tag} style={{ marginLeft: "-1rem" }}>
          {`#${tag.charAt(0).toUpperCase()}${tag.slice(1)} tutorials`}
        </Link>
        <span className="course-logonav">
          <img src={clogo} alt={tag} />
        </span>
        <nav className="start-bar">
          {searchedCourse.map(({ node }, i) => (
            <CreateLink
              node={node}
              key={i}
              active={pathname === node.fields.slug}
            />
          ))}
        </nav>
      </div>
    )
  }
}

export default Sidebar
