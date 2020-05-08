import { RECEIVE_LISTS, REMOVE_LIST_ITEM } from "../../actions/list_actions";

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTS:
      return Object.assign({}, oldState, action.watchlist);
      case REMOVE_LIST_ITEM:
        return Object.assign({}, Object.values(oldState).filter(
          (id) => id.movie_id !== parseInt(action.watchlistId.id)));
    default:
      return oldState;
  }
};

export default userReducer;
