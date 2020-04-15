import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext }) => {
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
      <article>
        <header>aaaand 789</header>
        <div>
          <MDXRenderer>{pageContext.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}
