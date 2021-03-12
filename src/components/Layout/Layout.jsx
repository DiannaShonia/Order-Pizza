import Logo from '../Logo/Logo'
import Header from '../Header/Header'
import './Layout.css'
import { useState, useEffect } from 'react'
import DotLoader from 'react-spinners/DotLoader'

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      <Logo />
      <Header />
      <div className="container">
        {loading ? (
          <div className="loader">
            <DotLoader color={'#000'} loading={loading} size={70} />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default Layout
