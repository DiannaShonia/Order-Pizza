import Product from '../Product/Product'
import { useState, useEffect, useContext } from 'react'
import './Products.css'
import CartContext from '../../Context/CartContext'

const Products = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useContext(CartContext)

  useEffect(() => {
    fetch(
      'https://6015ccf455dfbd00174ca967.mockapi.io/products?fbclid=IwAR0PE6J6oZWF9fo_JteUAPmybDcCfaRJHdOuMWbCuVgfZbh07hAXIz3b9PA'
    )
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.map((product) => {
            product.quantity = 1
            return product
          })
        )
      )
  }, [])

  const addToCart = (product) => {
    const isInCart = cart.find((item) => item.id == product.id)

    if (isInCart) {
      const newCart = cart.map((item) => {
        if (item.id == product.id) {
          item.quantity = item.quantity + 1
        }

        return item
      })

      setCart(newCart)
    } else {
      setCart([...cart, product])
    }
  }

  return (
    <div className="products">
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          image={product.image}
          description={product.description}
          title={product.title}
          price={product.price}
          onClick={() => addToCart(product)}
        />
      ))}
    </div>
  )
}

export default Products
