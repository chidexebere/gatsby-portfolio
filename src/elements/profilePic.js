import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

function ProfilePic() {
  return (
    <StaticQuery
      query={profilePicQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div className="profile-pic">
            <Image
              fixed={data.profilePic.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </div>
        )
      }}
    />
  )
}

const profilePicQuery = graphql`
  query profilePicQuery {
    profilePic: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default ProfilePic
