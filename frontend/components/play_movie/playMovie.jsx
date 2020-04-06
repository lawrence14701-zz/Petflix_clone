import React from "react";

class PlayMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoviePlayer = this.playMovie.bind(this)

    this.state = {
      playing: false,
    }
  }

  playMovie(){
    const { playing } = this.state
    const moviePlayer = this.refs.moviePlayer
    const currentState = this.state.playing;
    this.setState({playing: !currentState});

    playing ? moviePlayer.pause() : moviePlayer.play();
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    const movie = this.props.movie;
    const {playing} = this.state;
    if (movie) {
      return (
        <div className="play-container">
          <div id="play-video">
            <video className="full-screen-movie" src={movie.video} ref='moviePlayer'/>
            <div className="controls">
              <div className="bar">
                <div className="bar-color"></div>
              </div>
              <div className="buttons">
                <button id={playing ? 'pause-movie':'play-movie'} onClick={this.handleMoviePlayer}>
                </button>
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
