import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { registerUser } from '../api/Api.js'

const Register = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      role: 'basic',
    },
  })
  // this state tells you whether the password and confirmedPassword matched
  const [passwordMatch, setPasswordMatch] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (state.formData.password !== state.formData.passwordConfirmation) {
        // temporarily
        return setPasswordMatch(true)
      }

      setPasswordMatch(false)
      // this is the required format for the API end points
      const res = await registerUser({
        username: state.formData.username,
        email: state.formData.email,
        password: state.formData.password,
        role: state.formData.role,
      })

      // 201 -> data created
      if (res.status === 201) {
        history.push('/login')
      }
    } catch (err) {
      console.log('Error registering the user: ', err)
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
        <div className="container">
          <div className="columns">
            <form
              onSubmit={handleSubmit}
              className="column is-half is-offset-one-quarter box"
            >
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username"
                    value={state.formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
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

              <div className="field">
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

              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Confirm Password"
                    name="passwordConfirmation"
                    type="password"
                    value={state.formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Purpose</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select onChange={handleChange} name="role">
                      <option className="basic" value="basic">
                        Start shopping
                      </option>
                      <option className="admin" value="admin">
                        Start a business
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <input
                  className="button is-fullwidth is-danger"
                  type="submit"
                  value="Register"
                />
              </div>
              {passwordMatch ? (
                <p className="dangerous">Password is invalid! Try again.</p>
              ) : null}
              <div className="mt-4">
                <p>
                  Have an account? Login <Link to="/login">here.</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
