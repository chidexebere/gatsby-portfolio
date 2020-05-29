import React from "react"

const ButtonAccordion = props => {
  const { open, selectedId, id } = props
  const addedClass = selectedId === id && open === true ? "active" : "default"
  const computedClass = `button ${addedClass}`

  const handleOnClick = e => {
    e.preventDefault()
    props.handleOnClick(props.id)
  }

  return (
    <button className={computedClass} onClick={handleOnClick}>
      {props.children}
    </button>
  )
}

export default ButtonAccordion
