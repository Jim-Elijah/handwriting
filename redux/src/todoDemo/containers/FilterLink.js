// import { connect } from 'react-redux'
import { connect } from '../lib/react-redux'
import actions from '../actions'
import Link from '../components/Link'

const { setVisibilityFilter } = actions.visiblilityFilter

const mapStateToProps = (state, ownProps) => {
  console.log('state', state, ownProps)
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink