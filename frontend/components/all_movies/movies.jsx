import React from "react";
import SliderItem from "../slider/sliderItem";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: 1,
    };
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
    this.setState({
      showItems,
    });
  }

  componentDidMount() {
    this.props.fetchAllGenres();
    this.updatePageItems();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.updatePageItems.bind(this));
    }
  }

  render() {
    const { movies } = this.props;
    const { showItems } = this.state;
    if (Object.getOwnPropertyNames(movies).length !== 0) {
      let totalMovies = Object.values(movies);
      let movieRows = [];
      let numberOfRows = totalMovies.length / showItems;

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
      return (
        <>
          <div className="gallery-title">
            <div id="genre-title">Movies</div>
          </div>
          <div className="gallery">
            {movieRows.map((movieRow) => {
              return (
                <div className="sliderMask sliderSpace">
                  {movieRow.map((movie) => {
                    return <SliderItem movie={movie} />;
                  })}
                </div>
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

export default Movies;
