import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../container/layout"
import SEO from "../components/seo"
import Button from "../elements/button"

class AboutPage extends React.Component {
  render() {
    const siteTitle = "Chidiebere Onyegbuchulem Personal Website"

    return (
      <div className="homePage">
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="About me"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
          <div className="homePage__content">
            <div className="homePage__intro">
              <h1>
                Hello, I'm Chidi
                <span role="img" aria-label="wave emoji">
                  👋
                </span>
              </h1>
              <div className="homePage__introText">
                <p> A Front-end Developer.</p>
                <p>I build great experiences on the web.</p>
              </div>
            </div>
            <div className="homePage__button">
              <Link to="/about">
                <Button type="default">
                  More
                  <FontAwesomeIcon
                    className="social__arrowRight"
                    icon={faArrowRight}
                  />
                </Button>
              </Link>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default AboutPage
