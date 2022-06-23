import React from 'react'
import {NavLink as Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='Navbar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    )
}

export default Navbar
