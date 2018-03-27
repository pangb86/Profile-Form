import React from 'react';
// components
import Navbar from './navbar';
import Banner from './banner';
import AboutForm from './about_form';
import PhotosForm from './photos_form';

const phoneNumber = "1 (888) 494-7280";
const navMsg1 = "Chat with a love expert";
const navMsg2 = "CLICK HERE FOR FREE SCREENING";
const bannerMsg = "We'd like to get to know you better. Tell us about yourself and the sort of someone you'd like to meet. Don't worry, no one will see this besides the matchmakers at Tawkify.";
const aboutMsg = "Tell us a bit about yourself and who you'd like to meet. The more we know, the better. Be candid--this info is for our eyes only. Tawkify profiles and photos will forever be 100% confidential.";
const photosMsg = "We ask that you upload at least 2 pictures of yourself; but upload as many as you'd like. We encourage you to review your pictures periodically to make sure they are up to date. Snapshots and Selfies just fine here. Remember this image is for our internal use and will not be shared with potential matches - you will also be able to swap it out later if you wish.";

const App = () => (
  <div className="main-app-container">
    <Navbar
      phoneNumber={phoneNumber}
      message1={navMsg1}
      message2={navMsg2}/>
    <Banner message={bannerMsg}/>
    <AboutForm message={aboutMsg}/>
    <br/>
    <PhotosForm message={photosMsg}/>
  </div>
);

export default App;
