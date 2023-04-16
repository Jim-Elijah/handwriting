import React from 'react'
import Link from '../components/Link'
import { filters } from '../../common/constant'

const Footer = ({ visibilityFilter, onFilterClick }) => (
  <p className='footer'>
    Show:
    {
      filters.map(filter =>
        <Link key={filter} active={filter === visibilityFilter} filter={filter} onClick={() => onFilterClick(filter)}>{filter}</Link>)
    }
  </p>
)

export default Footer