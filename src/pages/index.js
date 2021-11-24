import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Layout from "../container/layout"
import Seo from "../components/seo"
import Button from "../elements/button"
import "../scss/styles.scss"
import TypeWriter from "../components/typewriter"

const IndexPage = ({ data, location }) => {
  const siteTitle =
    data?.site.siteMetadata?.title ||
    "Chidiebere Onyegbuchulem Personal Website"
  const staticText = [`I'm a Front-end Developer.`, "I care about"]
  const words = [
    "user experience",
    "accessibility",
    "performance",
    "best practice ",
  ]

  return (
    <div className="homePage">
      <Layout location={location} title={siteTitle}>
        <Seo
          title="Home"
          keywords={[`portfolio`, `blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="homePage__content">
          <div className="homePage__intro">
            <h1>
              Hello, I'm Chidi
              <span
                className="homePage__emoji"
                role="img"
                aria-label="wave emoji"
              >
                👋🏽
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

export default IndexPage
