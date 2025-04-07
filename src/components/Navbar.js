import React from "react";
import Logo from './Logo'
import Searchbar from './Searchbar'
import UserProfile from './UserProfile'
import Cart from './Cart'
import Seller from './Seller'
import Moreinfo from './Moreinfo'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo />
            <Searchbar />
            <div className="nav-buttons">
                <UserProfile />
                <Cart />
                <Seller />
                <Moreinfo />
            </div>
        </nav>
    )
}
export default Navbar;