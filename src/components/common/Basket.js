import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { editProduct } from '../../api/Api.js'
import BasketCard from '../products/BasketCard.js'
// import ConfirmationPage from './ConfirmationPage.js'

const Basket = () => {
  const history = useHistory()
  const basket = window.localStorage.getItem('basket')
  const [state, setState] = useState(JSON.parse(basket))
  const [total, setTotal] = useState(0)

  const updatingProductsApi = async (id, formData) => {
    try {
      await editProduct(id, formData)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCheckOut = (e) => {
    e.preventDefault()
    if (!state) {
      return alert('Your basket is empty!')
    }

    if (!window.localStorage.token) {
      history.push('/login')
    } else {
      let productCount = {}
      state.forEach((product) => {
        if (productCount[product._id]) {
          productCount[product._id].stockCount--
        } else {
          productCount[product._id] = { stockCount: product.stockCount - 1 }
        }
      })

      Object.keys(productCount).forEach((product) => {
        updatingProductsApi(product, productCount[product])
      })

      history.push('/confirmation')
      window.localStorage.removeItem('basket')
    }
  }

  React.useEffect(() => {
    let sum = 0
    if (state) {
      for (let z = 0; z < state.length; z++) {
        sum += state[z].price
      }
    }

    setTotal(sum)
  }, [])

  return (
    <>
      <section className="hero is-fullheight has-background-black">
        <div>
          <h1 className="title mx-5 has-text-danger-dark">Basket</h1>
          <div className="columns">
            <div className="column">
              {state
                ? state.map((product) => {
                    return (
                      <BasketCard
                        key={`${product._id}_${Math.random() * state.length}`}
                        brand={product.brand}
                        price={product.price}
                        name={product.name}
                        stockCount={product.stockCount}
                        _id={product._id}
                      />
                    )
                  })
                : null}
            </div>
          </div>
          <hr />
          <div className="column is-offset-9">
            <p className="has-text-danger-dark">
              Total:{' '}
              {total ? (
                <strong className="has-text-danger-dark">£{total}</strong>
              ) : null}
            </p>
          </div>
          <hr />
          <div className="column is-offset-9">
            <button
              className="button is-large is-warning is-rounded is-outlined"
              onClick={handleCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Basket
