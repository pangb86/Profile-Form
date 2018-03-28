import React from 'react';
import StepsIndicator from './steps_indicator';

class PartnerForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="about-main">
        <StepsIndicator step="2"/>
        <div className="about-tell-us">
          PLACEHOLDER
        </div>
        <button className="about-save-button">
          SAVE AND CONTINUE
        </button>
      </div>
    );
  }
}

export default PartnerForm;
