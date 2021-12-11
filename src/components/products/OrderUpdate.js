import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleProduct, editProduct } from '../api/Api'
import StockCountField from './stockCountField'
import Loading from '../components/common/Loading'

const OrderUpdate = () => {
  const { id } = useParams()
  const history = useHistory()
  const [state, setState] = useState({
    formData: null,
  })

  const getSingleProduct = async () => {
    try {
      const res = await getSingleProduct(id)
      setState({ formData: res.data })
      console.log(res.data)
    } catch (err) {
      console.error(
        'this is an error getting a single product for orderUpdate',
        err
      )
    }
  }
  React.useEffect(() => {
    getSingleProduct()
  }, [])

  console.log('state is: ', state)

  if (state.formData === null) {
    return <Loading />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(state.formData)
      const res = await editProduct(id, state.formData)
      console.log(res.data._id)
      history.push(`/product/${res.data._id}`)
    } catch (err) {
      console.error('Error updating product', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    }

    setState({ formData })
  }

  return (
    <div className="columns">
      <h1>Order quantity is</h1>
      <form
        onSubmit={handleSubmit}
        className="column is-half is-offset-one-quarter box"
      >
        <StockCountField
          handleChange={handleChange}
          name={state.formData.stockCount}
        />
        <div className="field">
          <input
            className="button is-fullwidth is-success"
            type="submit"
            value={`Edit ${state.formData.stockCount || 'items in stock'}`}
          />
        </div>
      </form>
    </div>
  )
}

export default OrderUpdate
