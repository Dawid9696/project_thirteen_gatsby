import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulDish(slug: { eq: $slug }) {
      title
      level
    }
  }
`
// {props.data.markdownRemark.frontmatter.title}
const Dish = props => {
  return (
    <DishCard>
      <h1>{props.data.contentfulDish.title}</h1>
      <h5>{props.data.contentfulDish.level}</h5>
      {/* <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div> */}
    </DishCard>
  )
}

export default Dish

const DishCard = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
