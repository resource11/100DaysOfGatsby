import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "images/daylilies-in-july.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  let featuredImgFluid = data.file.childImageSharp.fluid
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <h1>About {data.site.siteMetadata.title}</h1>
      <Img fluid={featuredImgFluid} />
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}
