import React, { useContext, useEffect, useRef, useState } from 'react'
import './Header.css'
import Button from '../Button/Button'
import { useLocation, Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import Basket from '../Basket/Basket'

const Header = () => {
  const [cart] = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  // Closing on outside click
  let basketRef = useRef()

  useEffect(() => {
    let handler = (event) => {
      if (!basketRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

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
      <div ref={basketRef} className="row">
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
          <h2
            ref={basketRef}
            onClick={() => setIsOpen(!isOpen)}
            className="cart"
          >
            Cart ({totalQuantity}) |
          </h2>
          <h2 className="total">Total: {priceOfAllItems}$</h2>
          <Link to="/confirm">
            <Button color="#c28c9c" className="btn-order" text="Order" />
          </Link>
        </div>
        {isOpen ? <Basket /> : ''}
      </div>
    </header>
  )
}

export default Header
