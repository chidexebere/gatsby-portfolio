import React from "react"
import { Link } from "gatsby"
import Layout from "../container/layout"
import Seo from "../components/seo"
import Button from "../elements/button"
import TypeWriter from "../components/typewriter"
import ArrowRight from "../images/icons/arrow-right.svg"
import "../scss/styles.scss"

const IndexPage = ({ data, location }) => {
  const siteTitle =
    data?.site.siteMetadata?.title ||
    "Chidiebere Onyegbuchulem Personal Website"
  const staticText = [`A Software Engineer`, "I care about"]
  const words = [
    "user experience",
    "accessibility",
    "performance",
    "best practice ",
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="Home"
        keywords={[`portfolio`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="homePage">
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
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
