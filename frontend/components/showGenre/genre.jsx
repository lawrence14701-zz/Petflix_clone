import React from "react";
import SliderItem from '../slider/sliderItem';

class Genre extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
  }

  render() {
    const { genre, movies } = this.props;
    if (genre) {
        debugger
    // genre.movie_ids.forEach((movieId) => {
    //   movieCategory.push(movies[movieId]);
    // });
      return (
          <>
      <div>{genre.name}</div>
      <ul>
          {
              genre.movies.map((movie,idx) => {
               return <SliderItem key={idx} movie={movie}/>
              })
          }
      </ul>
      </>
      )
    } else {
      return null;
    }
  }
}

export default Genre;
