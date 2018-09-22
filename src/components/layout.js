import React from 'react'
import Metapost from '../components/MetaPost'
import '../themes/code-color.css';
import Header from '../components/header';
import Jsimg from '../img/js.jpg'
import Footer from '../components/footer'
import './index.css'
import { graphql, StaticQuery } from 'gatsby'


const Layout = ({ children, location }) => (
  <StaticQuery
    query={
      graphql`
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
    }
    render={data => (
      <div>

        <Metapost
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          url={data.site.siteMetadata.siteUrl}
          thumbnail={Jsimg}
          stop
          no
        />

        <Header siteTitle={'Reactgo'} location={location} />
        <div>
          {children}
        </div>


      </div>

    )
    }

  />
)


export default Layout

