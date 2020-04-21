import {

  RECEIVE_SHOW_ITEMS,
} from "../../actions/video_actions";

const showItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SHOW_ITEMS:
      return action.showItems;
    default:
      return oldState;
  }
};

export default showItemsReducer;
