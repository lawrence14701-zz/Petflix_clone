import sessionErrorsReducer from "./session_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer
});

export default errorsReducer;
