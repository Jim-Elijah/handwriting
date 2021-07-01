import React from 'react';
import PropTypes from 'prop-types';
// import StoreContext from './context';


// export default class Provider extends React.Component {
//   static contextType = StoreContext;

//   render() {
//     const { store, children } = this.props;
//     return (
//       <StoreContext.Provider value={store}>11——{children}</StoreContext.Provider>
//     )
//   }
// }

export default class Provider extends React.Component {
  static contextTypes = {
      store: PropTypes.object,
      children: PropTypes.any,
  };

  static childContextTypes = {
      store: PropTypes.object,
  };

  getChildContext = () => {
      return { store: this.props.store, };
  };

  render () {
      return (<div>{this.props.children}</div>);
  }
}

