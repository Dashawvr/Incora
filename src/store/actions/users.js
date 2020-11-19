import {USERS_REQUEST, USERS_SUCCESS} from "../constants/users";
import {getUsers} from "../../api/services/users";

export function fetchUsers() {
  return async (dispatch) => {
    dispatch({ type: USERS_REQUEST })

    const resp = await getUsers()
    dispatch({ type: USERS_SUCCESS, payload: resp })
  }
}