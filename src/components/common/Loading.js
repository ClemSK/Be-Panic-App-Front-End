import React from 'react'

const Loading = () => {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1 has-text-centered has-text-black">
            <span role="img" aria-label="logo" className="logo-emoji">
              🔥
            </span>{' '}
            Hang on! Too many orders, something's on fire..
          </p>
          <p className="title is-1 has-text-centered has-text-black">
            <span role="img" aria-label="logo" className="logo-emoji">
              🔧🧯
            </span>{' '}
            ..Back soon!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Loading
