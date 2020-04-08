import { connect } from "react-redux";
import { fetchGenre } from "../../actions/video_actions";
import Genre from "./genre";

const mstp = (state, ownprops) => {
  return {
    genre: state.entities.genres[ownprops.match.params.genreId],
    movies: state.entities.movies,

  };
};

const mdtp = (dispatch) => ({
  fetchGenre: (genre) => dispatch(fetchGenre(genre)),
});

export default connect(mstp, mdtp)(Genre);
