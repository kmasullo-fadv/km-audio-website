import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import socraticLogo from "../img/socraticLogo.png";

export default class Header extends Component {
    render(){
        return(
            <header>
                <img src={socraticLogo} alt="Socratic Audio" id="socraticLogo"></img>
                <nav>
                    <Link to={'/'} className="navLink">Mixing</Link>
                    {/* <Link to={'/editing'} className="navLink">Editing</Link> */}
                    <Link to={'/contact'} className="navLink">Contact</Link>
                </nav>
            </header>
        )
    }
}