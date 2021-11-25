import React from "react"
import Linkedin from "../images/icons/linkedin.svg"
import Twitter from "../images/icons/twitter.svg"
import Github from "../images/icons/github.svg"
import Mail from "../images/icons/mail.svg"

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
            <Linkedin />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="https://twitter.com/chidexebere"
            target="_blank"
            rel="noreferrer"
            title="Follow me on Twitter"
          >
            <Twitter />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="https://github.com/chidexebere"
            target="_blank"
            rel="noreferrer"
            title="Github Projects"
          >
            <Github />
          </a>
        </div>
        <div className="social__icon">
          <a
            href="mailto:conyegbuchulem@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email me -conyegbuchulem@gmail.com"
          >
            <Mail />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Social
