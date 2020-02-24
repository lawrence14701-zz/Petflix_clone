import { combineReducers } from "redux";
import sessionReducer from "./session/session_reducer";
import errorsReducer from "./errors/error_reducer";
import entitiesReducer from "./entities/user_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer, //<== this slice of state comes from my session folder, this is how a user loggins and logouts
  errors: errorsReducer //<== contains errors for logging and signup(so farrrr)
});

export default rootReducer;
