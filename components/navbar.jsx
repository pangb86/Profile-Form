import React from 'react';
// props:
// phoneNumber: string
// message1: string
// message2: string
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <span className="navbar-phone-number">{this.props.phoneNumber}</span>
          <div className="navbar-screening">
            <i class="fa fa-phone"></i>
            <div className="navbar-chat">
              <span className="navbar-light">{this.props.message1}</span>
              <span className="navbar-bold">{this.props.message2}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
