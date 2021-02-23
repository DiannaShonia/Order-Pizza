import React, { useState } from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
