import axios from 'axios'

export const GET_TOKEN = 'GET_TOKEN'

export const getToken = () => {
  const dataUser = {
    email: 'tony@stark.com',
    password: 'password123',
  }

  //transformer dataUser en json
  const user = JSON.stringify(dataUser)

  return (dispatch) => {
    return axios
      .post('http://localhost:3001/api/v1/user/login', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        dispatch({
          type: GET_TOKEN,
          payload: response.data,
        })
        console.log(response.data)
      })
  }
}
