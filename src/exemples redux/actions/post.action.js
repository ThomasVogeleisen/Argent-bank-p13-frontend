import axios from 'axios'

export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_POST_LIKE = 'ADD_POST_LIKE'

export const getPost = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/posts').then((response) => {
      dispatch({
        type: GET_POST,
        payload: response.data,
      })
    })
  }
}

export const addPost = (data) => {
  return (dispatch) => {
    return axios.post('http://localhost:3000/posts', data).then((response) => {
      dispatch({
        type: ADD_POST,
        payload: data,
      })
    })
  }
}

export const editPost = (data) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/posts/${data.id}`, data)
      .then((response) => {
        dispatch({
          type: EDIT_POST,
          payload: data,
        })
      })
  }
}

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:3000/posts/${postId}`)
      .then((response) => {
        dispatch({
          type: DELETE_POST,
          payload: postId,
        })
      })
  }
}

export const addPostLike = (data) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/posts/${data.id}`, data)
      .then((response) => {
        dispatch({
          type: ADD_POST_LIKE,
          payload: data,
        })
      })
  }
}
