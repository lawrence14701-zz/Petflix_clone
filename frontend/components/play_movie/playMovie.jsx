import React from "react";
import { Link } from "react-router-dom";

class PlayMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoviePlayer = this.togglePlayPause.bind(this)

    this.state = {
      playing: false,
    }
  }

  togglePlayPause(){
    const { playing } = this.state
    const moviePlayer = this.refs.moviePlayer
    const currentState = this.state.playing;
    this.setState({playing: !currentState});

    playing ? moviePlayer.pause() : moviePlayer.play();
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
    // const moviePlayer = this.refs.moviePlayer;
    // debugger
    // const bar = this.refs.bar;
    // moviePlayer.addEventListener('timeupdate', function(){
    //   barPosition = moviePlayer.currentTime / moviePlayer.duration;
    //   $(bar).css({
    //     'width': '20%'
    //   })
    //   if(moviePlayer.ended) this.setState({playing:false})
    // })
  }

  render() {
    const movie = this.props.movie;
    const {playing} = this.state;
    if (movie) {
      return (
        <div className="play-container">
          <div id="play-video">
            <div id='back'><Link to='/browse'><i className="fas fa-arrow-left"></i></Link></div>
            <video className="full-screen-movie" src={movie.video} ref='moviePlayer'/>
            <div className="controls">
              <div className="bar">
                <div className="bar-color" ref='bar'></div>
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
