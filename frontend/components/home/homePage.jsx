import React from "react";
import Slider from './slider';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllGenres();
  }

  render() {
    const {genres,movies} = this.props;
    const sliders = genres.map(genre => {
      //find the movies that belong to a specific genre
      let movieCategory = [];
      genre.movie_ids.forEach(movieId =>{
        movieCategory.push(movies[movieId]);
      })
    return ( 
        <Slider key={genre.id} title={genre.name} movies={movieCategory}/>
    )
    })
    return (
      <>
      {sliders}
      </>
    );
  }
}

export default HomePage;
