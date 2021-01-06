import React, { Component } from  'react';
import './Testimonials.css'

export default class Testimonials extends Component {

    render(){
        return(
            <div className="testimonials">
                <h2 className="testimonialsH2">TESTIMONIALS</h2>
                <div className="testimonialDiv">
                    <p>
                        It was a pleasure working with KM Audio Services. They took my less than ideal 
                        recorded audio and turned it into something that was listenable. 
                        I'm impresssed! I'll definitely be hiring them again soon.
                    </p>
                    <p>
                        ...Another great job from KM! They took some subpar audio and 
                        worked some magic with it. It sounds way better than I imagined 
                        it could. I'll definitely be hiring them again.
                    </p>
                    <p>JEREMY BRUNSON / THE GREAT WIDE OPEN</p>
                </div>
                <div className="testimonialDiv">
                    <p>
                        KM Audio Services was incredibly easy to work with. They kept the lines of communication 
                        very open and were accepting of all feedback in order to make my [song] sound as good 
                        as possible. Would definitely recommend them to a friend and would love to work 
                        with them again!
                    </p>
                    <p>KAT GAFFNEY / SINGER</p>
                </div>
            </div>
        )
    }
}