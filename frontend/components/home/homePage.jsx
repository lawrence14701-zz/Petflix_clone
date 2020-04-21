import React from "react";
import Slider from "../slider/slider";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldAddToList: null,
      muted: false,
    };
    this.handleList = this.handleList.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllGenres();
    this.props.getList();
    this.props.showArrowsOnBrowse("true"); //i want to show the arrows on this page
    this.props.toggleBillBoard("true");
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


  componentDidUpdate(prevProps, prevState) {
    if (this.props.playingBillBoard !== prevProps.playingBillBoard) {
      if (this.props.playingBillBoard === "false") {
          this.setState({muted: true});
      }
    }
  }

  render() {
    console.log('home', this.props)
    const { genres, movies, showArrows } = this.props;
    const {shouldAddToList} = this.state;
    const movieArray = Object.values(movies);
    const billboardMovie = movieArray[0];

    const advertisement =
      billboardMovie === undefined ? null : (
        <div className="billboard-container">
          <div className="billboard">
            <video
              autoPlay
              muted = {this.state.muted}
              className="billboard-video"
              src={billboardMovie.video}
              ref="billBoard"
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
                {shouldAddToList ? 
                <>
                  <i className="billboard-icon fas fa-plus-circle"></i>
          <span>Add to my list</span>
          </>
          :
          <>
           <i className="billboard-icon fas fa-check-circle"></i>
          <span>Add to my list</span>
          </>
                }
                {/* {this.showLogo()} */}
                {/* <i className="billboard-icon fas fa-plus-circle"></i>
                <span>Add to my list</span> */}
              </button>
            </div>
          </div>
        </div>
      );
    let sliderNumber = 0;
    const sliders = genres.map((genre) => {
      sliderNumber += 1;
      //find the movies that belong to a specific genre
      let movieCategory = [];
      if (typeof genre.movie_ids !== "undefined") {
        genre.movie_ids.forEach((movieId) => {
          movieCategory.push(movies[movieId]);
        });
      }
      return (
        <Slider
          firstSlider={sliderNumber}
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
        {sliders}
      </>
    );
  }
}

export default HomePage;
