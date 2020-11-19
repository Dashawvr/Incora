import {COMMENT_REQUEST, COMMENT_SUCCESS} from "../constants/comments";
import {getComments} from "../../api/services/comments";

export function fetchComments(id) {
  return async (dispatch) => {
    dispatch({ type: COMMENT_REQUEST })

    const resp = await getComments(id)
    dispatch({ type: COMMENT_SUCCESS, payload: resp })
  }
}