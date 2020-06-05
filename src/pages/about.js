import React from "react"

import Layout from "../container/layout"
import SEO from "../components/seo"
import ProfilePic from "../elements/profilePic"
import Skills from "../components/skills"
import Experiences from "../components/experiences"
import Projects from "../components/projects"

class AboutPage extends React.Component {
  render() {
    const siteTitle = "About"

    return (
      <div className="aboutPage">
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="About me"
            keywords={[`portfolio`, `blog`, `gatsby`, `javascript`, `react`]}
          />
          <div className="aboutPage__content">
            <h1>About</h1>
            <section className="aboutPage__intro">
              <div className="aboutPage__introText">
                <p> I am a frontend developer living in Lagos Nigeria.</p>
                <p>
                  I love solving problems and I am passionate about building
                  great experiences on the web.
                </p>
                <p>
                  I create fast and accessible web applications with intuitive
                  user interfaces and functional user experience.
                </p>
              </div>
              <div className="aboutPage__profilePic">
                <ProfilePic />
              </div>
            </section>
            <section className="aboutPage__skills">
              <h1>What I use for development</h1>
              <Skills />
            </section>
            <section className="aboutPage__experience">
              <h1>Where I have worked</h1>
              <Experiences />
            </section>
            <section className="aboutPage__projects">
              <h1>Projects I worked on </h1>
              <Projects />
            </section>
            <section className="aboutPage__resume">
              <h2>
                You want all these on a single PDF? ...
                <a
                  href="https://docs.google.com/document/d/170V3dkL8ip_4PdEmJzdyyZmtTXFUgxvy2eLRjex9kqk/export?format=pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </h2>
            </section>
          </div>
        </Layout>
      </div>
    )
  }
}

export default AboutPage
