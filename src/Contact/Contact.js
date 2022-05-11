import React, {useEffect, useState} from 'react';
import Recaptcha from 'react-recaptcha';
import './Contact.css'

const Contact = () => {
    const [ recaptcha, setRecaptcha ] = useState(null);
    const [ isVerified, setIsVerified ] = useState(false);

    const onLoadRecaptcha = () => {
        setIsVerified(false);
    }

    const verifyCallback = (response) => {
        if (response) {
            setIsVerified(true);
        }
    }

    useEffect(() => {
        const recaptchaElement = (
            <Recaptcha
                sitekey="6LcFLt0fAAAAALWKjBin8pCkMLIE9Xa4K-14e-35"
                verifyCallback={ verifyCallback }
                expiredCallback={ onLoadRecaptcha }
            />
        )
        setTimeout(() => setRecaptcha(recaptchaElement), 3000);
    }, []);

    return (
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
                        <input className="hoverBorder" id="user-email" type="email" name="email" required />

                        <label htmlFor="bandName">Band/Project Name:</label>
                        <input className="hoverBorder" id="bandName" type="text" name="bandName" required />

                        <label htmlFor="numberOfSongs">Number of Songs:</label>
                        <input className="hoverBorder" id="numberOfSongs" type="text" name="numberOfSongs" required />

                        <label htmlFor="budget">Budget:</label>
                        <input className="hoverBorder" id="budget" type="text" name="budget" required />

                        <label htmlFor="startDate">Desired Start Date:</label>
                        <input className="hoverBorder" id="startDate" type="date" name="startDate" required />

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
                        <textarea id="user-message" name="message" minLength={ 100 } required />

                        {
                            !!recaptcha && recaptcha
                        }

                        <button className="formButton" type="submit" disabled={ !isVerified }>Submit</button>

                        { !isVerified &&
                            <p style={{ color: 'red' }}>* Please verify that you are human by clicking "I'm not a robot"</p>
                        }
                    </form>
                </div>
        </div>
    )
}

export default Contact;