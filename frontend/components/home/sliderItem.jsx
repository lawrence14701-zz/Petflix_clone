import React from "react";
import Slider from "./slider";

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
 
  }

  handleSubmit(){
      const { onOpen, movie } = this.props;
      onOpen(movie)
  }


  render() {
    const { movie, isContentOpen } = this.props; //so if isContentOpen is not null then we want to prevent hover effect and also apply the white border
    const { cover, title, video } = movie;
    const duration = `${Math.floor(video.length / 60)} min ${video.length %
      60} sec`;
    return (
      <div className= "sliderItem">
        <div className="sliderItemInner">
          <img className="cover" src={cover} />

          <div className="preview">
            <video className="playVideo" src={video}></video>
            <div className="info">
              <h3 className="movieTitle">{title}</h3>
              <h3 className="age">TV-14</h3>
              <h3 className="duration">{duration}</h3>
            </div>
            <button className="openContent" onClick={this.handleSubmit}>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
