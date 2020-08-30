import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

// import Bio from "../components/Bio"
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
    color:red;
  }
  h1 { 
    color:red;
    margin: 0;
  }
  p {
    margin:0;
  }
`

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <BlogPost>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.description}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>{/* <Bio /> */}</footer>
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
                Let's go Home →
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
