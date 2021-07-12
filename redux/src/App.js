import React from 'react'
import TodoDemo from './todoDemo'

class App extends React.Component {
  // saveStorage = (data) => {
  //   localStorage.setItem("todo", JSON.stringify(data));
  // }
  // componentDidMount() {
  //   const { store } = this.props;
  //   console.log('todoDemo didMount')
  //   // 窗口关闭时保存数
  //   window.addEventListener('beforeunload', () => {
  //     // console.log('beforeunload', store.getState())
  //     // alert('beforeunload', store.getState())
  //     this.saveStorage(store.getState());
  //   })
  // }
  render() {
    return (
      <div className="App">
         <h2>手写简易版redux</h2> 
        <TodoDemo />
      </div>
    );
  }
}

export default App;
