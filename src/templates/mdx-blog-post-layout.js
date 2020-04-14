import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ children }) => {
  return (
    <Layout>
      {/* <SEO title={post.frontmatter.title} description={post.excerpt} /> */}
      <article>
        <div>{children}</div>
        <header>testing 4567 why</header>
      </article>
    </Layout>
  )
}
