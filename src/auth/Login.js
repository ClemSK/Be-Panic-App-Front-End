import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

import { loginUser } from '../api/Api'
import { setToken, removeToken } from '../api/Auth'

const Login = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      email: '',
      password: '',
    },
  })
  const [invalid, setInvalid] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(state.formData)
      if (res.status === 200) {
        setToken(res.data.token)

        history.push('/products')
        window.location.reload()
      }
    } catch (err) {
      setInvalid(true)
      console.error('error in logging in the user', err)
    }
  }

  const handleChange = (e) => {
    const newformData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    }
    setState({ formData: newformData })
  }

  return (
    <section className="hero is-fullheight has-background-danger-light">
      <div className="section">
        <div>
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter"
          >
            <div className="mt-4">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={state.formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={state.formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <input
                type="submit"
                value="Login"
                className="button is-fullwidth is-danger"
              />
            </div>
            {invalid ? <p>Invalid password or email. Try again.</p> : null}
            <div className="mt-4">
              <p>
                Don't have an account? Register
                <Link to="/register"> here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
