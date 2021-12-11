import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({
  _id,
  name,
  brand,
  imageUrl,
  price,
  stockCount,
  itemDescription,
  category,
}) => {
  const onItemSelect = async (item) => {
    const items = window.localStorage.getItem('basket')
    if (items) {
      const itemsFromJson = await JSON.parse(items)
      itemsFromJson.push(item)
      console.log('items', itemsFromJson)
      return window.localStorage.setItem(
        'basket',
        JSON.stringify(itemsFromJson)
      )
    }
    return window.localStorage.setItem('basket', JSON.stringify([item]))
  }

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile is-vcentered">
      <Link to={`/product/${_id}`}>
        <div className="card">
          <div className="card-header has-background-light">
            {/* <h4 className="card-header-title has-text-centered">{name}</h4> */}
            <h4 className="card-header-title">
              {name.length >= 24 ? name.slice(0, 24) + '...' : name}
            </h4>
          </div>
        </div>
        <div className="card-image">
          <figure className="image is-1by1">
            <img
              src={imageUrl}
              alt={name}
              loading="lazy"
              width="300"
              height="300"
            />
          </figure>
        </div>
        <div className="notification link-focus-border has-background-light">
          <h5>£{price}</h5>

          <h5>{stockCount} Left In Stock</h5>
        </div>
      </Link>
      <button
        type="button"
        className="button is-fullwidth mt-4 is-warning"
        onClick={() => {
          onItemSelect({
            _id,
            name,
            brand,
            imageUrl,
            price,
            stockCount,
            itemDescription,
            category,
          })
        }}
      >
        Buy
      </button>
    </div>
  )
}

export default ProductCard
