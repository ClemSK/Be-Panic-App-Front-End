import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

import { getSingleProduct } from '../../api/Api.js'
import Loading from './Loading.js'
import { createReview, deleteReview } from '../../api/ReviewAPI.js'
import { getPayload } from '../../api/Auth.js'

const ShowProduct = () => {
  const { id } = useParams()
  // set product to null to then change state when selecting a product
  const [state, setState] = React.useState({ product: null })
  const [reviewText, setReview] = React.useState({
    review: {
      title: '',
      text: '',
      rating: 0,
    },
  })
  const [modal, setModal] = React.useState('')
  const [overall, setOverAll] = React.useState(null)

  const getSingleProductFromApi = async () => {
    try {
      const res = await getSingleProduct(id)
      setState({ product: res.data })
    } catch (err) {
      console.error(`An error occurred fetching the product ${id}`, err)
    }
  }

  const getOverallRating = async () => {
    try {
      if (!state.product.review) {
        setOverAll(0)
      } else {
        let sum = 0
        state.product.review.map((review) => {
          sum += review.rating
        })
        setOverAll(sum / state.product.review.length)
      }
    } catch (err) {
      console.log('this is the overall rating error', err)
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'rating') {
      setReview({
        review: {
          ...reviewText.review,
          [e.target.name]: parseFloat(e.target.value),
        },
      })
    } else {
      setReview({
        review: {
          ...reviewText.review,
          [e.target.name]: e.target.value,
        },
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createReview(id, reviewText.review)

    getSingleProductFromApi()
    await getOverallRating()

    setReview({
      review: {
        title: '',
        text: '',
        rating: 0,
      },
    })
    setModal('')
  }

  const handleModal = () => {
    if (modal === '') {
      setModal('is-active')
    } else {
      setModal('')
    }
  }

  const handleDelete = async (e) => {
    await deleteReview(id, e.target.name)
    getSingleProductFromApi()
    await getOverallRating()
  }

  const onItemSelect = async (item) => {
    const items = window.localStorage.getItem('basket')
    if (items) {
      const itemsFromJson = await JSON.parse(items)
      itemsFromJson.push(item)

      return window.localStorage.setItem(
        'basket',
        JSON.stringify(itemsFromJson)
      )
    }
    return window.localStorage.setItem('basket', JSON.stringify([item]))
  }

  React.useEffect(() => {
    getSingleProductFromApi()
    if (state) {
      getOverallRating()
    }
  }, [])

  return (
    <>
      {state.product ? (
        <>
          <section className="hero is-fullheight has-background-danger-light">
            <div className="container">
              <h2 className="title has-text-centered">{state.product.name}</h2>
              <hr />
              <div className="columns">
                <div className="column is-half">
                  <figure className="image">
                    <img src={state.product.image.url} alt="product" />
                  </figure>
                </div>

                <div className="column is-half mx-3">
                  <div>
                    <h4 className="title is-4"></h4>
                    <hr />
                    <p>{state.product.name}</p>
                    <hr />
                    <p>By {state.product.brand}</p>
                    <hr />
                    <p>{state.product.productInfo}</p>
                    <hr />
                    <p>{state.product.itemDescription}</p>
                    <hr />
                    <button
                      type="button"
                      className="button is-fullwidth mt-4 is-warning"
                      onClick={() => {
                        let item = {
                          brand: state.product.brand,
                          imageUrl: state.product.image.url,
                          name: state.product.name,
                          price: state.product.price,
                          stockCount: state.product.stockCount,
                          _id: state.product._id,
                        }
                        onItemSelect(item)
                      }}
                    >
                      Buy
                    </button>
                    <hr />
                    <button className="button" onClick={handleModal}>
                      Write Review
                    </button>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <h1 className="title">Review</h1>
            <div>
              <h2 className="label">Overall Rating:</h2>
              {overall ? <p>{overall}</p> : null}
            </div>
            {state.product.review.map((review) => {
              return (
                <div key={review._id}>
                  <hr />
                  <label className="label">Title:</label>
                  <p>{review.title}</p>

                  <label className="label">Review:</label>
                  <p>{review.text}</p>

                  <label className="label">Rating:</label>
                  <p>{review.rating}</p>
                  <br />
                  {review.createdBy === getPayload().userId ? (
                    <button
                      className="button is-danger"
                      onClick={handleDelete}
                      name={review._id}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              )
            })}
          </section>
        </>
      ) : (
        <Loading />
      )}
      <div className={`modal ${modal}`}>
        <div className="modal-background" onClick={handleModal}></div>
        <div className="modal-content">
          <div className="modal-card-head">
            <strong>Review</strong>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-card-body">
              <label className="label">Title :</label>
              <input
                className="input"
                type="text"
                onChange={handleChange}
                value={reviewText.review.title}
                name="title"
              />
              <hr />
              <label className="label">Review :</label>
              <textarea
                type="text"
                className="textarea"
                onChange={handleChange}
                value={reviewText.review.text}
                name="text"
              />
              <hr />
              <label className="label">Rating :</label>
              <input
                className="input"
                type="number"
                onChange={handleChange}
                value={reviewText.review.rating}
                name="rating"
              />
            </div>
            <div className="modal-card-foot">
              <button className="button">Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ShowProduct
