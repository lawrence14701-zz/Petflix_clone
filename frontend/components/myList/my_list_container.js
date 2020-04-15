import MyList from "./my_list";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchList } from "../../actions/list_actions";
import { showArrows, fetchAllGenres} from '../../actions/video_actions';

const msp = (state) => {
  return {
  myList: Object.values(state.entities.myList),
  movies: state.entities.movies,
  showArrows: state.entities.showArrows,
  }
};

const mdp = (dispatch) => ({
  fetchMyList: () => dispatch(fetchList()),
  hideArrowsOnMyList: (hide) => dispatch(showArrows(hide)),
  fetchAllGenres: () => dispatch(fetchAllGenres()),
});

export default withRouter(connect(msp, mdp)(MyList));
