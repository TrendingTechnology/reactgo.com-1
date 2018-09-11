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
    const { allMarkdownRemark } = this.props.data

    const searchedCourse = searchStringInArray(
      `/${this.props.course.toLowerCase()}`,
      allMarkdownRemark.edges
    )
    return (
      <div className={`sidebar ${this.props.right && 'rightbar'} `}>
        <span className="course-logo" style={{ right: 0, opacity: 0.2 }}>
          <img src={this.props.clogo} alt={this.props.course} />
        </span>
        <nav className="start-bar">
          {searchedCourse.map(({ node }, i) => (
            <CreateLink
              node={node}
              key={i}
              active={this.props.pathname === node.fields.slug}
            />
          ))}
        </nav>
      </div>
    )
  }
}

export default Sidebar
