/* import Axios from "axios";
import {
  GET_ALL_POSTS,
  GET_ALL_TAGS,
  GET_ALL_COPYWRITERS,
  GET_TAG,
  GET_POST,
  GET_COPYWRITER
}
  from "./actions";

const API_URL = process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch => {
  Axios.get(`${API_URL}/posts`)
    .then(resp => {
      return dispatch({
        type: GET_ALL_POSTS,
        posts: resp.data
      })
    }
    )
}

export const getAllTags = () => dispatch => {
  Axios.get(`${API_URL}/tags`)
    .then(resp => {
      return dispatch({
        type: GET_ALL_TAGS,
        tags: resp.data
      })
    }
    )
}

export const getAllCopiwriters = () => dispatch => {
  Axios.get(`${API_URL}/copywriters`)
    .then(resp => {
      return dispatch({
        type: GET_ALL_COPYWRITERS,
        copywriters: resp.data
      })
    }
    )
}

export const getPost = id => dispatch => {
  Axios.get(`${API_URL}/posts/${id}`)
    .then(resp => {
      return dispatch({
        type: GET_POST,
        post: resp.data
      })
    }
    )
}

export const getTag = id => dispatch => {
  Axios.get(`${API_URL}/tags/${id}`)
    .then(resp => {
      return dispatch({
        type: GET_TAG,
        tag: resp.data
      })
    }
    )
}

export const getcopiwriters = id => dispatch => {
  Axios.get(`${API_URL}/copywriters/${id}`)
    .then(resp => {
      return dispatch({
        type: GET_COPYWRITER,
        copywriter: resp.data
      })
    }
    )
}
 */
