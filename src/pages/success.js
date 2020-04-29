import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Success = () => {
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
          fixed(width: 400, height: 400, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  // let featuredImgFluid = data.file.childImageSharp.fluid
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <h1>Contact success</h1>
      <p>Thanks!</p>
    </Layout>
  )
}

export default Success
