import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../container/layout"
import SEO from "../components/seo"
import Button from "../elements/button"
import "../scss/styles.scss"
import TypeWriter from "../components/typewriter"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Chidiebere Onyegbuchulem Personal Website"
    const staticText = [`I'm a Front-end Developer.`, "I care about"]
    const words = [
      "user experience",
      "accessibility",
      "performance",
      "best practice ",
    ]

    return (
      <div className="homePage">
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`portfolio`, `blog`, `gatsby`, `javascript`, `react`]}
          />
          <div className="homePage__content">
            <div className="homePage__intro">
              <h1>
                Hello, I'm Chidi
                <span role="img" aria-label="wave emoji">
                  👋
                </span>
              </h1>
              <div className="homePage__introText">
                <TypeWriter staticText={staticText} words={words} />
              </div>
            </div>
            <div className="homePage__button">
              <Link to="/about">
                <Button variant="shadow">
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

export default IndexPage
