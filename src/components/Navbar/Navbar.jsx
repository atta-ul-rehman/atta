import React, { useRef } from "react";
import Toggle from "../Toggle/Toggle";
import menu from "../../img/menu.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import { AiFillCloseSquare } from "react-icons/ai";
const Navbar = () => {
  const ref = useRef(null);
  const toggleMenu = () => {
    ref.current.classList.toggle("responsive_navi");
  };
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Atta</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div ref={ref} className="n-list n-list2">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
          <AiFillCloseSquare
            className="n-close"
            size={32}
            onClick={toggleMenu}
          />
        </div>
        <Link spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
        <div spy={true} smooth={true} onClick={toggleMenu}>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
