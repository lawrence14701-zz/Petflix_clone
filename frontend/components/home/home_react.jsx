import React from "react";
import VideoRow from './videoRow';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllGenres();
  }

  render() {
    const {genres,movies} = this.props;
    const rowOfVideos = genres.map(genre => {
      //find the movies that belong to a specific genre
      let movieCategory = [];
      genre.movie_ids.forEach(movieId =>{
        movieCategory.push(movies[movieId]);
      })
    return ( 
        <VideoRow key={genre.id} title={genre.name} movies={movieCategory}/>
    )
    })
    return (
      <>
      {rowOfVideos}
      </>
    );
  }
}

export default Home;
