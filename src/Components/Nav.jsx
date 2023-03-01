import React from 'react';
import logo from '../imgs/logo.svg';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Nav = () => {
  return (
    <nav>

      <div className="container nav__container">

      <div className="logo">
        <img src = {logo} alt="nav-logo" />
      </div>

      <ul className="nav__links">

        <li><a href="#">HOME</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>

      </ul>

      <div className="nav__socials">
        <a href="https://twitter.com" target = "_blank"
         rel="noreferrer noopener">
          <BsTwitter />
        </a>

        <a href="https://facebook.com" target = "_blank"
         rel="noreferrer noopener">
          <BsFacebook />
        </a>
      </div>

      </div>

    </nav>
  )
}

export default Nav;