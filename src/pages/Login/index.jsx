import './style.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { getToken, getDataUser } from '../../actions/user.action'

export function Login() {
  const navigate = useNavigate()
  const form = useRef()
  const dispatch = useDispatch()

  const handleForm = (e) => {
    e.preventDefault()

    const postData = {
      email: form.current[0].value,
      password: form.current[1].value,
    }
    dispatch(getToken(postData)).then((token) => {
      dispatch(getDataUser(token)).then(() => {
        navigate('/profile')
      })
    })
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e) => handleForm(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {/* <Link className="link-sign-in-button" to={'/profile'}>
          </Link> */}
        </form>
      </section>
    </main>
  )
}
