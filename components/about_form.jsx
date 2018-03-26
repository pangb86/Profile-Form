import React from 'react';
import StepsIndicator from './steps_indicator';
// props:
// message: string
class AboutForm extends React.Component {
  constructor(){
    super();
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
        <div classNam="about-input-main">
          <div className="about-input-1">
            <div className="about-gender">
              <span>Gender</span>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="about-input-2">
          </div>
        </div>
      </div>
    );
  }
}

export default AboutForm;
