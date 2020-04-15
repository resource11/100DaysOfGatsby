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
          testing 123why
          <h1>{pageContext.frontmatter.title}</h1>
        </header>
        <div>{children}</div>
      </article>
    </Layout>
  )
}
