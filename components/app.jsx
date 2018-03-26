import React from 'react';
// components
import Navbar from './navbar';
import Banner from './banner';
import StepsIndicator from './steps_indicator';

const phoneNumber = "1 (888) 494-7280";
const navMsg1 = "Chat with a love expert";
const navMsg2 = "CLICK HERE FOR FREE SCREENING";
const bannerMsg = 'We\'d like to get to know you better. Tell us about yourself and the sort of someone you\'d like to meet. Don\'t worry, no one will see this besides the matchmakers at Tawkify.';

const App = () => (
  <div className="main-app-container">
    <Navbar
      phoneNumber={phoneNumber}
      message1={navMsg1}
      message2={navMsg2}
    />
    <Banner message={bannerMsg}/>
    <StepsIndicator step="1"/>
  </div>
);

export default App;
