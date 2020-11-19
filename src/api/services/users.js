import {apiRequest} from "../apiRequest/apiRequest";

export const getUsers = () => {
  return apiRequest({
    url: '/users',
    type: 'GET'
  })
}
