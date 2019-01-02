import React from 'react'
import { Link } from 'gatsby'
import './footer.css'
import './header.css'

function Footer({ siteTitle }) {
  return (


    <footer className={"footer-g"}>
      <hr />

      <section className="footer-start">
        <Link to="/" className={"footer-title logostyle"}>
          {siteTitle}
        </Link>
        <a href="https://twitter.com/saigowthamr" className={"footer-title logostyle"}> @saigowthamr</a>

        <nav className="footer-links">
          <a href="https://reactgo.com/rss.xml" target="_blank"
            style={{ margin: 0 }}
          >Rss feed</a>
          <div className="center">
            <form
              action="https://tinyletter.com/reactgo"
              method="post"
              target="popupwindow"
              onSubmit={() =>
                window.open(
                  'https://tinyletter.com/reactgo',
                  'popupwindow'
                )
              }
              className={"embeddable-buttondown-form form"}
            >
              <h4>Stay update with latest tutorials</h4>

              <label htmlFor="bd-email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="bd-email"
                className="email"
                required
              />
              <input type="hidden" value="1" name="embed" />
              <input type="submit" className="subs" value="Subscribe" />
            </form>
          </div>
        </nav>
      </section>
    </footer>



  )
}

export default Footer
