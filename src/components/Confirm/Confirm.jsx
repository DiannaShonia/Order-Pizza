import React, { useContext } from 'react'
import Button from '../Button/Button'
import './Confirm.css'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

const Confirm = () => {
  const [cart, setCart] = useContext(CartContext)

  const priceOfOneItem = cart.map((item) => item.quantity * item.price)
  const priceOfAllItems = priceOfOneItem.reduce(
    (total, price) => total + price,
    0
  )

  const deleteProduct = (item) => {
    setCart(cart.filter((product) => product.id !== item.id))
  }

  return (
    <div className="confirm">
      <p className="review">Review Order</p>
      <div className="confirm-container">
        <ul className="products-container">
          {cart.map((item, index) => (
            <li key={index}>
              <p>
                {item.title} ({item.quantity}x)
              </p>
              <div className="block">
                <p>{item.quantity * item.price}$</p>
                <Button
                  onClick={() => deleteProduct(item)}
                  text="Remove"
                  className="btn"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="confirm-row">
          <p>Total: {priceOfAllItems}$</p>
          <Link to="/order">
            <Button color="#c28c9c" text="Continue" className="btn-pink" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Confirm
