import { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../assets/Headerstyles.css";

function Header2() {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNavBar = () => {
    setNavOpen(!navOpen);
  }

  const closeNavBar = () => {
    setNavOpen(false);
  }

  return (
    <header>
      <h3>CafeKo</h3>
      <nav ref={navRef} className={navOpen ? "responsive_nav" : ""}>
        <div className="navlinks">
          <span className="navlinks-left">
            <a href="/">Menu</a>
            <a href="/">Goodies</a>
            <a href="/">About</a>
          </span>
          <span className="navlinks-right">
            <a href="/"><button type="button" className="btn btn-secondary">Login</button></a>
            <a href="/"><button className="btn btn-outline-secondary">Join</button></a>
          </span>
        </div>
        <button className="nav-btn nav-close-btn" onClick={closeNavBar}>
          <FaTimes className="custom-icon" />
        </button>
      </nav>
      <button className="nav-btn nav-menu-btn" onClick={toggleNavBar}>
        {navOpen ? <FaTimes className="custom-icon" /> : <FaBars className="custom-icon" />}
      </button>
    </header>
  )
}

export default Header2;
