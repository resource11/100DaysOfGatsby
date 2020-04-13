import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider, MDXRenderer } from "@mdx-js/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ children }) => {
  // find the fluid image
  // let featuredImgFluid = result.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <MDXProvider>
      <Layout>
        {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
        <article>
          <header>testing 123</header>
          <div>{children}</div>
        </article>
      </Layout>
    </MDXProvider>
  )
}
