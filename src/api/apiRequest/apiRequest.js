import Axios from 'axios'
import {URL} from '../../config/index'

export async function apiRequest(options) {

  try {
    const resp = await Axios({
      baseURL: URL,
      ...options,

    })

    return resp.data
  }
  catch (error) {
    console.log(error)
  }
}