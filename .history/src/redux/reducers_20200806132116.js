import { GET_ALL_POSTS, GET_ALL_TAGS, GET_POST, GET_TAG, GET_ALL_COPYWRITERS, GET_COPYWRITER } from "./actions"

export const postReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts
    }
  }

  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post
    }
  }

}

export const tagReducer = (state = {}, action) => {
  if (action.type === GET_ALL_TAGS) {
    return {
      ...state,
      tags: action.tags
    }
  }

  if (action.type === GET_TAG) {
    return {
      ...state,
      tag: action.tag
    }
  }
}

export const copywriterReducer = (state = {}, action) => {
  if (action.type === GET_ALL_COPYWRITERS) {
    return {
      ...state,
      copywriters: action.copywriters
    }
  }

  if (action.type === GET_COPYWRITER) {
    return {
      ...state,
      copywriter: action.copywriter
    }
  }
}




