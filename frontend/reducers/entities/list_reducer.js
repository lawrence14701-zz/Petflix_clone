import { RECEIVE_LISTS } from "../../actions/list_actions";

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTS:
      debugger
      return Object.assign({}, oldState, action.watchlist);
    default:
      return oldState;
  }
};

export default userReducer;
