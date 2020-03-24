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
      // <div className="wrapper">
      //   <h1 className="page-head">Petflix Originals</h1>

      //   <div className="whole-slider">
      //     <div className="slider-wrapper">
      //       <div className="slider-item">
      //         <div className='slider-item-inner'></div>
      //       </div>
      //       <div className="slider-item">
      //         <div className='slider-item-inner'></div>
      //       </div>
      //       <div className="slider-item">
      //         <div className='slider-item-inner'></div>
      //       </div>
      //       <div className="slider-item">
      //         <div className='slider-item-inner'></div>
      //       </div>
      //       <div className="slider-item">
      //         <div className='slider-item-inner'></div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Home;
