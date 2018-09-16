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
        <div className="socials">
          <Link to="/" className="footer-title logostyle">
            {siteTitle}
          </Link>

          <Link to="/rss.xml" style={{ color: "orange" }} target="_blank"
            rel="noopener" title="rss feed" className="footer-title logostyle">
            <Rss />
          </Link>
        </div>
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
        <a href="https://twitter.com/intent/follow?screen_name=saigowthamr" rel="noopener" title="twitter follow" className="twitter-style">
          <TwitterIcon /> follow @saigowthamr
</a>
      </section>
    </footer>
  )
}

export default Footer
