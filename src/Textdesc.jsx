import React from "react"
import "./Textdesc.css"
import PropTypes from "prop-types"

const Textdesc = ({ children }) => {
  return (
    <div className="textdesc">
      <h2>{children}</h2>
    </div>
  )
}

const Textdescparagraph = ({ children }) => {
  return (
    <div className="textdesc">
      <p>{children}</p>
    </div>
  )
}

Textdesc.propTypes = { children: PropTypes.string.isRequired }
Textdescparagraph.propTypes = { children: PropTypes.string.isRequired }

export { Textdesc, Textdescparagraph }
