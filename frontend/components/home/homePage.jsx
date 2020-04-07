import React from "react";
import Slider from "./slider";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playingAd: true, //i want to pass this state down to slider item and set it to false when i hover over a movie or add an event listener to the video
    };
  }
  componentDidMount() {
    this.props.fetchAllGenres();
  }

  render() {
    const { genres, movies } = this.props;
    console.log(Object.values(movies)[Math.floor(Math.random()) * 20]);
    const randomMovie = Object.values(movies)[Math.floor(Math.random() * 20)];

    const advertisement =
      randomMovie === undefined ? null : (
        <div className="vid-container">
          <video
            className="advertise-video"
            src={randomMovie.video}
            ref="movieAd"
          />
          <div className="ad-info">
            <div id="ad-title">{randomMovie.title}</div>
            <div id="ad-description">{randomMovie.description}</div>
            <div id="ad-buttons">
              <button id="ad-play">
                <i className="fas fa-play"></i>Play
              </button>
              <button id="ad-list">
                <i className="fas fa-plus-circle"></i>Add to my list
              </button>
            </div>
          </div>
        </div>
      );

    const sliders = genres.map((genre) => {
      //find the movies that belong to a specific genre
      let movieCategory = [];
      genre.movie_ids.forEach((movieId) => {
        movieCategory.push(movies[movieId]);
      });
      return (
        <Slider key={genre.id} title={genre.name} movies={movieCategory} />
      );
    });
    return (
      <>
        <div className="advertise">{advertisement}</div>
        {sliders}
      </>
    );
  }
}

export default HomePage;
