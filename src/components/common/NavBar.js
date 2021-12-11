import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { removeToken, getPayload } from '../../api/Auth.js'
import logo from '../images/logo.jpg'

const NavBar = () => {
  const location = useLocation()
  const [roleState, setRoleState] = React.useState()

  const handleClick = () => {
    removeToken()
  }

  const fetchingRoleType = async () => {
    try {
      const roleType = await getPayload()

      setRoleState(roleType.role)
    } catch (err) {
      console.log('Fetching Role Error:', err)
    }
  }
  React.useEffect(() => {
    fetchingRoleType()
  }, [])

  return (
    <div className="navbar is-dark">
      <nav className="navbar-menu">
        <div className="container">
          <div className="navbar-start is-dark">
            <div className="navbar-brand">
              <Link to="/">
                <img src={logo} alt={logo} className="image is-64x64" />
              </Link>
            </div>
            <Link to="/products" className="navbar-item">
              Shop Now
            </Link>

            <div className="navbar-end">
              <Link to="/basket" className="navbar-item">
                🧺
              </Link>

              {roleState === 'super admin' && window.localStorage.token ? (
                <Link to="/superAdmin" className="navbar-item">
                  Users
                </Link>
              ) : null}
              {roleState === 'admin' && window.localStorage.token ? (
                <Link to="/admin" className="navbar-item">
                  Admin
                </Link>
              ) : null}
              {window.localStorage.token ? (
                <Link
                  to={{
                    pathname: '/login',
                  }}
                  className="navbar-item"
                  onClick={handleClick}
                >
                  Log Out
                </Link>
              ) : (
                <>
                  <Link to="/register" className="navbar-item">
                    Register
                  </Link>
                  <Link to={{ pathname: '/login' }} className="navbar-item">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
