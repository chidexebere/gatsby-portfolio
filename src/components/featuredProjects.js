import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const FeaturedProjects = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <>
          <div key={index} className="projectFeatured">
            <Link to={project.fields.slug} itemProp="url">
              <div className="projectFeatured__image-cover">
                {project.frontmatter.thumb ? (
                  <GatsbyImage
                    image={getImage(project.frontmatter.thumb)}
                    alt={`${project.frontmatter.title} logo`}
                  />
                ) : (
                  <span>{project.frontmatter.title}</span>
                )}
              </div>
            </Link>
            <div className="projectFeatured__description">
              <h2>
                <Link to={project.fields.slug} itemProp="url">
                  <span itemProp="headline">{project.frontmatter.title}</span>
                </Link>
              </h2>
              <p>{project.frontmatter.description}</p>
            </div>
          </div>
          <hr />
        </>
      ))}
    </>
  )
}

export default FeaturedProjects
