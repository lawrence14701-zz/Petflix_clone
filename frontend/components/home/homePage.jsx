import React from "react";
import Slider from "../slider/slider";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldAddToList: null,
    };
    this.handleList = this.handleList.bind(this);
    this.showLogo = this.showLogo.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllGenres();
    this.props.getList()
    this.props.showArrowsOnBrowse("true"); //i want to show the arrows on this page
  }

  handleList() {
      const { addToList, movie, deleteListItem } = this.props;
      const { shouldAddToList } = this.state;
      if (shouldAddToList) {
        deleteListItem(movie.id);
        this.setState({ shouldAddToList: false });
      } else {
        addToList(movie.id);
        this.setState({ shouldAddToList: true });
      }
  }
  showLogo() {
    const { movie, myList } = this.props;
    const { shouldAddToList } = this.state;
    if (shouldAddToList === null) {
      let isMovieIdInList =
        myList.filter((obj) => obj.movie_id === movie.id).length > 0;
      if (isMovieIdInList) {
        this.setState({ shouldAddToList: isMovieIdInList });
        return (
          <>
            <i className="billboard-icon fas fa-check-circle"></i>
            <span>Add to my list</span>
          </>
        );
      }
    }
    if (shouldAddToList) {
      return (
        <>
          <i className="billboard-icon fas fa-check-circle"></i>
          <span>Add to my list</span>
        </>
      );
    } else {
      return (
        <>
          <i className="billboard-icon fas fa-plus-circle"></i>
          <span>Add to my list</span>
        </>
      );
    }
  }

  render() {
    const { genres, movies, showArrows } = this.props;
    const movieArray = Object.values(movies);
    // let randomNum = Math.floor(Math.random() * movieArray.length);
    const billboardMovie = movieArray[0];

    const advertisement =
      billboardMovie === undefined ? null : (
        <div className="billboard-container">
          <div className="billboard">
            <video
              autoPlay
              className="billboard-video"
              src={billboardMovie.video}
              ref="movieAd"
            />
          </div>
          <div className="b-info">
            <div className="b-title">{billboardMovie.title}</div>
            <div className="b-description">{billboardMovie.description}</div>
            <div className="b-buttons">
              <button className="b-play b-button">
                <Link to={`/watch/${billboardMovie.id}`}>
                  <i className="billboard-icon fas fa-play"></i>
                  <span>Play</span>
                </Link>
              </button>
              <button className="b-myList b-button" onClick={this.handleList}>
                {this.showLogo()}
                {/* <i className="billboard-icon fas fa-plus-circle"></i>
                <span>Add to my list</span> */}
              </button>
            </div>
          </div>
        </div>
      );
    const sliders = genres.map((genre) => {
      //find the movies that belong to a specific genre
      let movieCategory = [];
      if (typeof genre.movie_ids !== "undefined") {
        genre.movie_ids.forEach((movieId) => {
          movieCategory.push(movies[movieId]);
        });
      }
      return (
        <Slider
          key={genre.id}
          title={genre.name}
          movies={movieCategory}
          showArrows={showArrows}
        />
      );
    });
    return (
      <>
        {advertisement}
        <div className="dark-layer"></div>
        {sliders}
      </>
    );
  }
}

export default HomePage;
