import React, {Component} from 'react';
import './HearDif.css'

export default class HearDif extends Component {
    render(){
        return(
            <div className="difBannerDiv">
                <div className="difInnerDiv">
                        <h2 id='difH2'>Turn Your Recordings Into Awesome Productions</h2>
                        <p className='difMessage'>Whether your songs were recorded in your bedroom or on a $90,000 console, they need to be mixed. And if you want to take your career anywhere, they have to be mixed WELL.</p>
                        <p className='difMessage'>Utilizing years of experience, professional gear and endless dedication, Socratic Audio will give your songs energy and clarity while maintaining your original vision.</p>
                    <div className="difPlayerDiv">
                        <h2 id='difHearH2'>Hear the Difference</h2>
                        <p>Before:</p>
                        <audio controls className='difPlayer'>
                            <source src={`${process.env.PUBLIC_URL}/mp3s/KameronMasullo-HospitalNoise-Unmixed.mp3`}  type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
                        <p>After:</p>
                        <audio controls className='difPlayer'>
                            <source src={`${process.env.PUBLIC_URL}/mp3s/KameronMasullo-HospitalNoise.mp3`} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
                </div>
            </div>
        )
    }
}