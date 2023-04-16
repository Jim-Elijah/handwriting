import React from 'react'
import TodoDemo from './todoDemo'
import MyTodoDemo from './my-todoDemo'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h2>手写简易版redux</h2>

        <p>这是原生的redux</p>
        <TodoDemo />

        <hr />
        <p>这是手写的redux</p>
        <MyTodoDemo />
      </div>
    );
  }
}

export default App;
