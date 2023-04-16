import React from 'react'
import Context from './context';

const connect = (mapStateToProps = () => { }, mapDispatchToProps, mergeProps, options) => (WrappedComp) => {
  return class extends React.Component {
    static contextType = Context;
    constructor(props, context) {
      super(props)
      this.state = {
        allProps: {},
        ownProps: props
      }
    }

    componentDidMount() {
      const store = this.context;
      console.log('connect mount', this.context)
      store.subscribe(this.update)
      this.update()
    }
    update = () => {
      const store = this.context;

      const { dispatch, getState } = store;

      console.log('update', getState())

      let stateProps = {}
      if (mapStateToProps) {
        stateProps = mapStateToProps(getState(), this.state.ownProps)
      }
      let dispatchProps = {}
      if (typeof mapDispatchToProps === 'object') {
        const keys = Object.keys(mapDispatchToProps)
        keys.forEach(key => {
          dispatchProps[key] = () => {
            // console.log('object', dispatchProps[key])
            dispatch(mapDispatchToProps[key])
          }
        })
      } else if (typeof mapDispatchToProps === 'function') {
        // console.log('function')
        dispatchProps = mapDispatchToProps(dispatch, this.state.ownProps);
      }
      else {
        console.error(`${mapDispatchToProps} is neither an"object" nor a "function"!`)
      }
      // console.log('ownProps', this.state.ownProps)
      // console.log('stateProps', stateProps)
      // console.log('dispatchProps', dispatchProps)
      // console.log('-----------------------------------')
      this.setState({
        allProps: {
          ...this.state.ownProps,
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render() {
      const { allProps } = this.state;
      return (
        //   <Context.Consumer>
        //     {(value) => <WrappedComp {...allProps}  {...value} />}
        //   </Context.Consumer>

        <WrappedComp {...allProps} />
      )
    }
  }
}

export default connect;