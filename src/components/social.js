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
    <section className="social" aria-label="social">
      <div className="social__links">
        <div className="social__icon">
          <a
            href="https://www.linkedin.com/in/onyegbuchulem-chidiebere/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin Profile"
          >
            <FontAwesomeIcon
              className="icon social__linkedin"
              icon={faLinkedin}
            />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="https://twitter.com/chidexebere"
            target="_blank"
            rel="noreferrer"
            title="Follow me on Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon social__twitter"
            />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="https://github.com/chidexebere"
            target="_blank"
            rel="noreferrer"
            title="Github Projects"
          >
            <FontAwesomeIcon icon={faGithub} className="icon social__github" />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="mailto:conyegbuchulem@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email me -conyegbuchulem@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon social__email" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Social
