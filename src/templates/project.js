import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../container/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectTemplate = ({ data, location }) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      />
      <article
        className="project"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section className="project__hero">
          {/* <GatsbyImage
            image={getImage(project.frontmatter.featuredImage)}
            alt={`${project.frontmatter.title} hero image`}
          /> */}
        </section>
        <header>
          <h1 itemProp="headline">{project.frontmatter.title}</h1>
          <div className="project__headline">
            <p className="project__status">{project.frontmatter.status}</p>
            <a
              className="project__link"
              href={project.frontmatter.url}
              target="_blank"
              rel="noreferrer"
            >
              view app
            </a>
          </div>
        </header>
        <section
          className="project__body"
          dangerouslySetInnerHTML={{ __html: project.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectTemplateBySlug($slug: String) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        status
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        url
      }
    }
  }
`
