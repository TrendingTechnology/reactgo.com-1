import React from 'react'
import Link from 'gatsby-link'
import { searchStringInArray } from '../../helper'
import '../pages/commonMarkdown.css'

function CreateLink(props) {
  return (
    <div style={{ paddingBottom: '.6rem' }}>
      <span className="dottedline" />
      <Link
        to={props.node.fields.slug}
        aria-current="page"
        activeStyle={{ fontWeight: '700', color: 'black' }}
      >
        <span
          className="dotted"
          style={{ backgroundColor: `${props.active && '#fbd84a'}` }}
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
        <span className="course-logo" style={{ right: 0, opacity: 0.2 }}>
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
