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
    <a href="/">
    <h3>CafeKo</h3>
    </a>
    <nav ref={navRef}>
      <div className="navlinks">
      
      <span className="navlinks-left">
        <a href="/order">Menu</a>
        <a href="/">Goodies</a>
        <a href="/">About</a>
      </span>
      <span className="navlinks-right">
        <a href="/"><button type="button" className="btn btn-secondary">Login</button></a>
        <a href="/"><button className="btn btn-outline-secondary">Join</button></a>
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