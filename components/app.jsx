import React from 'react';
// components
import Navbar from './navbar';
import Banner from './banner';
import StepsIndicator from './steps_indicator';

const App = () => (
  <div className="main-app-container">
    <Navbar/>
    <Banner/>
    <StepsIndicator step="1"/>
  </div>
);

export default App;
