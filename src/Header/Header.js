import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import socraticLogo from "../img/socraticLogo.png";

const Header = ({ scrollToContact }) => {
        return (
            <header>
                <img src={socraticLogo} alt="Socratic Audio" id="socraticLogo" />
                <nav>
                    <a className="navLink">Mixing</a>
                    {/* <Link to={'/editing'} className="navLink">Editing</Link> */}
                    <a className="navLink" onClick={ scrollToContact }>Contact</a>
                </nav>
            </header>
        )
}

export default Header;