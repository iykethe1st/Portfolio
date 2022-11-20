import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import React from "react";

const NavBar = () => {
  return (
    <section class="nav collapsible">
      <div class="nav__header">
        <div class="nav__brand">
          <a href="/">
            <img class="nav__image" src={Logo} alt="" />
          </a>
        </div>
        <div class="nav__toggler">
          <svg class="icon icon--secondary nav__icon">
            {/* <use xlink:href="images/svg-sprite.svg#bars-solid"></use> */}
          </svg>
        </div>
      </div>
      <div class="nav__items">
        <ul class="lists nav__list collapsible__content">
          <li class="list__item">
            <a href="/">Home</a>
          </li>
          <li class="list__item">
            <a href="about.html">About</a>
          </li>
          <li class="list__item">
            <a href="portfolio.html">Portfolio</a>
          </li>
          <li class="list__item">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
