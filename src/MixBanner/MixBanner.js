import React from 'react';
import './MixBanner.css';

const MixBanner = ({ scrollToContact }) => {
    return (
        <div className="mixBannerDiv">
            <div className="bannerMessageDiv">
                <h2 id='bannerMessage1'>Bring Your Songs to Life</h2>
                <h2 id='bannerMessage2'>Hire a Mix Engineer</h2>
                <button id='bannerButton' onClick={ scrollToContact }>Request A Quote</button>
            </div>
        </div>
    )
}

export default MixBanner;