import React, {Component} from 'react';
import './MixServices.css'

export default class MixServices extends Component {

    render(){
        return(
            <div className="MixServicesDiv">
                <h2 className="servicesTopH2 white">What's Included</h2>
                <h3 className="servicesTopH3 white">In Every Mixing Package</h3>
                <div className="servicesList">
                    <div className="service s1">
                        <h3 className="serviceH3 yellow">Re-amping (if needed)</h3>
                        <p>
                            If your guitars and/or bass lack character or sound 
                            out of place, re-amping might be the solution. We will 
                            run your tracks through one (or several) of our hundreds 
                            of amp simulations to get the tone you need.
                        </p>
                    </div>
                    <div className="service s2">
                        <h3 className="serviceH3 yellow">Dynamics Processing</h3>
                        <p>
                        In order to create a smooth listening experience, some leveling 
                        is always necessary. But don't worry, we love dynamic range. 
                        We will tame harsh transients, add punch and liveliness and bring 
                        your music up to industry standard volume without squashing your mix.
                        </p>
                    </div>
                    <div className="service s3">
                        <h3 className="serviceH3 yellow">EQ Adjustments</h3>
                        <p>
                        Believe it or not, the majority of problems can be solved with 
                        proper EQing. We will cut booming lows and clean up muddy mids; 
                        brighten the dull elements and add warmth to brittle elements. 
                        </p>
                    </div>
                    <div className="service s4">
                        <h3 className="serviceH3 yellow">Harmonic Enrichment</h3>
                        <p>
                        Once everything is cleaned up, we will apply saturation and/or 
                        various analog emulations to give your tracks rich, warm lows 
                        and crisp, vibrant highs. This step is crucial to giving your 
                        mix character and excitement.
                        </p>
                    </div>
                    <div className="service s5">
                        <h3 className="serviceH3 yellow">Stereo Enhancement</h3>
                        <p>
                        This step is all about giving each instrument its own space and 
                        opening up the mix. Through panning, phase tricks, mid/side 
                        processing and stereo widening tools, we will give your mix width 
                        and space.
                        </p>
                    </div>
                    <div className="service s6">
                        <h3 className="serviceH3 yellow">Effects (if desired)</h3>
                        <p>
                        A little reverb and delay are typically added to every mix to 
                        create a sense of space and depth. But we definitely don't have 
                        to stop there! If it is requested, we can also apply any 
                        modulation effect you can think of; chorus, phase, flange, 
                        filtering, pumping, turning your vocalist into a crazy alien, etc.
                        </p>
                    </div>
                    <div className="service s7">
                        <h3 className="serviceH3 yellow">Minor Editing (if needed)</h3>
                        <p>
                        If there are minimal timing issues and a flat note here and 
                        there, we don't mind doing a little editing free-of-charge. 
                        If you would like us to fully quantize the band and pitch-correct 
                        the vocals, those services can be added for an additional price.
                        </p>
                    </div>
                    <div className="service s8">
                        <h3 className="serviceH3 underline yellow">Unlimited Free Revisions</h3>
                        <p>
                        If you're not happy, we're not happy. Once your songs have been 
                        fully mixed, we will send you an mp3 to review. You may then spend 
                        the next several days or weeks creating a list of adjustments you'd 
                        like made, and we will make them.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}