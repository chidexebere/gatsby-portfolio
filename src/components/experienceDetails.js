import React from "react"

const ExperienceDetails = props => {
  const { id, details, selectedId, open } = props

  const addedClass = selectedId === id && open === true ? `open` : `close`

  const computedClass = `experienceList ${addedClass}`

  return (
    <div className={computedClass}>
      <div className="experienceList__cover">
        {details.map((detail, index) => (
          <div key={index}>
            <div className="experienceList__duration">{detail.duration}</div>
            <p className="experienceList__position">{detail.position}</p>
            <ul className="experienceList__description">
              {detail.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceDetails
