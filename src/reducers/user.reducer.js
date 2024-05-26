import { GET_TOKEN, GET_DATA_USER } from '../actions/user.action'

const initialState = {}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    case GET_DATA_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
