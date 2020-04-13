import React from "react"
import { css } from "@emotion/core"
import lcss from "./layout.module.css"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={lcss.withSidebar}>
      <div className={lcss.contentWrapper}>
        <header>
          <div
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            <Link to={`/`}>{data.site.siteMetadata.title}</Link>
          </div>
          <nav>
            <ul className={lcss.listItem}>
              <li>
                <Link to={`/about/`}>About</Link>
              </li>
              <li>
                <Link to={`/markdown-blog-list/`}>Markdown blog list</Link>
              </li>
              <li>
                <Link to={`/mdx-blog-list/`}>MDX blog list</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className={lcss.notSidebar}>
          <main className={lcss.main}>{children}</main>
          <footer className={lcss.footer} role="contentinfo">
            <small>This is a footer</small>
          </footer>
        </div>
      </div>
    </div>
  )
}
