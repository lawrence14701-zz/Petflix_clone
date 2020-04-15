import React from "react";
import { Link } from "react-router-dom";

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePreview = this.previewMovie.bind(this);
    this.addToList = this.addToList.bind(this);

    this.state = {
      playingPreview: false,
    };
  }

  handleSubmit() {
    const { onOpen, movie } = this.props;
    onOpen(movie);
  }

  addToList(){
    const { addToList, movie} = this.props
    addToList(movie.id)
  }

  previewMovie() {
    const { playingPreview } = this.state;
    const currentState = this.state.playingPreview;
    this.setState({ playingPreview: !currentState });
    const video = this.refs.previewMovie;
    if (!playingPreview) {
      video.play();
      video.muted = false;
    } else {
      video.pause();
      video.currenttime = 0;
      video.load();
      video.muted = true;
    }
  }

  render() {
    const { movie, isContentOpen } = this.props; //so if isContentOpen is not null then we want to prevent hover effect and also apply the white border
    const { cover, title, video } = movie;
    
    const duration = `${Math.floor(video.length / 60)} min ${video.length % 60} sec`;
    return (
      <div className="sliderItem">
        <div
          className="sliderItemInner"
          onMouseEnter={this.handlePreview}
          onMouseLeave={this.handlePreview}
        >
          <img className="cover" src={cover} />
          <div className="preview">
            <video muted className="playVideo" src={video} ref="previewMovie" />
            <Link to={`/watch/${movie.id}`}>
              <div className="play">
                <i className="far fa-play-circle"></i>
              </div>
            </Link>
            <div className="info">
              <h3 className="movieTitle">{title}</h3>
              <h3 className="age">TV-14</h3>
              <h3 className="duration">{duration}</h3>
            </div>
            <div className="myList" onClick={this.addToList}>
              <i className="fas fa-plus-circle"></i>
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
