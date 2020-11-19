import {COMMENT_SUCCESS, COMMENT_REQUEST} from "../constants/comments";

const initState = {
  list: [],
  loading: false
}

export default function posts(state = initState, action) {
  switch (action.type) {
    case COMMENT_REQUEST:
      return { ...state, loading: true }
    case COMMENT_SUCCESS:
      return { ...state, loading: false, list: action.payload }
    default:
      return state
  }
}