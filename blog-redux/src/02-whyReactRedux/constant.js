export const storageKey = 'why-react-redux-todos'
export const initialState = {
  todos: [],
  visibilityFilter: 'All',
  fetchData: {
    isFetching: false,
    data: null,
    err: null,
  },
}
export const description = `whyReactRedux该文件夹演示同时使用Redux和React-Redux时的状态管理, 实际项目中的用法。从下节开始进入手写源码阶段，依次手写Redux源码、React-Redux源码。`