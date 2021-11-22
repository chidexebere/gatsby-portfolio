import React from "react"
import { Link } from "gatsby"
import Social from "../components/social"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const aboutPath = `${__PATH_PREFIX__}/about`
  const aboutPathSlash = `${__PATH_PREFIX__}/about/`
  let main

  if (location.pathname === rootPath) {
    main = <main className="main home">{children}</main>
  } else if (
    location.pathname === aboutPath ||
    location.pathname === aboutPathSlash
  ) {
    main = <main className="main">{children}</main>
  } else {
    main = <main className="main blog">{children}</main>
  }
  return (
    <div className="layout">
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
        <Social />
      </footer>
    </div>
  )
}

export default Layout
