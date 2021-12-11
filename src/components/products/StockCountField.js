import React from 'react'

const StockCountField = ({ stockCount, handleChange }) => {
  return (
    <div className="field">
      <label className="label">Order Quantity</label>
      <div className="control">
        <textarea
          className="input"
          placeholder="Order quantity"
          name="orderQuantity"
          value={stockCount}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default StockCountField
