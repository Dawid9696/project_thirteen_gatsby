import React from "react"
import styled from "styled-components"

const Dish = ({ data }) => {
  return <DishCard>{data.node.frontmatter.title}</DishCard>
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
