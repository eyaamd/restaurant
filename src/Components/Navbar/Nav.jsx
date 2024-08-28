import React , { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
  
  return (
    <div>
        <ul className="navigation">
    <li><Link to="/">Accueil</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/banner">Banner</Link></li>
        <li><Link to="/seller">Seller</Link></li>
        <li><Link to="/cta">Blog</Link></li>
</ul>
</div>
  )
}

export default Nav