import {apiRequest} from "../apiRequest/apiRequest";

export const getComments = (id) => {
  return apiRequest({
    url: `/comments?postId=${id}`,
    type: 'GET'
  })
}
