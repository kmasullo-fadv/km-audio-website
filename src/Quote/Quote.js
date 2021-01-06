import React, { Component } from 'react';
import './Quote.css';

export default class Quote extends Component {

    render(){
        return(
            <div className="quoteDiv">
                <div className="quoteInnerDiv">
                    <h3 className="quoteH3 white">If You'd Like Us to Give You Big, Dynamic, Vibrant Mixes</h3>
                    <h2 className="quoteH2 yellow">Request A Quote Today</h2>
                    <p className="quoteP white">
                        Within 1-2 business days of sending your request for pricing, you 
                        will receive a detailed proposal in your inbox. This will include a 
                        description of all services provided as well as a (very short) list 
                        of terms, and a detailed summary of pricing.
                    </p>
                    <p className="quoteP yellow">*No obligation to purchase is required upon requesting a quote for your project*</p>
                </div>
            </div>
        )
    }
}