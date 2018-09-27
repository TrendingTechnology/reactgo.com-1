---
myid: 7
date: '2018-09-26'
title: Adding images to the post
description: "Gatsby offers us the different type of plugins to lazy load the images by adding a blur effect  and also crop the images for the different device sizes."
logo: "/img/gatsbylogo.jpeg"
thumbnail: "/img/gatsby-thumbnail.png"
tags: ['gatsbyblog']
course: Build a blog using Gatsby.js & React
---

Gatsby offers us a different type of plugins to lazy load the images by adding a blur effect and also crop the images for the different device sizes.

It helps us to load the pages fastly.


## How to add images to our blog?

we need to install the three plugins which are transformer-sharp, plugin-sharp,gatsby-image

Run the below commands to install the three plugins.

```bash
npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
npm install --save gatsby-image
```

Let's add an image to our blog post.

_my-first post/index.md_
```md
---
title: My first Blog post
description: This post is related to the gatsbyjs
date: '2018-09-26'
image: time.jpg
---
```
time.jpg is present inside the my-first post folder.


we need to add a query for that image inside the *blog-post.js* template.

*blog-post.js*
```js
import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby'

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title} = post.frontmatter;

    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}


export default BlogPost

export const query = graphql`

 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
       }
       }
   }
}
`
```

Gatsby transformer sharp and plugin sharp are used to processing the images and produce the responsive images.


restart your development server you will see an image with the blur effect and faster load timing.

![lazyloading images](lazy-loading.gif)