import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-main">
        <div className="navbar-links">
          <img src="assets/Tawkify_White_Logo.png"></img>
          <a href="#">How it works</a>
          <a href="#">FAQ</a>
          <a href="#">Stories</a>
          <a href="#">Sign In</a>
        </div>
        <div className="navbar-phone">
          <span className="navbar-phone-number">1 (888) 494-7280</span>
          <div className="navbar-screening">
            <i class="fa fa-phone"></i>
            <div className="navbar-chat">
              <span className="navbar-light">Chat with a love expert</span>
              <span className="navbar-bold">CLICK HERE FOR FREE SCREENING</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
