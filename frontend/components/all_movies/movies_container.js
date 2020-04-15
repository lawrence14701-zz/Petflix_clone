import { connect } from "react-redux";
import { fetchAllGenres, showArrows } from "../../actions/video_actions";
import Movies from "./movies";

const mapStateToProps = (state) => {
  return {
    movies: state.entities.movies,
    showArrows: state.entities.showArrows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGenres: () => dispatch(fetchAllGenres()),
    hideArrowsOnMovies: (hide) => dispatch(showArrows(hide)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
