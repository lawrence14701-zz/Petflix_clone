import { connect } from "react-redux";
// import { fetchGenre, fetchAllGenres } from "../../actions/video_actions";
import SliderItem from "./sliderItem";
import { addToList, fetchList, deleteListItem } from '../../actions/list_actions'


const mstp = (state, ownprops) => {
  return {
   myList: Object.values(state.entities.myList) 
  };
};

const mdtp = (dispatch) => ({
  addToList: (listItem) => dispatch(addToList(listItem)),
  getList: () => dispatch(fetchList()),
  deleteListItem: (watchlistId) => dispatch(deleteListItem(watchlistId))
});

export default connect(mstp, mdtp)(SliderItem);
