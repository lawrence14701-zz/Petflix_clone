import * as APIUtilSessions from "../util/session_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

//-----------REGULAR ACTION CREATORS-----------------

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    session: errors
  };
};

//---------------THUNK ACTIONS---------------------

export const signup = user => dispatch => {
  return APIUtilSessions.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  );
};

export const logout = () => dispatch => {
  return APIUtilSessions.logout().then(() => dispatch(logoutCurrentUser()));
};

export const login = user => dispatch => {
  return APIUtilSessions.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  );
};
