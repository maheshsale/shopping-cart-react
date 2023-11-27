import CartImage from '../assets/cart.png'
import React from 'react'
import './navbar.css'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
      const navigate = useNavigate();

      return(
            <nav className="navbar">
                  <div className="brand-name">
                        <h1>MahiCart.com</h1>
                  </div>
                  <div className="nav-right">
                        <button onClick={() => navigate('/')}>Shop</button>
                        <img src={CartImage} alt="Cart" onClick={() => navigate('/cart')}/>
                  </div>
            </nav>
      );
}

export default Navbar;