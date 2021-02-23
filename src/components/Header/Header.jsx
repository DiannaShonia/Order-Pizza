import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import Button from '../Button/Button'
import { useLocation, Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import Basket from '../Basket/Basket'

const Header = () => {
  const [cart, setCart] = useContext(CartContext)
  const [onOrder, setOnOrder] = useState(false)

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  )

  const priceOfOneItem = cart.map((item) => item.quantity * item.price)
  const priceOfAllItems = priceOfOneItem.reduce(
    (total, price) => total + price,
    0
  )

  let location = useLocation()
  let link =
    location.pathname == '/confirm' || location.pathname == '/success'
      ? '/'
      : '/confirm'

  let prevPage = location.pathname == '/order' ? 'review' : 'home'

  return (
    <header className="header">
      <div className="row">
        {location.pathname != '/' ? (
          <div className="row1">
            <Link to={link} style={{ textDecoration: 'none' }}>
              <h2>
                {'<'} Back to {prevPage}
              </h2>
            </Link>
          </div>
        ) : (
          <div className="row1"></div>
        )}
        <div className="row2">
          <h2 onClick={() => setOnOrder(!onOrder)} className="cart">
            Cart ({totalQuantity}) |
          </h2>
          <h2 className="total">Total: {priceOfAllItems}$</h2>
          <Link to="/confirm">
            <Button text="Order" />
          </Link>
        </div>
        {onOrder ? <Basket /> : ''}
      </div>
    </header>
  )
}

export default Header
