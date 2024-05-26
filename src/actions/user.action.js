import axios from 'axios'

export const GET_TOKEN = 'GET_TOKEN'
export const GET_DATA_USER = 'GET_DATA_USER'
export const EDIT_NAME = 'EDIT_NAME'
export const USER_LOGOUT = 'USER_LOGOUT'

export const getToken = (postData) => {
  return (dispatch) => {
    return axios
      .post('http://localhost:3001/api/v1/user/login', postData)
      .then((response) => {
        dispatch({
          type: GET_TOKEN,
          payload: response.data.body.token,
        })
        return response.data.body.token // Retourner le token pour chaîner les appels
      })
  }
}

export const getDataUser = (token) => {
  return (dispatch) => {
    return axios
      .post('http://localhost:3001/api/v1/user/profile', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({
          type: GET_DATA_USER,
          payload: response.data,
        })
        return response.data // Retourner le token pour chaîner les appels
      })
  }
}

export const editName = (postData, token) => {
  return (dispatch) => {
    return axios
      .put('http://localhost:3001/api/v1/user/profile', postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({
          type: EDIT_NAME,
          payload: response.data,
        })
      })
  }
}

export const userLogout = () => {
  return {
    type: 'USER_LOGOUT',
  }
}
