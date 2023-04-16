export const storageKey = 'how-react-redux-todos'
export const initialState = {
  todos: [],
  visibilityFilter: 'All',
  fetchData: {
    isFetching: false,
    data: null,
    err: null,
  },
}
export const description = `whyReactRedux该文件夹演示手写React-Redux, 但Redux还是用官方的, 下一节演示用自己写的Redux和React-Redux在项目中使用`
