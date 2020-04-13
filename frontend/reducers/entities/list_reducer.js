import { RECEIVE_LIST_ITEM, RECEIVE_LISTS } from "../../actions/list_actions";

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTS:
      return Object.assign({}, oldState, { [action.user.id]: action.watchlist });
    default:
      return oldState;
  }
};

export default userReducer;
