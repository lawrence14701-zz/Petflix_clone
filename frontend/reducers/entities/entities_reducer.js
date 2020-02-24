import { combineReducers } from "redux";
import userReducer from "./userReducer";
import moviesReducer from "./movies_reducer";
import genresReducer from "./genres_reducers";

const entitiesReducer = combineReducers({
  user: userReducer,
//   genres: genresReducer,
//   movies: moviesReducer
});

export default entitiesReducer;
