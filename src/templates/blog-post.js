import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../style/theme"

//import Bio from "../components/Bio"
import Layout from "../components/Layout"

const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
const BlogPost = styled.article`
  blockquote {
    font-style: italic;
    padding: 0.5em 10px;
    border-left: 0.32rem solid #47b8d4;
    background: #f9f9f9;
  }
  h1 {
    color: ${colors.main};
    margin: 0;
  }
  p {
    margin: 0.4rem 0;
  }
`
const BlogName = styled.h3`
  margin-bottom: 0;
`
const BlogHeader = styled.p`
  p {
    font-style: italic;
    margin: 0;
  }
`

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <BlogName>Mike's Blog</BlogName>
      <BlogPost>
        <BlogHeader>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
          <small>{post.frontmatter.date}</small>
        </BlogHeader>
        <br />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          {" "}
          Written by Mike Winer who lives and works in Toronto making things and
          blogging about life and its adventures. You should give him a follow
          on Twitter.{" "}
        </footer>
      </BlogPost>

      <nav>
        <NavLinks>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to="/" rel="next">
                Let's go Home 🏠
              </Link>
            )}
          </li>
        </NavLinks>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
