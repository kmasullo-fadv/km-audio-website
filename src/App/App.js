import React, {useRef, useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import MixBanner from '../MixBanner/MixBanner';
import HearDif from '../HearDif/HearDif';
import MixServices from '../MixServices/MixServices';
import Testimonials from '../Testimonials/Testimonials';
import Quote from '../Quote/Quote';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App = () => {

    const contact = useRef(null);

    const scrollToContact = () => {
        if (contact.current) {
            contact.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="appDiv">
            <Header scrollToContact={ scrollToContact }/>
            <MixBanner scrollToContact={ scrollToContact }/>
            <HearDif />
            <MixServices />
            <Testimonials />
            <Quote />
            <div ref={contact}>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default App;