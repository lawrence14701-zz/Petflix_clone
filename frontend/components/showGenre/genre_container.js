import { connect } from "react-redux";
import { fetchGenre, fetchAllGenres } from "../../actions/video_actions";
import Genre from "./genre";

const mstp = (state, ownprops) => {
  return {
    genre: state.entities.genres[ownprops.match.params.genreId],
    genres: Object.values(state.entities.genres),
    movies: state.entities.movies,
  };
};

const mdtp = (dispatch) => ({
  fetchGenre: (genre) => dispatch(fetchGenre(genre)),
  fetchAllGenres: () => dispatch(fetchAllGenres())
});

export default connect(mstp, mdtp)(Genre);
