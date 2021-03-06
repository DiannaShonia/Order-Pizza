import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ color, text, onClick, type, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        style={{ backgroundColor: color }}
        className={className}
      >
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Button
