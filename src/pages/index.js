import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

import Dish from "../components/dish"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          titleOfPage
          owner
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              level
            }
          }
        }
      }
    }
  `)
  const { titleOfPage, owner } = data.site.siteMetadata
  console.log(data.allMarkdownRemark.edges)
  return (
    <Shop>
      <div>
        {titleOfPage} | {owner} przepisy.pl
      </div>

      {data.allMarkdownRemark.edges.map((edge, index) => (
        <Dish key={index} data={edge} />
      ))}
    </Shop>
  )
}
export default Home

const Shop = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
