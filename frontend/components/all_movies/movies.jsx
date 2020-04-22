import React from "react";
import Slider from "../slider/slider";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showItems: 6,
    // };
  }

  updatePageItems() {
    let windowWidth = window.innerWidth;
    let showItems = 1;
    if (windowWidth > 1800) {
      showItems = 6;
    } else if (windowWidth > 1260) {
      showItems = 5;
    } else if (windowWidth > 980) {
      showItems = 4;
    } else if (windowWidth > 768) {
      showItems = 3;
    } else if (windowWidth > 600) {
      showItems = 2;
    }
    this.props.updateShowItems(showItems)
  }

  componentDidMount() {
    if(this.props.match.params.genreId){
      this.props.fetchGenre(this.props.match.params.genreId);
    }
    this.props.fetchAllGenres();
    this.updatePageItems()
    this.props.hideArrowsOnMovies("false");
}

  componentWillMount() {
    this.updatePageItems();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.updatePageItems.bind(this));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const windowWidth = window.innerWidth;

    let showItemsNewVal;
    if (windowWidth > 1800) {
      showItemsNewVal = 6;
    } else if (windowWidth > 1260) {
      showItemsNewVal = 5;
    } else if (windowWidth > 980) {
      showItemsNewVal = 4;
    } else if (windowWidth > 768) {
      showItemsNewVal = 3;
    } else if (windowWidth > 600) {
      showItemsNewVal = 2;
    }

    if (showItemsNewVal && prevProps.showItems !== showItemsNewVal) {
      this.props.updateShowItems(showItemsNewVal)
    }
  }


  render() {
    const { movies, showArrows, showItems, genre } = this.props;
    const title = genre ? genre.name : 'Movies'
    let totalMovies = [];
    if (this.props.history.location.pathname !== '/movies') {
      if(typeof genre !== 'undefined'){
        genre.movie_ids.forEach((movieId) => {
          totalMovies.push(movies[movieId]);
        });
      }} else{
        totalMovies = Object.values(movies);
      }

    let movieRows = [];
    if (Object.getOwnPropertyNames(movies).length !== 0) {
      let numberOfRows = Math.ceil(totalMovies.length / showItems);
      for (let i = 0; i < numberOfRows; i++) {
        let movieRow = [];
        for (let j = 0; j < showItems; j++) {
          let movie = totalMovies.pop();
          if (movie) {
            movieRow.push(movie);
          }
        }
        movieRows.push(movieRow);
      }
    }
      return (
        <>
          <div className="gallery">
            <div className="gallery-title">
              <div id="genre-title">{title}</div>
            </div>
            <div className="gallery">
              {movieRows.map((movieRow, idx) => {
                return (
                  <>
                    <div className="sliderSpace">
                      <Slider
                        key={idx}
                        movies={movieRow}
                        showArrows={showArrows}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      );
    } 
  }




export default Movies;
