import React from 'react'
import { Link } from 'gatsby'



class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header


      header = (
        <h3>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',

            }}
            to={'/'}
          >
            React tutorials coming soon
          </Link>
        </h3>
      )

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          width:"100%"
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Template
