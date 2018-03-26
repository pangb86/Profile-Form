import React from 'react';
// components
import Navbar from './navbar';
import Banner from './banner';
import AboutForm from './about_form';

const phoneNumber = "1 (888) 494-7280";
const navMsg1 = "Chat with a love expert";
const navMsg2 = "CLICK HERE FOR FREE SCREENING";
const bannerMsg = "We'd like to get to know you better. Tell us about yourself and the sort of someone you'd like to meet. Don't worry, no one will see this besides the matchmakers at Tawkify.";
const aboutMsg = "Tell us a bit about yourself and who you'd like to meet. The more we know, the better. Be candid--this info is for our eyes only. Tawkify profiles and photos will forever be 100% confidential.";

const App = () => (
  <div className="main-app-container">
    <Navbar
      phoneNumber={phoneNumber}
      message1={navMsg1}
      message2={navMsg2}
    />
    <Banner message={bannerMsg}/>
    <AboutForm message={aboutMsg}/>
  </div>
);

export default App;
