import React from 'react'
// import PropTypes from 'prop-types';
import StoreContext from './context';

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComp) => {
  return class extends React.Component {
      constructor (props) {
          super(props)
          this.state = {
              allProps: {}
          }
      }
      static contextType = StoreContext;

      componentDidMount () {
          const { store } = this.context;
          store.subscribe(this.update)
          this.update()
      }
      update() {
          const { store } = this.context;
          const { dispatch } = store;
          let stateProps = mapStateToProps(store.getState())
          let dispatchProps = {}
          if(typeof mapDispatchToProps === 'object'){
            const keys = Object.keys(mapDispatchToProps)
            keys.forEach(key => {
                dispatchProps[key] = () => {
                    dispatch(mapDispatchToProps[key])
                }
            })
          } else {
            dispatchProps = mapDispatchToProps(dispatch);
          }

          this.setState({
              allProps: {
                  ...this.props,
                  ...stateProps,
                  ...dispatchProps
              }
          })
      }
      render() {
          const { finalProps } = this.state;
          return (
              <WrappedComp {...finalProps}/>
          )
      }
  }
}

export default connect;