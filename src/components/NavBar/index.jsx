import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import './style.css'

export function NavBar() {
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
        <Link className="main-nav-item" to={'/login'}>
          <i className="fa fa-user-circle fa-margin"></i>
          Sign In
        </Link>
        <Link className="main-nav-item" to={'/'}>
          <i className="fa fa-sign-out fa-margin"></i>
          Sign Out
        </Link>
        <Link className="main-nav-item" to={'/Profile'}>
          <i className="fa fa-user-circle fa-margin"></i>
          Tony
        </Link>
      </div>
    </nav>
  )
}
