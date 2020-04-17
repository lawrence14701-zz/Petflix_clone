import { PLAYING_BILLBOARD} from "../../actions/video_actions";

const billBoardReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case PLAYING_BILLBOARD:
      return action.billBoard;
    default:
      return oldState;
  }
};

export default billBoardReducer;
