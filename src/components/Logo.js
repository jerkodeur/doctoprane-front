import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import "./Logo.css"

function Logo() {
    return (
        <div className="Logo">
            <Link to="/">
            <img className='Logo-img' src={logo} alt="Logo" />
            </Link>    
            </div>
        
    )
}

export default Logo;