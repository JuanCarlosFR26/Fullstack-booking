import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";
import { FaBars } from 'react-icons/fa'

const Layout = () => {
  return (
    <header className="header_layout">
      <nav>
        <ul>
            <FaBars />
        </ul>
      </nav>
    </header>
  );
};

export default Layout;
