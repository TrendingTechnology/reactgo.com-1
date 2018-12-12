import _ from 'lodash';



function getUnique(all) {
    const arr = [];

    all.edges.map(({ node }) => {
        const title = node.frontmatter.course ? node.frontmatter.course : node.frontmatter.title
        const slug = node.frontmatter.courseurl ? '/' + node.frontmatter.courseurl : node.fields.slug
        const logo = node.frontmatter.logo
        const excerpt = node.excerpt
        const date = node.frontmatter.date

        arr.push(
            {
                title,
                slug,
                logo,
                excerpt,
                date
            }
        )

    })
    return _.uniqBy(arr, 'title')

}


export default getUnique