import React from 'react'
import FilterLink from '../containers/FilterLink'
import { filters } from '../../common/constant'

const Footer = () => (
  <p>
    Show:
    {
      filters.map(filter => <FilterLink key={filter} filter={filter}>{filter}</FilterLink>)
    }
  </p>
)

export default Footer