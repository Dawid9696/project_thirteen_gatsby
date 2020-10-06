const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const dishTemplate = path.resolve("./src/templates/dish.js")
  const res = await graphql(`
    query {
      allContentfulDish {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulDish.edges.forEach(edge => {
    createPage({
      component: dishTemplate,
      path: `/dish/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
