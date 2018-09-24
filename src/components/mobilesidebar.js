import React from 'react'
import CreateLink from './Links'
import { searchStringInArray } from '../../helper'
import AlignJustify from 'react-icons/lib/fa/align-justify'
import Asterisk from 'react-icons/lib/fa/asterisk'
import Link from 'gatsby-link';
import '../pages/commonMarkdown.css'

class MobileSidebar extends React.Component {
  state = {
    open: false,
  }

  onHideShow = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    let { open } = this.state
    const { allMarkdownRemark } = this.props.data
    const { tag } = this.props
    const searchedCourse = searchStringInArray(
      `${tag.toLowerCase()}`,
      allMarkdownRemark.edges
    )
    return (
      <div className="mobile-bar">
        <button
          className="toggler"
          onClick={this.onHideShow}
          aria-label={!this.state.open ? 'Close' : 'Open'}
        >
          {open ? <Asterisk /> : <AlignJustify />}
        </button>
        <div className={`mob ${open && 'open'}`}>
          <nav
            className="mob-start"
            aria-hidden={!this.state.open ? false : true}
          >
            <span style={{
              marginBottom: '17px',
              textAlign: 'CENTER'
            }}>
              <Link to={'/' + tag}>
                {`#${tag.charAt(0).toUpperCase()}${tag.slice(1)} tutorials`}
              </Link>
            </span>
            {searchedCourse.map(({ node }, i) => (
              <CreateLink
                node={node}
                key={i}
                border={'1px solid'}
                title={node.frontmatter.title}
              />
            ))}
          </nav>
        </div>
      </div>
    )
  }
}

export default MobileSidebar
