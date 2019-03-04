import React from 'react';
import { Link } from 'gatsby'
import ArrowRight from 'react-icons/lib/fa/arrow-right'
import ArrowLeft from 'react-icons/lib/fa/arrow-left'

const color = { color: 'inherit' }

const Pagination = ({ pageContext }) => (
  <ul className="pager">
    <li className="prev"> {pageContext.previousPagePath && <Link style={color} to={pageContext.previousPagePath} rel="prev">  <ArrowLeft /> Previous Page</Link>}</li>
    <li className="next">{pageContext.nextPagePath && <Link style={color} to={pageContext.nextPagePath} rel="next">Next Page   <ArrowRight /></Link>}</li>
  </ul>
)

export default Pagination;
