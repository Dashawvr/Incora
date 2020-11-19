import {POST_CREATE, POSTS_REQUEST, POSTS_SUCCESS, POST_DELETE, POST_UPDATE, POST_REQUEST} from "../constants/posts";
import {createPost, deletePost, getPost, getPosts, updatePost} from "../../api/services/posts";

export function fetchPosts(id) {
  return async (dispatch) => {
    dispatch({ type: POSTS_REQUEST })

    const resp = await getPosts(id)
    dispatch({ type: POSTS_SUCCESS, payload: resp })
  }
}

export function fetchPost(id) {
  return async (dispatch) => {
    dispatch({ type: POSTS_REQUEST })

    const resp = await getPost(id)
    dispatch({ type: POST_REQUEST, payload: resp })
  }
}

export function createPosts(id, post) {
  return async (dispatch) => {
    dispatch({ type: POSTS_REQUEST })

    const params = {
      data:{
        ...post
      }
    }
    const resp = await createPost(params)
    dispatch({ type: POST_CREATE, payload: resp })

  }
}

export function updatePosts(id, post) {
  return async (dispatch) => {
    dispatch({ type: POSTS_REQUEST })

    const params = {
      data:{
        ...post
      }
    }


    const resp = await updatePost(id, params)
    dispatch({ type: POST_UPDATE, payload: resp })
  }
}

export function deletePosts(id) {
  return async (dispatch) => {
    dispatch({ type: POSTS_REQUEST })

    const resp = await deletePost(id)
    dispatch({ type: POST_DELETE, payload: resp })
  }
}