import Layout from './components/Layout/Layout'
import { CartProvider } from './Context/CartContext'
import Products from './components/Products/Products'
import Order from './components/Order/Order'
import Confirm from './components/Confirm/Confirm'
import Success from './components/Success/Success'
import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/confirm">
              <Confirm />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
          </Switch>
        </Layout>
      </CartProvider>
    </HashRouter>
  )
}

export default App
