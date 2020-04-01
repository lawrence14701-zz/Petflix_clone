import React from "react";
import Slider from "./slider";

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie } = this.props;
    const { cover, title, video } = movie;
    return (
      <div className="sliderItem">
        <div className="sliderItemInner">
          <img className="cover" src={cover} />

          <div className="preview">
            <video className="playVideo" src={video}></video>
            <h3 className="movieTitle">{title}</h3>
            <div className="info">
              <h3 className="age">TV-14</h3>
              <h3 className='duration'>28193</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
