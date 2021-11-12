import React from 'react'
import logo from './logoPrueba2.png'
import './NavBar.css'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <>
            <nav>
                <img src={logo} alt="logo" />
                
                <a href="" target="_blank">Nosotros</a>
                <a href="" target="_blank">Productos</a>
                <a href="" target="_blank">Contacto</a>
                <CartWidget />
            </nav>
            
            
        </>
    )
}

export default NavBar
