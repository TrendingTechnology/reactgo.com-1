import React from 'react'
import { Link } from 'gatsby';
import TwitterIcon from 'react-icons/lib/fa/twitter'
import Magic from 'react-icons/lib/fa/magic'
import './tutorialfooter.css';
import './header.css';

function TutorialFooter({ siteTitle }) {
    return (
        <footer className="footer-tut">
            <hr />

            <section className="footer-on">
                <a href="https://twitter.com/intent/follow?screen_name=saigowthamr" rel="noopener" title="twitter follow" className="twitter-color">
                    <TwitterIcon /> follow @saigowthamr
                </a>
                <nav className="footer-links2">
                    <Link to={'/react/'}>React</Link>
                    <Link to={'/webpack/'}>Webpack</Link>
                </nav>


                <form
                    className="form2"
                    action="https://tinyletter.com/reactgo"
                    method="post"
                    target="popupwindow"
                    onSubmit={() => {
                        window.open(
                            "https://tinyletter.com/reactgo",
                            "popupwindow",
                            "scrollbars=yes,width=800,height=600"
                        )
                        return true
                    }}
                >
                    <section className="">
                        <Magic style={{ color: 'red' }} />  <h4>get the
               weekly <span style={{ fontFamily: "cursive" }}>newsletter</span>
                            <Magic style={{ color: 'red' }} /></h4>
                        <label htmlFor="tlemail" className="label">
                            Email
            </label>
                        <input type="email" name="email" id="tlemail" className="email-box" />
                        <input type="hidden" value="1" name="embed" />
                        <input type="submit" className="sub" value="Subscribe" />
                    </section>
                </form>
            </section>

        </footer>
    )
}

export default TutorialFooter;
