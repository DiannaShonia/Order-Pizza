import './Success.css'
import Button from '../Button/Button'
import pizza from '../Logo/pizza.png'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="success">
      <img src={pizza} />
      <p>Your order successfully placed!</p>
      <Link to="/">
        <Button text="Back To Home" />
      </Link>
    </div>
  )
}

export default Success
