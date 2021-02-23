import Button from '../Button/Button'
import './Product.css'

const Product = ({ image, title, description, price, onClick }) => {
  return (
    <div className="product-container">
      <div className="img">
        <img src={image} />
      </div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="price-row">
        <h3 className="price">{price}$</h3>
        <Button onClick={onClick} color="#7d72b5" text="Add To Cart" />
      </div>
    </div>
  )
}

export default Product
