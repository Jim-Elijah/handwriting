export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      const fn = handlers[action.type]
      if (typeof fn !== 'function') {
        throw new Error(`Expected reducer to be a function. Instead received '${typeof (fn)}'`)
      }
      return handlers[action.type](state, action);
    }
    return state;
  };
};

export const getFormatDateTime = (param) => {
  const date = param || new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const mills = date.getMilliseconds()
  return [year, '/', month, '/', day, ' ', hour, ':', minute, ':', second, '.', mills].join('');
}

// 读取本地存储的数据 
export const getFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// 保存数据到本地存储
export const save2Storage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const mockFetch = (delay = 1000) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const flag = Math.random();
    return flag > 0.5 ? resolve('fetching success') : reject('fetching error')
  }, delay);
})
