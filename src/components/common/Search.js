import React, { useState } from 'react'
import { searchProducts } from '../../api/Api'
import ProductCard from '../products/ProductCard'

const Search = () => {
  const [products, setProducts] = useState()
  const [q, setQ] = useState('')

  const search = async function (event) {
    event.preventDefault()
    const item = await searchProducts(q)

    setProducts(item)
  }

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="e.g Explosives"
          onChange={(e) => setQ(e.target.value)}
          value={q}
        />
        <input type="submit" value="Search" />
      </form>
      <div>
        {products ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              {...product}
              imageUrl={product.image.url}
            />
          ))
        ) : (
          <p>Make a search</p>
        )}
      </div>
    </>
  )
}

export default Search
