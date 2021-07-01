/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span style={{color: 'blue', textDecoration: 'underline'}}>{children}</span>
  }

  return (
    <span
      style={{cursor: 'pointer'}}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </span>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link