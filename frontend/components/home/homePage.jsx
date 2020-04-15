import React from "react";
import Slider from "../slider/slider";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playingAd: true, //i want to pass this state down to slider item and set it to false when i hover over a movie or add an event listener to the video
    };
  }
  componentDidMount() {
    this.props.fetchAllGenres();
    this.props.showArrowsOnBrowse('true') //i want to show the arrows on this page
  }
 

  render() {
    const { genres, movies, showArrows } = this.props;
    const movieArray = Object.values(movies);
    let randomNum = Math.floor(Math.random() * movieArray.length);
    const randomMovie = movieArray[randomNum];

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
                <Link to={`/watch/${randomMovie.id}`}>
                  <i className="ad-icon fas fa-play"></i>
                  <span>Play</span>
                </Link>
              </button>
              <button id="ad-list">
                <i className="ad-icon fas fa-plus-circle"></i>
                <span>Add to my list</span>
              </button>
            </div>
          </div>
        </div>
      );
    const sliders = genres.map((genre) => {
      //find the movies that belong to a specific genre
      let movieCategory = [];
      if(typeof genre.movie_ids !== 'undefined'){
        genre.movie_ids.forEach((movieId) => {
          movieCategory.push(movies[movieId]);
        });
      }
      return (
        <Slider key={genre.id} title={genre.name} movies={movieCategory} showArrows={showArrows} />
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
