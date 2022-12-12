import React from 'react'

import logo from '../../assests/logo.png'
import './header.css'

const Header =()=> {
    return (
        <header className="header">
        
        <img src={logo} alt='BurgerMakers-logo' />
      </header>
    )
}

export default Header
