import {React,useState} from 'react'
import './Header.css'
import Nav from '../Navbar/Nav'
import logo from '../../assets/logo.png'
const Header = () => {

  return (
    <>
    <header className='header'>
    <a href="#" class="logo">
        <img src={logo} alt="" />
    </a>
   

      <Nav />
</header>
</>
)
}

export default Header