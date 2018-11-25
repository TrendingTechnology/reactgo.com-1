import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'

const NotFoundPage = () => (
  <Layout>
    <Header siteTitle={'Reactgo'} />
    <div
      style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center' }}
    >
      <div>
        <h1>↩ NOT FOUND ↩</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
