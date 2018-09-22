import React from 'react'
import { Link } from 'gatsby';
import ArrowRight from 'react-icons/lib/fa/arrow-right'
import ArrowLeft from 'react-icons/lib/fa/arrow-left'
function NextPost(props) {
  let { prev, next } = props

  return (
    <ul className="pager">
      {prev && (
        <li>
          <Link to={prev.fields.slug}>
            <ArrowLeft /> Previous
            <div className="prev">{prev.frontmatter.title}</div>
          </Link>
        </li>
      )}
      {next && (
        <li>
          <Link to={next.fields.slug}>
            Next <ArrowRight />
            <div className="next">{next.frontmatter.title}</div>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default NextPost
