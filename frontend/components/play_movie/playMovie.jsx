import React from "react";

class PlayMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      debugger
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    const movie = this.props.movie;
    if (movie) {
      return (
        <>
          <video
            className="full-screen-movie"
            src={movie.video}
            width="80"
            height="320"
            onMouseOut={this.pauseVideo}
            onMouseEnter={this.playVideo}
            controls
            autoPlay
          />
        </>
      );
    } else {
      return null;
    }
  }
}

export default PlayMovie;
