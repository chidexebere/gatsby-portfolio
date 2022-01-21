import React from "react"

const ProjectDetails = (props) => {
  const { id, selectedId, open, projects } = props

  const addedClass = selectedId === id && open === true ? `open` : `close`

  const computedClass = `projectList ${addedClass}`

  return (
    <div className={computedClass}>
      <div className="projectList__cover">
        {projects.map((project, index) => (
          <div key={index}>
            <a
              className="projectList__name"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.name}
            </a>
            <p>{project.description}</p>
            <p className="projectList__technologyUsed">
              Technology Used:
              {project.technologyUsed.map((item, index) => (
                <span className="projectList__technologyUsedList" key={index}>
                  {item}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectDetails
