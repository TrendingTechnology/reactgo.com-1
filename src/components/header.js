import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import GithubIcon from 'react-icons/lib/go/mark-github'

class Header extends React.Component {
  state = {
    active: false,
  }

  openUp = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    const { location, siteTitle } = this.props
    return (
      <div className="main-nav">
        <button onClick={this.openUp} className="navbtn">
          {this.state.active ? 'Show' : 'Hide'}
        </button>

        <div className="header">
          {!this.state.active && (
            <Link to="/" className={`logostyle`}>
              {siteTitle}
            </Link>
          )}

          <nav
            className={this.state.active ? 'nav' : 'nav active'}
            aria-hidden={this.state.active ? true : false}
          >
            <Link
              to={'/react/tutorial/'}
              activeStyle={{ backgroundColor: '#f5f5f5' }}
            >
              React
            </Link>
            <Link
              to={'/reactrouter/tutorial/'}
              activeStyle={{ backgroundColor: '#f5f5f5' }}
            >
              React router
            </Link>
            <Link to={'/webpack/tutorial/'}
              activeStyle={{ backgroundColor: '#f5f5f5' }}
            >Webpack</Link>

          </nav>

          <a
            className="github"
            href="https://github.com/saigowthamr/reactgo.com"
            target="_blank"
            rel="noopener noreferer"
            style={{ color: 'black' }}
            title="GitHub"
          >
            <GithubIcon style={{ verticalAlign: `text-top` }} />
          </a>
        </div>
      </div>
    )
  }
}

export default Header
