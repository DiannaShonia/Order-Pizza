import './Basket.css'
import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Basket = () => {
  const [cart, setCart] = useContext(CartContext)

  const priceOfOneItem = cart.map((item) => item.quantity * item.price)
  const priceOfAllItems = priceOfOneItem.reduce(
    (total, price) => total + price,
    0
  )

  const deleteFromBasket = (item) => {
    setCart(cart.filter((product) => product.id !== item.id))
  }

  const incrementQuantity = (item) => {
    const newCart = cart.map((product) => {
      if (product.id == item.id) {
        product.quantity = product.quantity + 1
      }
      return product
    })
    setCart(newCart)
  }

  const decrementQuantity = (item) => {
    const newCart = cart.map((product) => {
      if (product.id == item.id) {
        if (product.quantity > 1) {
          product.quantity = product.quantity - 1
        }
      }
      return product
    })
    setCart(newCart)
  }

  return (
    <div className="basket-container">
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <p>
              {item.title} ({item.quantity}x)
            </p>
            <div className="block">
              <div onClick={() => incrementQuantity(item)} className="plus">
                +
              </div>
              <div
                onClick={() => decrementQuantity(item)}
                className={item.quantity === 1 ? 'minus disabled' : 'minus'}
              >
                -
              </div>
              <p onClick={() => deleteFromBasket(item)} className="del">
                X
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="basket-row">
        <p>Total: {priceOfAllItems}$</p>
        <Link to="/confirm">
          <Button text="Order" className="btn" />
        </Link>
      </div>
    </div>
  )
}

export default Basket
