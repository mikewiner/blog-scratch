import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { BlogContent } from "../templates/blog-post"

require("typeface-open-sans")

const Wrapper = styled.div`
  ${"" /* border: 2px solid blue; */}
  max-width: 850px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 0.2rem;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Open Sans", sans-serif;
            a {
              color: #000000;
            }
          }
          body.dark {
            -webkit-font-smoothing: antialiased;
            background-color: #121212;
            color: white;
            a {
              color: white;
            }
            header li a {
              color: black;
              font-weight: 400;
            }
            ${BlogContent} {
              a,
              li,
              p {
                color: rgba(255, 255, 255, 0.85);
              }
              blockquote {
                background-color: #383838;
              }
              figure,
              img {
                filter: brightness(0.9) contrast(1.1);
              }
            }
          }

          strong {
            opacity: 1;
          }
        `}
      />
      {children}
    </Wrapper>
  )
}

export default Layout
