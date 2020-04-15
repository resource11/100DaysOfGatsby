import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ children, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={pageContext.frontmatter.title}
        description={pageContext.excerpt}
      />
      <article>
        <header>
          testing 4567 why not again
          <h1>{pageContext.frontmatter.title}</h1>
        </header>
        <div>{children}</div>
      </article>
    </Layout>
  )
}
