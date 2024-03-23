import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'

const Navbar = () => {
  return (
    <nav className = 'container'>
      <div className="nav_contact">
        <div className="phone">
            <img src={phone} alt="" />
            <p>+48 665 629 145</p>
        </div>
        <div className="mail">
            <img src={mail} alt="" />
            <p>bartosz.brzezinski12@gmail.com</p>
        </div>
      </div>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Projekty</li>
        <li><button className='btn'>Kontakt</button></li>
      </ul>
    </nav>
  )
}

export default Navbar