import { connect } from "react-redux";
import { fetchMovie, fetchAllGenres } from "../../actions/video_actions";
import PlayMovie from "./playMovie";


const mstp = (state, ownprops) => {
  return {
    movie: state.entities.movies[ownprops.match.params.movieId]
  };
};

const mdtp = dispatch => ({
  fetchMovie: movie => dispatch(fetchMovie(movie)),
  fetchAllGenres: () => dispatch(fetchAllGenres())
});

export default connect(mstp, mdtp)(PlayMovie);
