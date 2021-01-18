import React, {Component} from 'react';
import './EditBanner.css'

export default class EditBanner extends Component {

    render(){
        return(
            <div className="editBannerDiv">
                <div className="bannerMessageDiv">
                    <h2 id='bannerMessage1'>Give Your Audience the Best Performance</h2>
                    <h2 id='bannerMessage2'>Hire an Editing Engineer</h2>
                    <button id='bannerButton'>Request A Quote</button>
                </div>
            </div>
        )
    }
}