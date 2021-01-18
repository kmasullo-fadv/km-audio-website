import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MixBanner.css';

export default class MixBanner extends Component {

    render(){
        return(
            <div className="mixBannerDiv">
                <div className="bannerMessageDiv">
                    <h2 id='bannerMessage1'>Bring Your Songs to Life</h2>
                    <h2 id='bannerMessage2'>Hire a Mix Engineer</h2>
                    <Link to={'/contact'} className="buttonLink"><button id='bannerButton'>Request A Quote</button></Link>
                </div>
            </div>
        )
    }
}