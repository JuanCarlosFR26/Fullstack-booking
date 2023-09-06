import React from 'react'
import '../styles/footer.css';
import { BiLogoTwitter, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='footer'>
        <h2>FS - Booking</h2>
        <div className='social'>
            <a href='#'><BiLogoGithub /></a>
            <a href='#'><BiLogoTwitter /></a>
            <a href='#'><BiLogoLinkedinSquare /></a>
        </div>
        <p>Recuerda que puedes contactar con nosotros a través de <Link to='/contact/'>Contact</Link></p>
        <p>&copy; Todos los derechos reservados FS - Booking 2023©</p>
    </footer>
  )
}

export default Footer;