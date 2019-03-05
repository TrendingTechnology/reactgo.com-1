import React from 'react'
import { Link } from 'gatsby'
import './main.css'
import '../list.css'
import getUnique from '../new';


class MainUi extends React.Component {
  render() {
    const { allMarkdownRemark } = this.props.data

    const finalData = getUnique(allMarkdownRemark);


    return (
      <div>
        <div className="post-list auto bglight ">
          <div className="padding-top3">
            <div className="post-setup">
              {/* <h1 className=" slim">{`Learn React tutorials for beginners`}</h1> */}
              {finalData.map((post, i) => (
                <Link to={post.slug} key={i}>
                  <div className="post-items">
                    {post.logo && (
                      <span className="list-logo">
                        <img
                          src={post.logo}
                          style={{ margin: 0 }}
                          alt={post.courseurl}
                        />
                      </span>
                    )}
                    <h2>{post.title}</h2>
                    <time className="date">{post.date}</time>
                    <p className="excerpt">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainUi