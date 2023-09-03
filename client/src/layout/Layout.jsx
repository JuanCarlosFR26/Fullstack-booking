import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from 'react-icons/ai';
import LOGO from "../assets/headerlogo.png";
import { useState } from "react";


const Layout = () => {

  const [clicked, setClicked] = useState(false);

  const toggleDropdown = () => {
    setClicked(!clicked)
  }

  return (
    <header className="header_layout">
      <div className="header_logo_container">
        <img className="header_logo" src={LOGO} alt="logo booking"></img>
        <h2>Fs - Booking</h2>
      </div>
      {clicked ? <FaBars className="header_menu_icon" onClick={toggleDropdown}/> : <AiFillCloseCircle className="header_menu_cross" onClick={toggleDropdown}/>}
      <nav className={clicked ? 'header_menu_display' : 'header_menu'}>
        <ul className="header_menu_list">
          <div className="header_pagination">
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div className="header_credentials">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Layout;
