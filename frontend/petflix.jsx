import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import {addToList,fetchList} from './util/list_util';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;


  if (window.currentUser) {
    const preloadedState = {
      entities: {
        user: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);

  window.addToList = addToList;
  window.fetchList = fetchList;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
