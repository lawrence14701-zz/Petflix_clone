import React from "react";
import Slider from "./slider";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllGenres();
  }

  render() {
    const { genres, movies } = this.props;
    const randomMovie = Object.values(movies)[Math.floor(Math.random())]; //why is it always on the same movie no matter what, shouldn't it be random

    const advertisement =
      randomMovie === undefined ? null : (
        <div className="vid-container">
          <video className="advertise-video" src={randomMovie.video}></video>
          <div className="ad-info">
            <div id="ad-title">{randomMovie.title}</div>
            <div id="ad-description">{randomMovie.description}</div>
            <div id="ad-buttons"> why is this not showing??!?!?!?!?!?!?!??!!?!
              {/* <button id="ad-play">
                <i className="fas fa-play"></i>Play
              </button>
              <button id="ad-list">
                <i className="fas fa-plus-circle"></i>Add to my list
              </button> */}
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
        <div className="advertise">
          {advertisement}
        </div>
        {sliders}
      </>
    );
  }
}

export default HomePage;
