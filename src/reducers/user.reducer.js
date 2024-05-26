import {
  GET_TOKEN,
  GET_DATA_USER,
  EDIT_NAME,
  USER_LOGOUT,
} from '../actions/user.action'

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
    case EDIT_NAME:
      return {
        ...state,
        user: action.payload,
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      }
    default:
      return state
  }
}
