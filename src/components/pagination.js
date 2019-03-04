import React from 'react';
import { Link } from 'gatsby'
import ArrowRight from 'react-icons/lib/fa/arrow-right'
import ArrowLeft from 'react-icons/lib/fa/arrow-left'

const color = { color: 'inherit' }

const Pagination = ({ pathContext }) => (
  <ul className="pager">
    <li className="prev"> {pathContext.previousPagePath && <Link style={color} to={pathContext.previousPagePath} rel="prev">  <ArrowLeft /> Previous Page</Link>}</li>
    <li className="next">{pathContext.nextPagePath && <Link style={color} to={pathContext.nextPagePath} rel="next">Next Page   <ArrowRight /></Link>}</li>
  </ul>
)

export default Pagination;
