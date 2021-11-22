import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ProfilePic = () => {
  const data = useStaticQuery(graphql`
    query profilePicQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)
  const author = data.site.siteMetadata?.author

  return (
    <div class="circle outer-circle">
      <span class="splash direction-1"></span>
      <span class="circle inner-circle">
        <StaticImage
          className="profile__pic"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpg"
          width={145}
          height={145}
          quality={95}
          alt={author.name}
        />
      </span>
      <span class="splash direction-2"></span>
    </div>
  )
}

export default ProfilePic
