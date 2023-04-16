import React from 'react'
import Link from '../components/Link'
import { filters } from '../../common/constant'
import { bindActionCreators } from 'redux'
import StoreContext from '../context'
import actions from '../actions'

const { setVisibilityFilter } = actions.visiblilityFilter

class Footer extends React.Component {
  static contextType = StoreContext

  constructor(props, context) {
    super(props)
    const storeState = context.getState()
    this.state = {
      visibilityFilter: storeState.visibilityFilter
    }
  }

  onFilterClick = (filter) => {
    const { dispatch } = this.context
    // dispatch(setVisibilityFilter(filter))
    // 或者 用bindActionCreators, 它返回一个函数
    bindActionCreators(setVisibilityFilter, dispatch)(filter)
  }

  componentDidMount() {
    const store = this.context
    this.unsubscribe = store.subscribe(() => {
      const storeState = store.getState()
      this.setState({
        visibilityFilter: storeState.visibilityFilter
      })
    })
  }
  
  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { visibilityFilter } = this.state
    return <p>
      Show:
      {
        filters.map(filter =>
          <Link key={filter} active={filter === visibilityFilter}
            onClick={() => this.onFilterClick(filter)}>{filter}</Link>)
      }
    </p>
  }
}

export default Footer