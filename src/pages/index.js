import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          owner
          titleOfPage
        }
      }
    }
  `)
  const { titleOfPage, owner } = data.site.siteMetadata
  return (
    <Shop>
      {titleOfPage} | {owner} przepisy.pl
    </Shop>
  )
}

const Shop = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
