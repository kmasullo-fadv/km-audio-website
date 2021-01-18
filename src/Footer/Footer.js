import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render(){
        return(
            <div className='footerDiv'>
                    <p className="footerP">&#169;2021 Socratic Audio</p>
                    <p className="footerP">Send inquiries to contact@socraticaudio.com</p>
            </div>
        )
    }
}
