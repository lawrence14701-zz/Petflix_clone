import { connect } from "react-redux";
import { fetchAllGenres, showArrows, receiveShowItems, fetchGenre } from "../../actions/video_actions";
import Movies from "./movies";

const mapStateToProps = (state,ownprops) => {
  return {
    genre: state.entities.genres[ownprops.match.params.genreId],
    movies: state.entities.movies,
    showArrows: state.entities.showArrows,
    showItems: state.entities.showItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenre: (genre) => dispatch(fetchGenre(genre)),
    fetchAllGenres: () => dispatch(fetchAllGenres()),
    hideArrowsOnMovies: (hide) => dispatch(showArrows(hide)),
    updateShowItems: (showItems) => dispatch(receiveShowItems(showItems)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
