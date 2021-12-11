import React, { useState } from 'react'
import axios from 'axios'

const RemoveItemAtCheckout = () => {
  const [state, setState] = useState(null)
  state = {
    stockCount: null,
  }

  ReduceQty = (e) => {
    const { id } = this.props.item
    e.preventDefault()
    const action = e.target.value
    axios
      .put(`/products/${id}?act=${action}`)
      .then((res) => {
        this.props.item.stockCount -= 1
        this.setState({ stockCount: this.props.item.stockCount })
        alert('reduce')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div>
        <img src={image} alt="shopping basket" />
      </div>
      <div>
        <p>
          Category: {category}
          <br />
          Quantity: {stockCount}
        </p>
        <button
          onClick={this.ReduceQty}
          className="button is-warning"
          value="reduce"
        >
          {' '}
          Reduce{' '}
        </button>
      </div>
    </div>
  )
}

export default RemoveItemAtCheckout
