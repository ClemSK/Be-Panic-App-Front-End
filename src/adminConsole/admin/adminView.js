import React from 'react'
import { Link } from 'react-router-dom'

import { getAdminProduct } from '../../api/AdminAPI.js'
import {
  deleteProduct,
  editProduct,
  getSingleProduct,
  createProducts,
} from '../../api/Api.js'

import AdminModal from './adminModalPreview.js'

const AdminView = () => {
  const [productsState, setProductState] = React.useState()

  const [popUpModal, setPopUp] = React.useState(null)
  const [singleProduct, setSingleProduct] = React.useState()

  const [NewProductPopUpModal, setNewProductPopUp] = React.useState(null)
  const [newProduct, setNewProduct] = React.useState({
    image: {
      height: 0,
      url: '',
      width: 0,
    },
    name: '',
    category: '',
    price: 0,
    brand: '',
    stockCount: 0,
    productInfo: '',
    itemDescription: '',
    review: [],
  })

  /* Fetching API call */
  // fetching the seller products
  const fetchingProduct = async () => {
    try {
      const products = await getAdminProduct()

      setProductState(products.data)
    } catch (err) {
      console.log(err)
    }
  }

  // fetching each product
  const fetchingSingleProduct = async (id) => {
    try {
      const product = await getSingleProduct(id)

      setSingleProduct(product.data)
    } catch (err) {
      console.log(err)
    }
  }

  // updating new product
  const updatingNewProduct = async (newProduct) => {
    try {
      await createProducts(newProduct)

      console.log('ok good')
    } catch (err) {
      console.log(err)
    }
  }

  /* Handling the product preview and update modal */
  // handle the background clikc exit function
  const handleClick = async (e) => {
    if (popUpModal === null) {
      await fetchingSingleProduct(e.target.name)
      setPopUp('is-active')
    } else {
      setPopUp(null)
    }
  }

  // handle the change of the input
  const handleChange = (e) => {
    if (
      e.target.name === 'url' ||
      e.target.name === 'width' ||
      e.target.name === 'height'
    ) {
      setSingleProduct({
        ...singleProduct,
        image: {
          ...singleProduct.image,
          [e.target.name]: e.target.value,
        },
      })
    } else {
      setSingleProduct({ ...singleProduct, [e.target.name]: e.target.value })
    }
  }

  // handle the submit form button
  const handleSubmit = async (e) => {
    e.preventDefault()

    await editProduct(singleProduct._id, singleProduct)
    await fetchingProduct()
    setPopUp(null)
  }

  // handle remove
  const handleRemove = (e) => {
    deleteProduct(e.target.name)
    window.location.reload()
  }

  /* Handling the adding of new product */
  // handle add product
  const handleAdd = (e) => {
    setNewProductPopUp('is-active')
  }

  const handleSubmitAdd = async (e) => {
    e.preventDefault()

    await updatingNewProduct(newProduct)
    await fetchingProduct()
    setNewProductPopUp(null)
  }

  const handleClickAdd = async (e) => {
    if (NewProductPopUpModal === null) {
      setNewProductPopUp('is-active')
    } else {
      setNewProductPopUp(null)
    }
  }

  const handleChangeAdd = (e) => {
    console.log(newProduct)
    if (
      e.target.name === 'url' ||
      e.target.name === 'width' ||
      e.target.name === 'height'
    ) {
      setNewProduct({
        ...newProduct,
        image: {
          ...newProduct.image,
          [e.target.name]: e.target.value,
        },
      })
    } else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }
  }

  React.useEffect(() => {
    fetchingProduct()
  }, [])

  return (
    <>
      <div>
        <div className="section mt-1">
          <div className="mb-4">
            <button className="button" onClick={handleAdd}>
              New Product
            </button>
          </div>
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <p className="has-text-centered">Product ID</p>
                </th>
                <th>
                  <p className="has-text-centered">Product Name</p>
                </th>
                <th>
                  <p className="has-text-centered">Stock Count</p>
                </th>
                <th>
                  <p className="has-text-centered">Action</p>
                </th>
                <th>
                  <p className="has-text-centered">Remove</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {productsState
                ? productsState.map((product) => {
                    return (
                      <tr key={product._id}>
                        <td>
                          <p className="has-text-centered">{product._id}</p>
                        </td>
                        <td>
                          <Link to={`/product/${product._id}`}>
                            <p className="has-text-centered">{product.name}</p>
                          </Link>
                        </td>
                        <td>
                          <p className="has-text-centered">
                            {product.stockCount}
                          </p>
                        </td>
                        <td>
                          <button
                            className="button is-fullwidth"
                            onClick={handleClick}
                            name={product._id}
                          >
                            Take Action
                          </button>
                        </td>
                        <td>
                          <button
                            className="button is-fullwidth"
                            onClick={handleRemove}
                            name={product._id}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    )
                  })
                : null}
            </tbody>
          </table>
        </div>
        <AdminModal
          popUpModal={popUpModal}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          singleProduct={singleProduct}
        />
        <div className={`modal ${NewProductPopUpModal}`}>
          <div className="modal-background" onClick={handleClickAdd}></div>
          <div className="modal-content">
            <div className="madal-card">
              <header className="modal-card-head">
                <p className="modal-card-title"></p>
              </header>
              <form className="form">
                <section className="modal-card-body">
                  <div className="field">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.name}
                      name="name"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Brand</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.brand}
                      name="brand"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Category</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.category}
                      name="category"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Poduct Information</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.productInfo}
                      name="productInfo"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Price</label>
                    <input
                      type="number"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.price}
                      name="price"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Stock</label>
                    <input
                      type="number"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.stockCount}
                      name="stockCount"
                    />
                  </div>
                  <div className="field">
                    <label className="label">newProduct Description</label>
                    <textarea
                      className="textarea"
                      placeholder="e.g. Hello world"
                      value={newProduct.itemDescription}
                      onChange={handleChangeAdd}
                      name="itemDescription"
                    ></textarea>
                  </div>
                  <div className="field">
                    <label className="label">Image</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.image.url}
                      name="url"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Image's Width</label>
                    <input
                      type="number"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.image.width}
                      name="width"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Image's Height</label>
                    <input
                      type="number"
                      className="input"
                      onChange={handleChangeAdd}
                      value={newProduct.image.height}
                      name="height"
                    />
                  </div>
                </section>

                <footer className="modal-card-foot field">
                  <input
                    className="button"
                    type="submit"
                    name="Add"
                    value="Add"
                    onClick={handleSubmitAdd}
                  />
                </footer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminView
