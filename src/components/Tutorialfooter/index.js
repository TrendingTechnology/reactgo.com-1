import React from 'react'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import './tutorialfooter.css'
import '../header.css'

function TutorialFooter({ siteTitle }) {
  return (
    <footer className="footer-tut">
      <hr />

      {/* <section className="footer-on">
        <form
          className="form2"
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
              get daily react{' '}
              <span style={{ fontFamily: 'cursive' }}>tips</span>
              <Magic style={{ color: 'red' }} />
            </h4>
            <input
              type="email"
              name="email"
              id="tlemail"
              required
              className="email-box"
              placeholder="me@mail.com"
            />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" className="sub" value="Send my tip" />
          </section>
        </form>
      </section>*/}
      <a
        href="https://twitter.com/intent/follow?screen_name=saigowthamr"
        rel="noopener"
        title="twitter follow"
        className="twitter-color"
      >
        <TwitterIcon /> follow @saigowthamr
      </a>
    </footer>
  )
}

export default TutorialFooter
