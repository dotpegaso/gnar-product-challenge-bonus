import { LOCATION_CHANGE } from 'react-router-redux'

const SEARCH_STRING = 'SEARCH_STRING'

const initialState = {
  searchString: []
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_STRING:
      return { ...state, ...action.data }
    case LOCATION_CHANGE: // reset searchString value in any route-change 
      return { ...state, searchString: []}
    default:
      return state
  }
}
