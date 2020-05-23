import React from "react"

const Button = props => {
  const computedClass = `button ${props.type}`

  return (
    <button className={computedClass} onClick={props.handleOnClick}>
      {props.children}
    </button>
  )
}

export default Button
