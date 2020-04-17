import { connect } from "react-redux";
// import { fetchGenre, fetchAllGenres } from "../../actions/video_actions";
import SliderItem from "./sliderItem";
import { addToList, fetchList, deleteListItem } from '../../actions/list_actions'
import {playingBillBoard} from '../../actions/video_actions'


const mstp = (state, ownprops) => {
  return {
    myList: Object.values(state.entities.myList),
    playingBillBoard: state.entities.billBoard,
  };
};

const mdtp = (dispatch) => ({
  addToList: (listItem) => dispatch(addToList(listItem)),
  getList: () => dispatch(fetchList()),
  deleteListItem: (watchlistId) => dispatch(deleteListItem(watchlistId)),
  toggleBillBoard: (billBoard) => dispatch(playingBillBoard(billBoard)),
});

export default connect(mstp, mdtp)(SliderItem);
