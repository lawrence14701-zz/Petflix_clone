import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER
} from "../../actions/session_actions";

const sessionErrorsReducer = (oldstate = [], action) => {
  Object.freeze(oldstate);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.session.responseJSON;
    default:
      return oldstate;
  }
};

export default sessionErrorsReducer;
