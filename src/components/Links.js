import React from 'react'
import Link from 'gatsby-link'

function CreateLink(props) {
  return (
    <Link
      to={props.node.fields.slug}
      activeStyle={{
        borderRight: [!props.border ? '2px solid black' : 0],
        borderLeft: [props.border ? props.border : 0],
        fontWeight:[props.border ? 800:700 ],
        color: 'black',
      }}
      aria-current="page"
    >
      {props.title || 'no title found'}
    </Link>
  )
}

export default CreateLink
