import React from 'react';

class StepsIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="steps-main">
        <div className="steps-numbers">
          <div className="steps-circle-1">1</div>
          <div className="steps-line"></div>
          <div className="steps-circle-2">2</div>
          <div className="steps-line"></div>
          <div className="steps-circle-3">3</div>
        </div>
        <div className="steps-info-box">
          <div className="steps-info-1">ABOUT YOURSELF</div>
          <div className="steps-info-2">IDEAL PARTNER</div>
          <div className="steps-info-3">ADD PHOTOS</div>
        </div>
      </div>
    );
  }
}

export default StepsIndicator;
