import React from 'react'
import Link from 'gatsby-link'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import Rss from 'react-icons/lib/fa/rss-square'
import './footer.css'
import './header.css'

function Footer({ siteTitle }) {
  return (
    <footer className="footer-g">
      <hr />

      <section className="footer-start">
        <Link to="/" className="footer-title logostyle">
          {siteTitle}
        </Link>
        <a
          href="https://twitter.com/saigowthamr"
          title="twitter"
          style={{ color: '#3DA9F5' }}
          target="_blank"
          rel="noopener"
          className="footer-title logostyle"
        >
          <TwitterIcon />
        </a>
        <Link to="/rss.xml" style={{ color: "orange" }} target="_blank"
          rel="noopener" title="rss feed" className="footer-title logostyle">
          <Rss />
        </Link>
        <nav className="footer-links">
          <Link to={'/react/tutorial/'}>React</Link>
          <a href='https://jshype.com/angular/tutorial/'>Angular</a>
          <a href='https://jshype.com/vuejs/tutorial/'>Vue</a>
          <a href='https://jshype.com/javascript'>JavaScript</a>
          <form
            className="form"
            action="https://buttondown.email/api/emails/embed-subscribe/saigowthamr"
            method="post"
            target="popupwindow"
            onSubmit={e => {
              e.preventDefault()
              window.open('https://buttondown.email/saigowthamr', 'popupwindow')
            }}
          >
            <h4>Want to update with latest tutorials</h4>
            <label htmlFor="bd-email" className="label">
              Email
            </label>
            <input type="email" name="email" id="bd-email" className="email" />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" className="subs" value="Subscribe" />
          </form>
        </nav>
      </section>
    </footer>
  )
}

export default Footer
