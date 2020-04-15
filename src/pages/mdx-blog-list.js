import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Layout from "../components/layout"

const dateColor = `purple`

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title={`All MDX files listed here`} />
      <article>
        <header>
          <h1>
            All MDX files listed here{" "}
            <small
              css={css`
                color: slategrey;
                display: inline-block;
              `}
            >
              {data.allFile.totalCount} Posts
            </small>
          </h1>
          <hr />
        </header>
        {data.allFile.edges.map(({ node }) => (
          <div key={node.id}>
            <h2
              css={css`
                display: inline;
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link to={node.childMdx.frontmatter.path}>
                {node.childMdx.frontmatter.title}
              </Link>
            </h2>
            <span
              css={css`
                color: ${dateColor};
                display: inline-block;
                font-size: 0.875rem;
                margin-left: 0.25rem;
              `}
            >
              — {node.childMdx.frontmatter.date}
            </span>
            <p>{node.childMdx.excerpt}</p>
          </div>
        ))}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "mdx" } }) {
      edges {
        node {
          childMdx {
            body
            frontmatter {
              author
              date(formatString: "MMMM DD, YYYY")
              featuredImage {
                id
              }
              path
              title
            }
            exports {
              metadata {
                author
                date(formatString: "MMMM DD, YYYY")
                featuredImage {
                  id
                }
                path
                title
              }
            }
            excerpt
            id
          }
        }
      }
      totalCount
    }
  }
`
