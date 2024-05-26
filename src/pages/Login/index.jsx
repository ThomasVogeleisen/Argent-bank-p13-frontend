import './style.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getToken, getDataUser } from '../../actions/user.action'

export function Login() {
  const navigate = useNavigate()
  const form = useRef()
  const dispatch = useDispatch()
  const rememberMe = JSON.parse(localStorage.getItem('rememberMe'))
  const [isCheck, setIsCheck] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (rememberMe) {
      setIsCheck(true)
    }
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    const postData = {
      email: form.current[0].value,
      password: form.current[1].value,
    }
    if (form.current[2].checked) {
      localStorage.setItem('rememberMe', JSON.stringify(postData))
    } else {
      localStorage.removeItem('rememberMe')
    }
    dispatch(getToken(postData))
      .then((token) => {
        dispatch(getDataUser(token)).then(() => {
          navigate('/profile')
        })
      })
      .catch((error) => {
        console.log(error.response.status)
        setError(true)
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
            <input
              type="text"
              id="username"
              defaultValue={rememberMe ? rememberMe.email : ''}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              defaultValue={rememberMe ? rememberMe.password : ''}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={isCheck}
              onChange={(e) => setIsCheck(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {error && (
            <p className="error-message">
              Une erreur est survenue
              <br />
              Verifiez vos identifiants
            </p>
          )}
        </form>
      </section>
    </main>
  )
}
