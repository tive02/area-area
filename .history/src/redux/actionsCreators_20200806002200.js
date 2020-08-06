import Axios from "axios";
import { GET_ALL_POSTS } from "./actions";

const API_URL = process.env.REACT_APP_API_URL

export const getAllPost = () => dispatch => {
  Axios.get(`${API_URL}/posts`)
  then.(resp => {
    type: GET_ALL_POSTS,
      posts: resp.data
  })
}
