import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, onClick, active }) => {
  return active ? <span className='active'>{children}</span> :
    <span
      className='filter'
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </span>
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link