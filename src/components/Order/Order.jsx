import './Order.css'
import { Redirect } from 'react-router-dom'
import Button from '../Button/Button'
import CartContext from '../../Context/CartContext'
import { useContext, useState } from 'react'
import { schema } from '../Validations/Order-validation'

const Order = () => {
  const [cart] = useContext(CartContext)
  const [valid, setValid] = useState(true)
  const [error, setError] = useState(false)

  const priceOfOneItem = cart.map((item) => item.quantity * item.price)
  const priceOfAllItems = priceOfOneItem.reduce(
    (total, price) => total + price,
    0
  )

  // form validation

  const orderData = async (event) => {
    event.preventDefault()
    let formData = {
      address: event.target[2].value,
    }
    const isValid = await schema.isValid(formData)
    setValid(isValid)
    setError(isValid)
  }

  return error ? (
    <Redirect to="/success" />
  ) : (
    <div className="confirm">
      <p className="review">Enter Contact Info</p>
      <div className="confirm-container">
        <form onSubmit={orderData} className="form">
          <div className="inputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <div>
              <input
                className={!valid ? 'input-error' : ''}
                type="text"
                placeholder="Address"
              />
              <p className="error">{!valid ? 'Address is required' : ''}</p>
            </div>
            <input type="text" placeholder="Phone" />
          </div>
          <div className="confirm-row">
            <p>Total: {priceOfAllItems}$</p>
            <Button type="submit" color="#7d72b5" text="Continue" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Order
