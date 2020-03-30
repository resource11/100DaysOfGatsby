import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  // find the fluid image
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <Img fluid={featuredImgFluid} />
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            # this is the
            fluid(maxWidth: 800, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
    }
  }
`
