import React from 'react';
import StepsIndicator from './steps_indicator';

class PartnerForm extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/photos");
  }

  render() {
    return (
      <div className="about-main">
        <StepsIndicator step="2"/>
        <div className="about-tell-us">
          PLACEHOLDER
        </div>
        <button className="about-save-button"
          onClick={this.handleClick}>
          SAVE AND CONTINUE
        </button>
      </div>
    );
  }
}

export default PartnerForm;
