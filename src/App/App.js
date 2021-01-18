import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import MixBanner from '../MixBanner/MixBanner';
import HearDif from '../HearDif/HearDif';
import MixServices from '../MixServices/MixServices';
import Testimonials from '../Testimonials/Testimonials';
import Quote from '../Quote/Quote';
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
// import EditBanner from '../EditBanner/EditBanner'

export default class App extends Component {
  render(){
    return(
      <div className="appDiv">
        <Route component={Header} path='/'/>

        {/* MIXING PAGE */}
        <Route component={MixBanner} exact path='/' />
        <Route component={HearDif} exact path='/' />
        <Route component={MixServices} exact path='/' />
        <Route component={Testimonials} exact path='/' />
        <Route component={Quote} exact path='/' />

        {/* EDITING PAGE */}
        {/* <Route component={EditBanner} exact path='/editing' /> */}


        <Route component={Contact} path='/' />
        <Route component={Footer} path='/' />
      </div>
    )
  }
}