import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../elements/button"
import ExperienceDetails from "./experienceDetails"

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query {
      allExperiencesJson {
        edges {
          node {
            id
            company
            details {
              position
              duration
              description
            }
          }
        }
      }
    }
  `)
  const experiences = data.allExperiencesJson.edges

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const toggleSkills = id => {
    setSelected(id)
    setOpen(!open)
  }

  return (
    <>
      {experiences.map(({ node: experience }) => {
        const { id, company, details } = experience

        return (
          <div key={id} className="experiences">
            <Button
              id={id}
              open={open}
              selectedId={selected}
              handleOnClick={toggleSkills}
            >
              {company}
            </Button>
            <ExperienceDetails
              id={id}
              details={details}
              selectedId={selected}
              open={open}
            />
          </div>
        )
      })}
    </>
  )
}

export default Experiences
