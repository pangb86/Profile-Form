import React from 'react';

class StepsIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  // <div className="steps-info">ABOUT YOURSELF</div>
  // <div className="steps-info">IDEAL PARTNER</div>
  // <div className="steps-info">ADD PHOTOS</div>

  render() {
    return (
      <div className="steps-main">
        <ul>
          <li className="steps-one">1</li>
          <li className="steps-two">2</li>
          <li className="steps-three">3</li>
        </ul>
      </div>
    );
  }
}

export default StepsIndicator;
