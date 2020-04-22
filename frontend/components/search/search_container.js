import { connect } from "react-redux";
import {
  search,
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
    hideArrowsOnMovies: (hide) => dispatch(showArrows(hide)),
    updateShowItems: (showItems) => dispatch(receiveShowItems(showItems)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
