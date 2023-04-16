export const storageKey = 'why-redux-todos'
export const initialState = {
  todos: [],
  visibilityFilter: 'All',
  fetchData: {
    isFetching: false,
    data: null,
    err: null,
  },
}
export const description = `whyRedux该文件夹演示使用Redux, 但没有引入React-Redux。
注意：需要手动subscribe，当state改变时执行回调更新视图，较繁琐。因为Redux是独立于React、Vue、Angular等框架的状态管理库, store中state改变视图不会重新渲染，而React、Vue修改了state或data视图会重新渲染。
`
