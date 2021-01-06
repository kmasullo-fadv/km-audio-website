import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import kmAudioLogo from "../img/kmAudioLogo.svg"

export default class Header extends Component {
    render(){
        return(
            <header>
                <img src={kmAudioLogo} alt="KM Audio Services" id="kmAudioLogo"></img>
                <nav>
                    <Link to={'/'} className="navLink">Mixing</Link>
                    <Link to={'/editing'} className="navLink">Editing</Link>
                    <Link to={'/contact'} className="navLink">Contact</Link>
                </nav>
            </header>
        )
    }
}