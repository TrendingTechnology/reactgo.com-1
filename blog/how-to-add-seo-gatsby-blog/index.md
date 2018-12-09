---
title :  How to add SEO to the Gatsby blog
date: "2018-12-09"
tags: ['javascript','gatsby','react']
image: "gatsby-seo.png"
---


Search engine optimization sites can be shown better in the search results and also helps to the search engine bots to better understand the content you are publishing.

**Open graph** tags are used to get the rich snippets when somebody shares your content on social media.


You can also check out [Meta tags that Google understands.](https://support.google.com/webmasters/answer/79812)



## Gatsby Seo-Component

create a new component called *Metatags.js* so that we can reuse it anytime.

```js: title=Metatags.js
import React from 'react';
import Helmet from 'react-helmet'

function Metatags(props) {
    return (
        <Helmet>
         <html lang="en" />
              <title>{props.title}</title>
               <meta name='title' content= {props.title }/>
               <meta name='description' content= {props.description }/>
        </Helmet>
    )
}

export default Metatags;
```

In the above code, we have added `title` and `description` tags by using the `react-helmet` package. You can ready to use the above component if you don't care about social media sharing.


Let's improve the above component for the social sharing.



```js:title=Metatags.js
import React from 'react';
import Helmet from 'react-helmet'


function Metatags(props) {


    const { title, description, url, pathname, thumbnail } = props


    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name='title' content={title} />

            <meta name='description' content={description} />

            {pathname && <meta property='og:url' content={url + pathname} />}


            {thumbnail && <meta property='og:image' content={thumbnail} />}

            {thumbnail && <meta property=' og:image:secure_url' content={thumbnail}
            />}

            <meta property='og:description' content={description} />

            <meta property='og:image:width' content='1200' />

            <meta property='og:image:height' content='630' />

            <meta property='og:locale' content='en' />

            <meta name='twitter:title' content={title} />

            <meta name='twitter:description' content={description} />
            <meta name='twitter:card' content='summary_large_image' />

            {thumbnail && <meta name='twitter:image' content={thumbnail} />}
        </Helmet>
    )
}
export default Metatags;
```

Now you can get rich snippets when you share your post on twitter or facebook.


#### How to use this component ?

You can use it on your blog-post.js file by passing the `title` and other fields.

```js:title=blog-post.js
   <MetaTags
        title={title}
        description={excerpt}
        thumbnail={url + thumbnail}
        url={url}
        pathname={props.location.pathname}
    />

```


happy coding...