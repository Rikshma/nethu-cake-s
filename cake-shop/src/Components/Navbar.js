import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../Assets/Logo.png'; // Adjust the path if necessary

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="CakeShop Logo" className="navbar-logo-img" />
                    </Link>
                </div>
                <ul className="navbar-menu">
                    <li><Link to="/" className="navbar-link">Home</Link></li>
                    <li><Link to="/search" className="navbar-link">Search</Link></li>
                    <li><Link to="/about" className="navbar-link">About Us</Link></li>
                    <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
                </ul>
                <div className="navbar-cart">
                    <Link to="/cart" className="cart-icon">
                        <FaShoppingCart />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
