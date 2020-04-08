import React from "react";
import SliderItem from "../slider/sliderItem";

class Genre extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
    this.props.fetchAllGenres();
  }

  render() {
    const { genre, movies } = this.props;
    if (genre) {
      let movieCategory = [];
      genre.movie_ids.forEach((movieId) => {
        movieCategory.push(movies[movieId]);
      });
      return (
        <>
          <div>{genre.name}</div>
          <div className='genreMoviesList'>
            {movieCategory.map((movie, idx) => {
              return <SliderItem key={idx} movie={movie} />
            })}
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

export default Genre;
