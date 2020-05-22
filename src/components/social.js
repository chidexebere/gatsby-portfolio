import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Social = () => {
  return (
    <section className="social" role="region" aria-label="social">
      <div className="social__links">
        <div className="social__icon">
          <a
            href="https://www.linkedin.com/in/onyegbuchulem-chidiebere/"
            target="_blank"
            title="Linkedin Profile"
          >
            <FontAwesomeIcon className="social__linkedin" icon={faLinkedin} />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="https://twitter.com/chidexebere"
            target="_blank"
            title="Follow me on Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className="social__twitter" />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="https://github.com/chidexebere"
            target="_blank"
            title="Github Projects"
          >
            <FontAwesomeIcon icon={faGithub} className="social__github" />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="mailto:conyegbuchulem@gmail.com"
            target="_blank"
            title="Email me -conyegbuchulem@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className="social__email" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Social
