import React from 'react'
import Layout from '../components/layout';
import Footer from '../components/footer';

const NotFoundPage = (props) => (
  <Layout location={props.location} >
    <div className="auto bglight padding-top5">
      <div className="padding-top5">
        <h1>NOT FOUND</h1>
        <p>
          You just hit a route that doesn&#39;t exist... the sadness{' '}
          <strong>☹</strong> .
      </p>
      </div>
    </div>
    <Footer siteTitle={'Reactgo'} />
  </Layout>
)

export default NotFoundPage
