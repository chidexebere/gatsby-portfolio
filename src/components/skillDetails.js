import React from "react"

const SkillDetails = props => {
  const { id, skillsList, selectedId, open } = props

  const addedClass = selectedId === id && open === true ? `open` : `close`

  const computedClass = `skillList ${addedClass}`

  return (
    <div className={computedClass}>
      <ul>
        {skillsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillDetails
