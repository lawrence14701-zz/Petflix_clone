import React from "react";
import SliderItem from "../slider/sliderItem";

class Genre extends React.Component {
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
    let mv = 100 / showItems;
    this.setState({
      showItems,
    });
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
    this.props.fetchAllGenres();
    this.updatePageItems();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.updatePageItems.bind(this));
    }
  }

  render() {
    const { genre, movies } = this.props;
    const { showItems } = this.state;
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
          movieRow.push(movie);
        }
        movieRows.push(movieRow);
      }
      debugger
      return (
        <>
          <div id="genre-title">{genre.name}</div>
          <div>
            {movieRows.map((movieRow) => {
              return movieRow.map((movie)=>{
                return <SliderItem movie={movie} />
              })
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
