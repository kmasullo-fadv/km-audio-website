import React, {Component} from 'react';
import './MixBanner.css'

export default class MixBanner extends Component {

    render(){
        return(
            <div className="bannerDiv">
                <div className="bannerMessageDiv">
                    <h2 id='bannerMessage1'>Bring Your Songs to Life</h2>
                    <h2 id='bannerMessage2'>Hire a Mix Engineer</h2>
                    <button id='bannerButton'>Request A Quote</button>
                </div>
            </div>
        )
    }
}