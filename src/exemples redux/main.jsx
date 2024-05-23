import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { getUser } from './actions/user.action.js'
import { getPost } from './actions/post.action.js'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

store.dispatch(getUser())
store.dispatch(getPost())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
