import React from "react"
import { Link } from "gatsby"
import Social from "../components/social"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog`
    let main

    if (location.pathname === rootPath) {
      main = <main className="main home">{children}</main>
    } else if (location.pathname === blogPath) {
      main = <main className="main blog">{children}</main>
    } else {
      main = <main className="main">{children}</main>
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
}

export default Layout
