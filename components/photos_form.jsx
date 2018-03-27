import React from 'react';
import StepsIndicator from './steps_indicator';
// props:
// message: string
class PhotosForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-main">
        <StepsIndicator step="3"/>
        <div className="about-tell-us">
          Upload recent photos of yourself
        </div>
        <div className="about-message">
          {this.props.message}
        </div>
        <input
          type="file"
          id="file-button"
          multiple accept="image/*"
          className="photos-input"/>
        <label class="photos-button" for="file-button">CHOOSE FILE</label>
      </div>
    );
  }
}

export default PhotosForm;
