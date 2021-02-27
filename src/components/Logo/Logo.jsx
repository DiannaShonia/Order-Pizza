import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import pizza from './pizza.png'

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
        <img src={pizza} alt="" />
        <h2 className="heading">Order Pizza</h2>
      </Link>
    </div>
  )
}

export default Logo
