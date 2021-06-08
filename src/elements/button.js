import React from "react"

const Button = props => {
  const { variant, children } = props
  const computedClass = variant ? `button ${variant}` : `button`
  return <button className={computedClass}>{children}</button>
}

export default Button
