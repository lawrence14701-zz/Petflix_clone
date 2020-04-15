import { connect } from "react-redux";
// import { fetchGenre, fetchAllGenres } from "../../actions/video_actions";
import SliderItem from "./sliderItem";
import { addToList } from '../../actions/list_actions'

const mstp = (state, ownprops) => {
  return {
   
  };
};

const mdtp = (dispatch) => ({
  addToList: (listItem) => dispatch(addToList(listItem))
});

export default connect(mstp, mdtp)(SliderItem);
