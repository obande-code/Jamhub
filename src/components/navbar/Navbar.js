import React from 'react'
import './Navbar.scss'

const Navbar = ({ title}) => {

    return (
        <div className="nav">
           <i class="fab fa-github-alt fa-3x"></i> {title}
           
        </div>
    )
}

export default Navbar
