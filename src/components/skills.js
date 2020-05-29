import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import SkillDetails from "./skillDetails"
import ButtonAccordion from "../elements/buttonAccordion"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
        edges {
          node {
            id
            title
            list
          }
        }
      }
    }
  `)
  const skills = data.allSkillsJson.edges

  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)

  const toggleSkills = id => {
    setSelected(id)
    setOpen(!open)
  }

  return (
    <>
      {skills.map(({ node: skill }, index) => {
        const id = skill.id
        const title = skill.title
        const list = skill.list

        return (
          <div key={id} className="skills">
            <ButtonAccordion
              id={id}
              open={open}
              selectedId={selected}
              handleOnClick={toggleSkills}
            >
              {title}
            </ButtonAccordion>
            <SkillDetails
              id={id}
              skillsList={list}
              selectedId={selected}
              open={open}
            />
          </div>
        )
      })}
    </>
  )
}

export default Skills
