import React from "react"

import Layout from "../container/layout"
import Seo from "../components/seo"
import ProfilePic from "../elements/profilePic"
import Skills from "../components/skills"
import Experiences from "../components/experiences"

const AboutPage = ({ data, location }) => {
  const siteTitle =
    data?.site.siteMetadata?.title ||
    "Chidiebere Onyegbuchulem Personal Website"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="About me"
        keywords={[
          `portfolio`,
          `blog`,
          `gatsby`,
          `javascript`,
          `typescript`,
          `react`,
          `nextjs`,
        ]}
      />
      <div className="aboutPage">
        <div className="aboutPage__content">
          <h1>About Me</h1>
          <section className="aboutPage__intro">
            <div className="aboutPage__introText">
              <p>
                I am a Software Engineer living in <u>Lagos </u>
                <u>Nigeria</u>. And I have been doing this for about 2 years.
              </p>
              <p>
                I love solving problems and I am passionate about building great
                experiences on the web.
              </p>
              <p>
                I constantly learn and improve myself. I am currently{" "}
                <u>learning UX</u> and <u>product design</u>. I want to be that
                Frontend engineer that understand users need and is also great
                at implementing it
                <span
                  className="aboutPage__emoji"
                  role="img"
                  aria-label="smile emoji"
                >
                  😊
                </span>
                .
              </p>
              <p>
                I love contributing to Open source and currently contribute to
                open source projects at
                <a
                  className="aboutPage__link"
                  href="https://github.com/creativecommons?type=source"
                  target="_blank"
                  rel="noreferrer"
                >
                  Creative Commons
                </a>{" "}
                and
                <a
                  className="aboutPage__link"
                  href="https://github.com/PostHog?type=source"
                  target="_blank"
                  rel="noreferrer"
                >
                  PostHog
                </a>
                .
              </p>
              <p>
                I try to give back to the developers community. I mentor
                learners from the Google Africa Developer Scholarship through
                the
                <a
                  className="aboutPage__link"
                  href="https://andela.com/learning-community/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Andela Learning Community
                </a>
                .
              </p>
            </div>
            <div className="aboutPage__profilePic">
              <ProfilePic />
            </div>
          </section>
          <section className="aboutPage__skills">
            <h2>Skills I have gained and still improving</h2>
            <Skills />
          </section>
          <section className="aboutPage__experience">
            <h2>Where I have worked</h2>
            <Experiences />
          </section>
          <section className="aboutPage__resume">
            <h3>
              Want all these on a single PDF? ...
              <a
                href="https://docs.google.com/document/d/170V3dkL8ip_4PdEmJzdyyZmtTXFUgxvy2eLRjex9kqk/export?format=pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </h3>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
