import React from 'react';
// props:
// message: string
class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="banner-main">
        <div className="banner-info">
          <div>
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
