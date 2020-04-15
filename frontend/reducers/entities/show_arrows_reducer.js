import { SHOW_ARROWS } from "../../actions/video_actions";

const showArrowsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SHOW_ARROWS:
      return action.showArrow;
    default:
      return oldState;
  }
};

export default showArrowsReducer;
