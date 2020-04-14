import { CONTENT_OPEN } from "../../actions/video_actions";

const contentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case CONTENT_OPEN:
      return Object.assign({}, oldState, action.isContentOpen);
    default:
      return oldState;
  }
};

export default contentReducer;
