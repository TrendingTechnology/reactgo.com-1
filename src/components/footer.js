import React from 'react'
import { Link } from 'gatsby'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import Magic from 'react-icons/lib/fa/magic'
import Rss from 'react-icons/lib/fa/rss-square'
import './footer.css'
import './header.css'

function Footer({ siteTitle }) {
  return (
    <footer className="footer-g">
      <hr />
      <a
        href="https://twitter.com/intent/follow?screen_name=saigowthamr"
        rel="noopener"
        title="twitter follow"
        className="twitter-style"
      >
        <TwitterIcon /> follow @saigowthamr
      </a>
      <section className="footer-start">
        <div className="socials">
          <Link to="/" className="footer-title logostyle">
            {siteTitle}
          </Link>

          <Link
            to="/rss.xml"
            style={{ color: 'orange' }}
            target="_blank"
            rel="noopener"
            title="rss feed"
            className="footer-title logostyle"
          >
            <Rss />
          </Link>
        </div>
        <nav className="footer-links">
          <Link to={'/react/'}>React</Link>
          <Link to={'/webpack/'}>Webpack</Link>
        </nav>

        <form
          className="form"
          action="https://tinyletter.com/reactgo"
          method="post"
          target="popupwindow"
          onSubmit={() => {
            window.open(
              'https://tinyletter.com/reactgo',
              'popupwindow',
              'scrollbars=yes,width=800,height=600'
            )
            return true
          }}
        >
          <section className="form-box">
            <Magic style={{ color: 'red' }} />{' '}
            <h4>
              get the weekly{' '}
              <span style={{ fontFamily: 'cursive' }}>newsletter</span>
              <Magic style={{ color: 'red' }} />
            </h4>
            <label htmlFor="tlemail" className="label">
              Email
            </label>
            <input type="email" name="email" id="tlemail" className="email" />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" className="subs" value="Subscribe" />
          </section>
        </form>
      </section>
    </footer>
  )
}

export default Footer
