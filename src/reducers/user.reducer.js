import { GET_TOKEN } from '../actions/user.action'

const initialState = {}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TOKEN':
      return action.payload
    default:
      return state
  }
}
