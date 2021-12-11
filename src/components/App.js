import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './common/NavBar.js'
import Home from './common/Home.js'
import Products from './common/Products.js'
import ShowProduct from './common/ShowProduct.js'
import Basket from './common/Basket.js'
import Register from '../auth/Register.js'
import Login from '../auth/Login.js'
import SuperAdminView from '../adminConsole/superAdmin/superAdminView.js'
import AdminView from '../adminConsole/admin/adminView.js'
import ConfirmationPage from './common/ConfirmationPage.js'
import '../styles/style.scss'

function App({ current }) {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ShowProduct} />
        <Route path="/basket" component={Basket} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/superAdmin" component={SuperAdminView} />
        <Route path="/admin" component={AdminView} />
        <Route path="/confirmation" component={ConfirmationPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
