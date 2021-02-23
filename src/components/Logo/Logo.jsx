import React from 'react'
import './Logo.css'
import pizza from './pizza.png'


const Logo = () => {
    return (
        <div className='logo'>
            <img src={pizza} alt=""/>
            <h2 className='heading'>Order Pizza</h2>
        </div>
    )
}

export default Logo
