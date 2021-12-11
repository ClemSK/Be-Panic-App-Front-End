import React from 'react'

const BasketCard = ({
  _id,
  name,
  brand,
  imageUrl,
  price,
  stockCount,
  itemDescription,
  category,
}) => {
  return (
    <section className="has-background-black">
      <div className="has-background-black">
        <div className="columns mx-3">
          <h4 className="column is-one-fith has-text-grey-light">{name}</h4>
          <h5 className="column is-one-fith has-text-grey-light">{brand}</h5>
          <h5 className="column is-one-fith has-text-grey-light">£{price}</h5>
          <h5 className="column is-one-fith has-text-grey-light">
            {stockCount} Left
          </h5>
        </div>
      </div>
    </section>
  )
}

export default BasketCard
