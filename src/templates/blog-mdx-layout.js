import React from "react"
import { MDXProvider, MDXRenderer } from "@mdx-js/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <MDXProvider>
      <Layout>
        {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
        <article>
          <header>aaaand 789</header>
          <div>
            <MDXRenderer>{data.body}</MDXRenderer>
          </div>
        </article>
      </Layout>
    </MDXProvider>
  )
}
