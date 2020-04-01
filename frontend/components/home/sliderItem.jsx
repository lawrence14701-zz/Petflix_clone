import React from "react";
import Slider from "./slider";
import Content from "./content";

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.openContent.bind(this);
    // this.state = {
    //   activeMovieId: null,
    //   closeContent: false
    // };
  }

  openContent() {
    // const { activeMovieId } = this.state;
    // const currentSliderItem = this.props.movies[activeMovieId];
    console.log('working')
    // const {movie} = this.props;
    // return (<Content movie={movie} />);
  }

  render() {
    const { movie } = this.props;
    const { cover, title, video } = movie;
    const duration = `${Math.floor(video.length / 60)} min ${video.length %
      60} sec`;
    return (
      <div className="sliderItem">
        <div className="sliderItemInner">
          <img className="cover" src={cover} />

          <div className="preview">
            <video className="playVideo" src={video}></video>
            <div className="info">
              <h3 className="movieTitle">{title}</h3>
              <h3 className="age">TV-14</h3>
              <h3 className="duration">{duration}</h3>
            </div>
            <button className="openContent" onClick={this.handleOnClick}>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
