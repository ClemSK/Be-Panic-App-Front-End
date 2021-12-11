import React from 'react'

const AdminModal = ({
  popUpModal,
  handleClick,
  handleSubmit,
  handleChange,
  singleProduct,
}) => {
  return (
    <div className={`modal ${popUpModal}`}>
      <div className="modal-background" onClick={handleClick}></div>
      <div className="modal-content">
        <div className="madal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"></p>
          </header>
          <form onSubmit={handleSubmit} className="form">
            {singleProduct ? (
              <>
                <section className="modal-card-body">
                  <div className="field">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.name}
                      name="name"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Brand</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.brand}
                      name="brand"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Category</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.category}
                      name="category"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Poduct Information</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.productInfo}
                      name="productInfo"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Price</label>
                    <input
                      type="number"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.price}
                      name="price"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Stock</label>
                    <input
                      type="number"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.stockCount}
                      name="stockCount"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Product Description</label>
                    <textarea
                      className="textarea"
                      placeholder="e.g. Hello world"
                      value={singleProduct.itemDescription}
                      onChange={handleChange}
                      name="itemDescription"
                    ></textarea>
                  </div>
                  <div className="field">
                    <label className="label">Image</label>
                    <input
                      type="text"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.image.url}
                      name="url"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Image's Width</label>
                    <input
                      type="number"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.image.width}
                      name="width"
                    />
                  </div>
                  <div className="field">
                    <label className="label">Image's Height</label>
                    <input
                      type="number"
                      className="input"
                      onChange={handleChange}
                      value={singleProduct.image.height}
                      name="height"
                    />
                  </div>
                </section>

                <footer className="modal-card-foot field">
                  <input
                    className="button"
                    type="submit"
                    name="update"
                    value="Update"
                  />
                </footer>
              </>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminModal
