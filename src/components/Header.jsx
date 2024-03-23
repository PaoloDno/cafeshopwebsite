import {useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../assets/Headerstyles.css";

function Header() {
  
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return(
    <header>
    <Link to="/cafeshopwebsite/">
      <h3>CafeKo</h3>
    </Link>
    <nav ref={navRef}>
      <div className="navlinks">

        <span className="navlinks-left">
          <Link to="/cafeshopwebsite/order">Menu</Link>
          <Link to="/cafeshopwebsite/">Goodies</Link>
          <Link to="/cafeshopwebsite/">About</Link>
        </span>
        <span className="navlinks-right">
          <Link to="/cafeshopwebsite/"><button type="button" className="btn btn-secondary">Login</button></Link>
          <Link to="/cafeshopwebsite/hero"><button className="btn btn-outline-secondary">Join</button></Link>
        </span>
      </div>
      <button className="nav-btn nav-close-btn">
        <FaTimes onClick={showNavBar} className="custom-icon" />
      </button>
    </nav>
    <button className="nav-btn nav-close-btn">
      <FaBars onClick={showNavBar} className="custom-icon" />
    </button>
  </header>
  )
}

export default Header;