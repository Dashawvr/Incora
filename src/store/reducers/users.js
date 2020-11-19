import { USERS_REQUEST, USERS_SUCCESS } from '../constants/users'

const initState = {
  list: [],
  loading: false
}

export default function users(state = initState, action) {
  switch (action.type) {
    case USERS_REQUEST:
      return { ...state, loading: true }
    case USERS_SUCCESS:
      return { ...state, loading: false, list: action.payload }
    default:
      return state
  }
}