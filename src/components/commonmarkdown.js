import React from 'react'
import Img from 'gatsby-image'
import MetaPost from './MetaPost'
import '../templates/blog-post.css'
import './commonMarkdown.css'
import Share from './share'
import Sidebar from './sidebar'
import Mobilebar from './mobilesidebar'
import NextPost from './NextPost'

class commonMarkDown extends React.Component {
  state = {
    scrollHeight: 0,
  }

  componentDidMount() {
    window.onscroll = this.updateScroll
  }

  updateScroll = () => {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    var scrolled = (winScroll / height) * 100
    this.setState({
      scrollHeight: scrolled,
    })
    if (this.state.scrollHeight > 94) {
      this.setState({
        scrollHeight: 100,
      })
    }
  }

  componentWillUnmount() {
    window.onscroll = null
  }

  render() {
    const post = this.props.data.markdownRemark
    const url = this.props.data.site.siteMetadata.url
    const pathname = this.props.location.pathname
    const { title, date, thumbnail, image, logo, course } = post.frontmatter
    const { next, prev, slug } = this.props.pathContext
    const author = this.props.data.site.siteMetadata.author
    const seoTitle = `${title} - ${course && course}`

    return (
      <div className={`main`}

      >
        <MetaPost
          title={this.props.tag ? seoTitle : title}
          description={post.excerpt}
          date={date}
          url={url}
          pathname={pathname}
          thumbnail={this.props.thumbnail || (thumbnail && url + thumbnail)}
          dateMod={post.modifiedTime}
          datePub={post.birthTime}
        />
        <div className="progress-bar">
          <span
            className="bar"
            style={{ width: this.state.scrollHeight + '%' }}
          />
        </div>

        {!this.props.nosidebar && (
          <Sidebar
            data={this.props.data}
            tag={this.props.tag}
            clogo={logo}
            right={this.props.right}
            pathname={pathname}
          />
        )}
        {!this.props.nomobilebar && (
          <Mobilebar data={this.props.data} tag={this.props.tag} />
        )}

        <main
          className="content"
          style={{
            marginLeft: `${this.props.right ? 0 : ''}`,
            margin: `${this.props.center ? '0 auto' : ''}`,

          }}
        >
          <article className="content-bar">
            {date && <time dateTime={date}>{date}</time>}
            <h1>{title}</h1>
            <strong>
              by{' '}
              <a
                style={{ color: ' rgb(14, 86, 140)' }}
                href="https://twitter.com/saigowthamr"
              >
                {author}
              </a>
              <span className="readtime">{post.timeToRead && post.timeToRead + "min read"}</span>
            </strong>
            {image && <Img fluid={image.childImageSharp.fluid} />}
            <div
              style={{ marginTop: '3rem' }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <Share
              title={`${title} - ${course ? course : 'Reactgo'}`}
              url={url}
              pathname={pathname}
            />
            <NextPost prev={prev} next={next} />
          </article>
        </main>
      </div>
    )
  }
}

export default commonMarkDown