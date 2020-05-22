import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import "../scss/styles.scss"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <div className="homePage">
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
          <div className="homePage__content">
            <div className="homePage__intro">
              <h1>
                Hello,
                <span role="img" aria-label="wave emoji">
                  👋
                </span>
                I'm Chidi
              </h1>
              <div className="homePage__introText">
                <p> A Front-end Developer.</p>
                <p>I build great experiences on the web.</p>
              </div>
            </div>
            <div className="homePage__button">
              <Link to="/about">
                <Button>
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
