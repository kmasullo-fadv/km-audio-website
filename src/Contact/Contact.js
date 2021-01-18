import React, { Component } from 'react';
import './Contact.css'

export default class Contact extends Component {

    render(){
        return(
            <div className="contactDiv">
                    <div className="contactInner">
                        <form className="contactForm" action="https://formspree.io/xvowbnak" method="post">
                            <h2 className="center">Quote Request Form</h2>
                            <p className="center">
                                Fill this form out if you would like to request a quote for your project and we will typically get back to you within 48 hours. You 
                                may also send general inquiries to <strong>contact@socraticaudio.com</strong> if you'd like more info.
                            </p>
                            <label htmlFor="user-name">Name:</label>
                            <input className="hoverBorder" id="user-name" type="text" name="name" required />

                            <label htmlFor="userEmail">Email:</label>
                            <input className="hoverBorder" id="user-email" type="text" name="email" required />

                            <label htmlFor="bandName">Band/Project Name:</label>
                            <input className="hoverBorder" id="bandName" type="text" name="bandName" required />

                            <label htmlFor="numberOfSongs">Number of Songs:</label>
                            <input className="hoverBorder" id="numberOfSongs" type="text" name="numberOfSongs" required />

                            <label htmlFor="budget">Budget:</label>
                            <input className="hoverBorder" id="budget" type="text" name="budget" required />

                            <label htmlFor="startDate">Desired Start Date:</label>
                            <input className="hoverBorder" id="startDate" type="text" name="startDate" required />

                            <p>Desired Services:</p>

                            <label htmlFor="mixingCheckbox">
                                <input type="checkbox" id="mixingCheckbox" name="mixingCheckbox" value="Yes" />
                                Mixing
                            </label>

                            <label htmlFor="quantizingCheckbox">
                                <input type="checkbox" id="quantizingCheckbox" name="quantizingCheckbox" value="Yes" />
                                Quantizing
                            </label>
                
                            <label htmlFor="vocalTuningCheckbox">
                                <input type="checkbox" id="vocalTuningCheckbox" name="vocalTuning" value="Yes" />
                               Vocal Tuning
                            </label>
                            
                            <label htmlFor="songwritingArrangementsCheckbox">
                                <input type="checkbox" id="songwritingArrangementsCheckbox" name="songwritingArrangements" value="Yes" />
                                Songwriting/Arrangements
                            </label>

                            <label id="messageLabel" htmlFor="user-message">Message:</label>
                            <textarea id="user-message" name="message" required></textarea>
                            <button className="formButton" type="submit">Submit</button>
                        </form>
                    </div>
            </div>
        )
    }
}