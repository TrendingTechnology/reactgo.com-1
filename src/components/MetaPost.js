import React from 'react'
import Helmet from 'react-helmet'
import icon from '../img/favicon.ico'

const MetaPost = props => (
  <Helmet
    defaultTitle={`${props.title} ${!props.no ? "| Reactgo" : ''} `}
    meta={[
      { name: 'title', content: props.title },

      { name: 'description', content: props.description },
      ,
      {
        property: 'og:title',
        content: props.title,
      },
      {
        property: 'og:url',
        content: props.pathname ? props.url + props.pathname : props.url,
      },

      {
        property: 'og:image',
        content: props.thumbnail && props.thumbnail,
      },
      {
        property: 'og:image:secure_url',
        content: props.thumbnail && props.thumbnail,
      },

      {
        property: 'og:description',
        content: props.description,
      },

      {
        property: 'og:image:width',
        content: '1200',
      },

      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:locale',
        content: 'en',
      },
      { name: 'twitter:card', content: 'summary_large_image' },

      { name: 'twitter:title', content: props.title },

      {
        name: 'twitter:description',
        content: props.description,
      },
      {
        name: 'twitter:image',
        content: props.thumbnail && props.thumbnail,
      },
      { property: 'og:type', content: 'website' },

      // {
      //     property: 'article:publisher',
      //     content: 'https://www.twitter.com/@saigowthamr',
      // },
      // { property: 'article:author', content: 'Sai gowtham' },
      { name: 'robots', content: 'index, follow' },
      // {
      //     property: 'article:published_time',
      //     content: props.date,
      // },
      { name: 'twitter:creator', content: '@saigowthamr' },
      { property: 'og:site_name', content: 'Reactgo' }

    ]}
  >
    <html lang="en" />
    <link rel="icon" href={icon} />
    {!props.stop && (
      <script type="application/ld+json">
        {`

        [

          {
          "@context": "http://schema.org",
          "@type": "Organization",
          "url": "${props.url}",
          "logo": "${props.url}/img/download.png"
         },
        {
                "@context":"http://schema.org",
            "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                 "position": 1,
              "item": {
              "@id":"${props.url}",
               "name": "Home"
                  }
                },{
                "@type": "ListItem",
                "position": 2,
               "item": {
               "@id": "${props.url + props.pathname}",
               "name": "${props.title}"
               }
           }]
       }
      ]
`}
      </script>
    )}
  </Helmet>
)

export default MetaPost
