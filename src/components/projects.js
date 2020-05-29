import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectDetails from "./projectDetails"
import ButtonAccordion from "../elements/buttonAccordion"

const Projects = () => {
  const data = useStaticQuery(graphql`
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
    }
  `)
  const projects = data.allProjectsJson.edges

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const toggleSkills = id => {
    setSelected(id)
    setOpen(!open)
  }

  return (
    <>
      {projects.map(({ node: project }, index) => {
        const { id, type, projects } = project

        return (
          <div key={id} className="experiences">
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
    </>
  )
}

export default Projects
