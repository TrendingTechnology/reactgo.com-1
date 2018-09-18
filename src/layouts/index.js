import React from 'react'
import Metapost from '../components/MetaPost'
require('../themes/code-color.css');
import Header from '../components/header';
import Jsimg from '../img/js.jpg'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Metapost
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      url={data.site.siteMetadata.siteUrl}
      thumbnail={data.site.siteMetadata.siteUrl + Jsimg}
      stop
      no
    />

    <Header siteTitle={'Reactgo'} location={location} />
    <div>
      {children ? children() : <strong>Loading</strong>}
    </div>

    <Footer siteTitle={'Reactgo'} />
  </div>
)


export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
