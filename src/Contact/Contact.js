import React, { Component } from 'react';
import './Contact.css'

export default class Contact extends Component {

    render(){
        return(
            <div className="contactDiv">
                    <div className="contactInner">
                        <form className="contactForm" action="https://formspree.io/xvowbnak" method="post">
                            <label htmlFor="user-name">Name:</label>
                            <input id="user-name" type="text" name="name" required />

                            <label htmlFor="user-email">Email:</label>
                            <input id="user-email" type="text" name="email" required />

                            <label htmlFor="user-message">Message:</label>
                            <textarea id="user-message" name="message" required></textarea>
                            <button className="formButton" type="submit">Submit</button>
                            <p>You may also contact me directly at kameronmasullo@gmail.com</p>
                        </form>
                    </div>
            </div>
        )
    }
}