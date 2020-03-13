import mock from './_mock'

const UPDATE_CAT_LIST = 'UPDATE_CAT_LIST'

const initialState = {
  cats: mock.cats
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_CAT_LIST:
      return { ...state, ...action.data }
    default:
      return state
  }
}
