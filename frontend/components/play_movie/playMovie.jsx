import React from "react";
import { Link } from "react-router-dom";

class PlayMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoviePlayer = this.togglePlayPause.bind(this);
    this.handleTimeUpdate = this.timeUpdate.bind(this);
    // this.barColor = this.refs.barColor;
    // this.moviePlayer = this.refs.moviePlayer;

    this.state = {
      playing: false,
    };
  }

  timeUpdate() {
    const barColor = this.refs.barColor; //create ref ()
    const moviePlayer = this.refs.moviePlayer;
    let barPosition = (moviePlayer.currentTime / moviePlayer.duration) * 100;
    $(barColor).css({
      width: `${barPosition}%`,
    });
  }

  togglePlayPause() {
    const { playing } = this.state;
    const moviePlayer = this.refs.moviePlayer;
    const currentState = this.state.playing;
    this.setState({ playing: !currentState });

    playing ? moviePlayer.pause() : moviePlayer.play();
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    const movie = this.props.movie;
    const { playing } = this.state;
    if (movie) {
      return (
        <div className="play-container">
          <div id="play-video">
            <div id="back">
              <Link to="/browse">
                <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
            <video
              className="full-screen-movie"
              src={movie.video}
              ref="moviePlayer"
              onTimeUpdate={this.handleTimeUpdate}
            />
            <div className="controls">
              <div className="bar">
                <div className="bar-color" ref="barColor"></div>
              </div>
              <div className="buttons">
                <button
                  id={playing ? "pause-movie" : "play-movie"}
                  onClick={this.handleMoviePlayer}
                ></button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PlayMovie;
