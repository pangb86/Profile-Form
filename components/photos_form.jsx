import React from 'react';
import StepsIndicator from './steps_indicator';
// props:
// message1: string
// message2: string
class PhotosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // file path of photo
      photoPath:""
    };
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return (
      <div className="about-main">
        <StepsIndicator step="3"/>
        <div className="about-tell-us">
          Upload recent photos of yourself
        </div>
        <div className="photos-message">
          {this.props.message1}
        </div>
        <div className="photos-drop">
          <i class="fa fa-photo"></i>
          <div className="photos-drop-message">
            Drag and drop a photo
          </div>
        </div>
        <input
          type="file"
          id="file-button"
          multiple accept="image/*"
          className="photos-input"
          value={this.state.photo}
          onChange={this.update("photo")}/>
        <label class="photos-button" for="file-button">CHOOSE FILE</label>
        <div className="photos-message">
          {this.props.message2}
        </div>
        <button className="about-save-button">
          SAVE AND CONTINUE
        </button>
      </div>
    );
  }
}

export default PhotosForm;
