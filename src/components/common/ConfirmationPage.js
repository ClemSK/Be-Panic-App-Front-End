// page with confirmation messgae
// gif
// back to products page
import React from 'react'
import { useHistory } from 'react-router'

const ConfirmationPage = () => {
  const history = useHistory()

  const handleBackToPanicBuying = (e) => {
    e.preventDefault()
    history.push('/products')
  }

  return (
    <section className="hero is-fullheight has-background-danger-light level">
      <div className="columns has-text-centered level-item">
        <div className="column is-half mx-6">
          <div className="content is-large">
            <h2 className="title mt-6">Confirmation, order placed.</h2>
            <p className="subtitle is-4 mt-2">You have beaten the crowds,</p>
            <p className="subtitle is-4">
              brazenly pushed your order through like a real Karen
            </p>
            <p className="subtitle is-4">and will imminently get your order,</p>
            <p className="subtitle is-4">you monster 🙃</p>
          </div>
          <div className="mt-6">
            <button
              className="button is-large is-warning is-rounded"
              onClick={handleBackToPanicBuying}
            >
              Back to panic buying
            </button>
          </div>
        </div>
        <div className="column is-half mt-6">
          <figure>
            <img src="https://c.tenor.com/JnykKYGfjBUAAAAC/waiting-lady.gif"></img>
          </figure>
        </div>
      </div>
      <div className="content has-text-centered">
        <footer className="footer has-background-danger-light">
          <img
            src="https://i.imgur.com/kD5lVAS.jpg"
            alt="App Download Link"
          ></img>
        </footer>
      </div>
    </section>
  )
}

export default ConfirmationPage
