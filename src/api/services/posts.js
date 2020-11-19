import {apiRequest} from "../apiRequest/apiRequest";

export const getPosts = (id) => {
  return apiRequest({
    url: `/posts?userId=${id}`,
    type: 'GET'
  })
}

export const getPost = (id) => {
  return apiRequest({
    url: `/posts/${id}`,
    type: 'GET'
  })
}

export const createPost = (params) => {
  return apiRequest({
    url: `/posts`,
    method: 'POST',
    ...params
  })
}

export const updatePost = (id, params) => {
  return apiRequest({
    url: `/posts/${id}`,
    method: 'PUT',
    ...params
  })
}

export const deletePost = (id) => {
  return apiRequest({
    url: `/posts/${id}`,
    method: 'DELETE',
  })
}