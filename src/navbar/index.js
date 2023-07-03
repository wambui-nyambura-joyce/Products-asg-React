import React from "react";
import './style.css';
const Navbar = () => {
    return(
        <nav className="navbar">
        <a href="/products">Products</a>
        <a href="/login">Login</a>
        <button className="button">Add Product</button>
      </nav>
    )
}
export default Navbar;