import React from 'react';
import StepsIndicator from './steps_indicator';
import { withRouter } from 'react-router-dom';
// props:
// message: string
class AboutForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // gender
      gender: "",
      // gender seeking
      seeking: "",
      // zipcode
      location: "",
      // birthday month
      month: "",
      // birthday day
      day: "",
      // birthday year
      year: "",
      // height in inches
      height: "",
      // height preference
      heightPref: false,
      // occupation
      occupation: "",
      // income
      income: "",
      // income preference
      incomePref: false,
      // interests
      interests: "",
    };
    this.toggleHeightButton = this.toggleHeightButton.bind(this);
    this.toggleIncomeButton = this.toggleIncomeButton.bind(this);
  }

  toggleHeightButton() {
    this.setState({heightPref: !(this.state.heightPref)});
  }

  toggleIncomeButton() {
    this.setState({incomePref: !(this.state.incomePref)});
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    let heights = [];
    for (let i = 48; i <= 84; i++) {
      heights.push(i);
    }
    console.log(this.props);
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
          <div className="about-main">
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
            <div className="about-group">
              <span className="about-bold">YOUR HEIGHT</span>
              <select
                className="about-select"
                onChange={this.update("height")}>
                <option style={{display: "none"}} selected value=""></option>
                {
                  heights.map(height => (
                    <option key={height} value={height}>
                      {`${Math.floor(height / 12)} ft. ${height % 12 === 0 ? "" : `${height % 12} in.`}`}
                    </option>
                  ))
                }
              </select>
              <span class="about-small">What is your height?</span>
            </div>
            <div className='about-group'>
              <span className="about-bold">OCCUPATION</span>
              <textarea
                className="about-input"
                onChange={this.update("occupation")}
                value={this.state.occupation}>
              </textarea>
              <span className="about-small">What do you do?</span>
            </div>
            <div className="about-height-box">
              <div className="about-buttons-box">
                <button
                  className={this.state.incomePref === true ? "button-on" : "button-off"}
                  onClick={() => this.toggleIncomeButton()}>Yes
                </button>
                <button
                  className={this.state.incomePref === false ? "button-on" : "button-off"}
                  onClick={() => this.toggleIncomeButton()}>No
                </button>
              </div>
              <span className="about-height">
                Is income a factor in your match preferences?
              </span>
            </div>
          </div>
          <div className="about-main">
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
              <span class="about-small">
                Select the sexual orientation you're seeking.
              </span>
            </div>
            <div className="about-group">
              <span className="about-bold">YOUR BIRTHDAY</span>
              <div className="about-birthday">
                <input
                  className="about-month-day"
                  type="text"
                  placeholder="MM"
                  value={this.state.month}
                  onChange={this.update("month")}/>
                <input
                  className="about-month-day"
                  type="text"
                  placeholder="DD"
                  value={this.state.day}
                  onChange={this.update("day")}/>
                <input
                  className="about-year"
                  type="text"
                  placeholder="YYYY"
                  value={this.state.year}
                  onChange={this.update("year")}/>
              </div>
            </div>
            <div className="about-group">
              <div className="about-buttons-box">
                <button
                  className={this.state.heightPref === true ? "button-on" : "button-off"}
                  onClick={() => this.toggleHeightButton()}>Yes
                </button>
                <button
                  className={this.state.heightPref === false ? "button-on" : "button-off"}
                  onClick={() => this.toggleHeightButton()}>No
                </button>
              </div>
              <span className="about-height">
                Is height a factor in your match preferences?
              </span>
            </div>
            <div className="about-income-box">
              <span className="about-bold">INCOME</span>
              <select
                className="about-select"
                onChange={this.update("income")}>
                <option style={{display: "none"}} selected value=""></option>
                <option value="1">Less than $40,000</option>
                <option value="2">$40,000 - $60,000</option>
                <option value="3">$60,000 - $80,000</option>
                <option value="4">$80,000 - $100,000</option>
                <option value="5">$100,000 - $125,000</option>
                <option value="6">$125,000 - $150,000</option>
                <option value="7">$150,000 - $200,000</option>
                <option value="8">$200,000 - $250,000</option>
                <option value="9">$250,000 - $500,000</option>
                <option value="10">$500,000 - $1,000,000</option>
                <option value="0">Rather not say</option>
              </select>
              <span class="about-small">
                Why? This is one form of an indicator...
              </span>
            </div>
            <div className='about-group'>
              <span className="about-bold">INTERESTS</span>
              <textarea
                className="about-input"
                onChange={this.update("interests")}
                value={this.state.interests}>
              </textarea>
              <span className="about-small">
                Tell us a little more about yourself and what you like to do. We read everything, so please share!
              </span>
            </div>
          </div>
        </div>
        <button className="about-save-button">
          SAVE AND CONTINUE
        </button>
      </div>
    );
  }
}

export default withRouter(AboutForm);
