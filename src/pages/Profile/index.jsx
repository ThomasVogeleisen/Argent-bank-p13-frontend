import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { editName } from '../../actions/user.action'
import { isEmpty } from '../../utils/isEmpty'
import { useNavigate } from 'react-router-dom'

export function Profile() {
  const user = useSelector((state) => state.userReducer)
  const navigate = useNavigate()
  const form = useRef(null)
  const [editToggle, setEditToggle] = useState(false)
  const dispatch = useDispatch()
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (!isEmpty(user.user) && user.token) {
      setIsConnected(true)
    } else {
      setIsConnected(false)
      navigate('/login')
    }
  }, [])

  const handleEdit = (e) => {
    e.preventDefault()
    const postData = {
      firstName: e.target[0].value,
      lastName: e.target[2].value,
    }
    dispatch(editName(postData, user.token))
    setEditToggle(false)
  }
  return (
    <>
      {isConnected && (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {editToggle ? (
                <form
                  className="form-bloc"
                  ref={form}
                  onSubmit={(e) => handleEdit(e)}
                >
                  <div className="form-section-left">
                    <input
                      className="input-edit-name"
                      defaultValue={user.user.body.firstName}
                      autoFocus
                      type="text"
                    />
                    <button
                      className="edit-button-validate edit-button"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                  <div className="form-section-right">
                    <input
                      className="input-edit-name"
                      defaultValue={user.user.body.lastName}
                      type="text"
                    />
                    <button
                      className="edit-button-validate edit-button"
                      type="button"
                      onClick={() => setEditToggle(!editToggle)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div>
                    {user.user.body.firstName + ' ' + user.user.body.lastName}
                  </div>
                  <button
                    className="edit-button"
                    onClick={() => setEditToggle(!editToggle)}
                  >
                    Edit Name
                  </button>
                </>
              )}
            </h1>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      )}
    </>
  )
}
