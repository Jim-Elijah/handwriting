export const storageKey = 'final-edition-todos'
export const initialState = {
  todos: [],
  visibilityFilter: 'All',
  fetchData: {
    isFetching: false,
    data: null,
    err: null,
  },
}
export const description = `whyReactRedux该文件夹演示同时使用Redux和React-Redux时的状态管理`
