import { connect } from "react-redux";
import { fetchAllGenres } from "../../actions/video_actions";
import Movies from "./movies";

const mapStateToProps = (state) => {
  return {
    movies: state.entities.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGenres: () => dispatch(fetchAllGenres()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
