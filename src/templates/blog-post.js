import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
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
      }
      excerpt
    }
  }
`
