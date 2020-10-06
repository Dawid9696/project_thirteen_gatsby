import React from "react"
import styled from "styled-components"

const Dish = ({ data }) => {
  return <DishCard>{data.node.title}</DishCard>
}

export default Dish

const DishCard = styled.div`
  margin: 10px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
