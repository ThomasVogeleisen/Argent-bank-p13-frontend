import { Link, useLocation } from 'react-router-dom'
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from '../../utils/isEmpty'
import { userLogout } from '../../actions/user.action'

export function NavBar() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isLoginPage = location.pathname === '/login'
  const isProfilePage = location.pathname === '/profile'
  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const logoutUser = () => {
    dispatch(userLogout())
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={'/'}>
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {(isHomePage || isLoginPage) && (
          <Link className="main-nav-item" to={'/login'}>
            <i className="fa fa-user-circle fa-margin"></i>
            Sign In
          </Link>
        )}
        {isProfilePage && (
          <Link className="main-nav-item" to={'/profile'}>
            <i className="fa fa-user-circle fa-margin"></i>
            {!isEmpty(user) && user.user.body.firstName}
          </Link>
        )}
        {isProfilePage && (
          <Link onClick={() => logoutUser()} className="main-nav-item" to={'/'}>
            <i className="fa fa-sign-out fa-margin"></i>
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  )
}
