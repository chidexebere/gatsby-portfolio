import React, { useState } from "react"
import { graphql } from "gatsby"
import ButtonAccordion from "../elements/buttonAccordion"
import ProjectDetails from "../components/projectDetails"
import Layout from "../container/layout"
import Seo from "../components/seo"
import FeaturedProjects from "../components/featuredProjects"

const Projects = ({ location, data }) => {
  const projects = data.allProjectsJson.edges
  const featuredProjects = data.allMarkdownRemark.nodes

  const siteTitle = "Chidiebere Onyegbuchulem Personal Website"

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const toggleSkills = (id) => {
    setSelected(id)
    setOpen(!open)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All projects" />

      <div className="projects">
        <section className="projects__featured">
          <h2>Featured Projects</h2>
          <FeaturedProjects projects={featuredProjects} />
        </section>
        <section className="projects__others">
          <h2>Other Projects</h2>
          {projects.map(({ node: project }, index) => {
            const { id, type, projects } = project

            return (
              <div key={id}>
                <ButtonAccordion
                  id={id}
                  open={open}
                  selectedId={selected}
                  handleOnClick={toggleSkills}
                >
                  {type}
                </ButtonAccordion>
                <ProjectDetails
                  id={id}
                  projects={projects}
                  selectedId={selected}
                  open={open}
                />
              </div>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          type
          projects {
            name
            description
            technologyUsed
            url
          }
        }
      }
    }

    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/(projects)/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          description
          slug
        }
        fields {
          slug
        }
      }
    }
  }
`
