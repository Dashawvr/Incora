import {POSTS_REQUEST,POST_UPDATE, POST_DELETE, POST_REQUEST, POST_CREATE, POSTS_SUCCESS} from "../constants/posts";

const initState = {
  list: [],
  single:{},
  loading: false
}

export default function posts(state = initState, action) {
  switch (action.type) {
    case POSTS_REQUEST:
      return { ...state, loading: true }
    case POSTS_SUCCESS:
      return { ...state, loading: false, list: action.payload }
    case POST_REQUEST:
      return { ...state, loading: false, single: action.payload }
    case POST_UPDATE:
      return { ...state, single: action.payload}
    case POST_DELETE:
      return { ...state, single: action.payload}
    case POST_CREATE:
      return { ...state, loading:false, list: [...state.list, action.payload] }
    default:
      return state
  }
}