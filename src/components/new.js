import _ from 'lodash';



function getUnique(all) {
    const arr = [];

    let j = all.edges.map(({ node }) => {
        const title = node.frontmatter.course ? node.frontmatter.course : node.frontmatter.title
        const slug = node.frontmatter.courseurl ? '/' + node.frontmatter.courseurl : node.fields.slug
        const logo = node.frontmatter.logo
        const excerpt = node.excerpt

        arr.push(
            {
                title,
                slug,
                logo,
                excerpt
            }
        )

    })
    return _.uniqBy(arr, 'title')

}


export default getUnique