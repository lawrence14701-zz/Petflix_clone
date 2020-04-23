import { connect } from "react-redux";
import {
  search,
  clearSearch,
  showArrows,
  receiveShowItems,
} from "../../actions/video_actions";
import Search from "./search";

const mapStateToProps = (state, ownprops) => {
  return {
    movies: Object.values(state.entities.search),
    showArrows: state.entities.showArrows,
    showItems: state.entities.showItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSearch: () => dispatch(clearSearch()),
    hideArrowsOnMovies: (hide) => dispatch(showArrows(hide)),
    updateShowItems: (showItems) => dispatch(receiveShowItems(showItems)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
