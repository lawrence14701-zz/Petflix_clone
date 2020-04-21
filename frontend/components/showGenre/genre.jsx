import React from "react";
import Slider from "../slider/slider";
import genre_container from "./genre_container";

class Genre extends React.Component {
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
    this.props.updateShowItems(showItems);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
    this.props.fetchAllGenres();
    this.updatePageItems();
    this.props.hideArrowsOnGenres("false");
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
      this.props.updateShowItems(showItemsNewVal);
    }
  }

  render() {
     const { genre, movies, showArrows, showItems} = this.props;
    if (genre) {
      let movieCategory = [];
      genre.movie_ids.forEach((movieId) => {
        movieCategory.push(movies[movieId]);
      });
      let movieRows = [];
      let numberOfRows = movieCategory.length / showItems;
      // movieCategory = [all my movies for a specific category]
      // movierows = is an integer that represents how many rows i can make based on windowsize
      for (let i = 0; i < numberOfRows; i++) {
        let movieRow = [];
        for (let j = 0; j < showItems; j++) {
          let movie = movieCategory.pop();
          if (movie) {
            movieRow.push(movie);
          }
        }
        movieRows.push(movieRow);
      }
      return (
        <>
          <div className="gallery-title">
            <div id="genre-title">{genre.name}</div>
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
        </>
      );
    } else {
      return null;
    }
  }
}

export default Genre;

