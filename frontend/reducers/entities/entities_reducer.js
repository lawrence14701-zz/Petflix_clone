import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import moviesReducer from "./movies_reducer";
import genresReducer from "./genres_reducer";
import showArrowsReducer from './show_arrows_reducer'
import myListReducer from './list_reducer';
import billBoardReducer from './billboard_reducer'
import showItemsReducer from "./showItems";

const entitiesReducer = combineReducers({
  genres: genresReducer,
  movies: moviesReducer,
  user: userReducer,
  myList: myListReducer,
  showArrows: showArrowsReducer, //gets set to true or false
  billBoard: billBoardReducer,
  showItems: showItemsReducer
});

export default entitiesReducer;
