import React from 'react';
import StepsIndicator from './steps_indicator';
// props:
// message: string
class AboutForm extends React.Component {
  constructor(){
    super();
    this.state = {
      gender:"",
      seeking:"",
      location:"",
    };
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return (
      <div className="about-main">
        <StepsIndicator step="1"/>
        <div className="about-tell-us">
          Tell us a bit about yourself
        </div>
        <div className="about-message">
          {this.props.message}
        </div>
        <div className="about-input-main">
          <div className="about-input-1">
            <div className="about-group">
              <span className="about-bold">YOUR GENDER</span>
              <select
                className="about-select"
                onChange={this.update("gender")}>
                <option style={{display: "none"}} selected value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span class="about-small">Select your gender.</span>
            </div>
            <div className="about-group">
              <span className="about-bold">LOCATION</span>
              <input
                className="about-input"
                placeholder="Zipcode"
                type="text"
                onChange={this.update("location")}
                value={this.state.location}/>
              <span className="about-small">Where are you located?</span>
            </div>
          </div>
          <div className="about-input-2">
            <div className="about-group">
              <span className="about-bold">YOU ARE SEEKING</span>
              <select
                className="about-select"
                onChange={this.update("seeking")}>
                <option style={{display: "none"}} selected value=""></option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="both">Both</option>
              </select>
              <span class="about-small">Select the sexual orientation you're seeking.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutForm;
