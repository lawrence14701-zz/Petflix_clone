import {RECEIVE_ALL_MOVIES, CLEAR} from "../../actions/video_actions";

const searchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return Object.assign({}, oldState, action.movies);
    case CLEAR:
      return {}
    default:
      return oldState;
  }
};

export default searchReducer;
