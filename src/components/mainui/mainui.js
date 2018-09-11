import React from 'react'
import { searchStringInArray } from '../../../helper'
import Link from 'gatsby-link'
// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1)
// }

function MainUi(props) {
  const { allMarkdownRemark } = props.data

  const searchedCourse = searchStringInArray(
    `/${props.course}`,
    allMarkdownRemark.edges
  )

  return (

    <div>


      <div className="post-list auto bglight ">
        <div className="padding-top5">
          <div className="post-setup">

            <h1 className=" slim">{`Tutorials  in ${props.course}`}</h1>
            {searchedCourse.map(({ node }, i) => (

              <Link to={node.fields.slug} key={i}>

                <div className="post-items">

                  {node.frontmatter.logo && <span className="course-logo" >
                    <img src={node.frontmatter.logo} style={{ margin: 0 }} alt={props.course} />
                  </span>}
                    <div className="ribbon">
                      <span>{props.course}</span>
                    </div>

                  <h2>{node.frontmatter.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>


  )
}

export default MainUi
