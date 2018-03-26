import React from 'react';
// props:
// step: string indicating which step to highlight
class StepsIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circleOff: "steps-circle",
      circleOn: "steps-circle steps-active",
      infoOff:"steps-info",
      infoOn:"steps-info steps-info-active",
    };
  }

  render() {
    return (
      <div className="steps-main">
        <div className="steps-numbers">
          <div className={this.props.step === "1" ? this.state.circleOn : this.state.circleOff}>
            1
          </div>
          <div className="steps-line"></div>
          <div className={this.props.step === "2" ? this.state.circleOn : this.state.circleOff}>
            2
          </div>
          <div className="steps-line"></div>
          <div className={this.props.step === "3" ? this.state.circleOn : this.state.circleOff}>
            3
          </div>
        </div>
        <div className="steps-info-box">
          <div className={this.props.step === "1" ? this.state.infoOn : this.state.infoOff}>
            ABOUT YOURSELF
          </div>
          <div
            className={this.props.step === "2" ? this.state.infoOn : this.state.infoOff}
            id="steps-2"
          >
            IDEAL PARTNER
          </div>
          <div
            className={this.props.step === "3" ? this.state.infoOn : this.state.infoOff}
            id="steps-3"
          >
            ADD PHOTOS
          </div>
        </div>
      </div>
    );
  }
}

export default StepsIndicator;
