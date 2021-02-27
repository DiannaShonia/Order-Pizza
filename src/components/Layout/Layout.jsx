import Logo from '../Logo/Logo'
import Header from '../Header/Header'
import './Layout.css'
import { useState } from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Logo />
      <Header />
      <div className="container">{children}</div>
    </div>
  )
}

export default Layout
