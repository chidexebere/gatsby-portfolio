import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Social from "./social"
import "../utils/fontawesome"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`
    let main

    if (location.pathname === rootPath) {
      main = <main className="main home">{children}</main>
    } else {
      main = <main className="main">{children}</main>
    }
    return (
      <div
        className="layout"
        // style={{
        //   marginLeft: `auto`,
        //   marginRight: `auto`,
        //   maxWidth: rhythm(50),
        //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        // }}
      >
        {/* <header>{header}</header> */}
        <header className="header">
          <Link className="header__logo" to="/">
            Chidiebere Onyegbuchulem
          </Link>
          <nav className="header__nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </header>
        <>{main}</>

        <footer className="footer">
          <Social /> © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

// const Wrapper = styled.div`
//   min-height: 100vh;
// `

// const Footer = styled.footer`
//   text-align: center;
//   margin: 24px;
// `

export default Layout
