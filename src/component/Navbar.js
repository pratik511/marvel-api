import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink className="comic"  activeStyle={{ color: 'red' }} to="/">COMIC</NavLink>
        </div>
    )
}

export default Navbar
