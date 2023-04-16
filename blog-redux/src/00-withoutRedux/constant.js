export const storageKey = 'without-redux-todos'
export const initialState = {
  todos: [],
  visibilityFilter: 'All',
  fetchData: {
    isFetching: false,
    data: null,
    err: null,
  },
}
export const description = `withoutRedux该文件夹演示没有Redux时的状态管理。非父子组件通信，使用状态提升`