import React, {Component} from 'react';
import './HearDifBanner.css'

export default class HearDifBanner extends Component {

    render(){
        return(
            <div className="difBannerDiv">
                <div className="difInnerDiv">
                    <div className="difMessageDiv">
                        <h2 id='difH2'>Turn Your Recordings Into Awesome Productions</h2>
                        <p className='difMessage'>Whether your songs were recorded in your bedroom or on a $90,000 console, they need to be mixed. And if you want to take your career anywhere, they have to be mixed WELL.</p>
                        <p className='difMessage'>Utilizing years of experience, professional gear and endless dedication, KM Audio Services will give your songs energy and clarity while maintaining your original vision.</p>
                    </div>
                    <div className="difHearDif">
                        <h2 id='difHearH2'>Hear the Difference</h2>
                        <div className="difButtonDiv">
                            <button className='difButton'>Before</button>
                            <button className='difButton'>After</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}