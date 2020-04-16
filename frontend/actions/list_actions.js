import * as listUtil from "../util/list_util";
export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM"


//-----------REGULAR ACTION CREATORS-----------------

const receiveListItem = (listItem) => ({
  type: RECEIVE_LIST_ITEM,
  listItem,
});

const receiveList = (watchlist) => ({
  type: RECEIVE_LISTS,
  watchlist
});

const removeListItem = () => ({
  type: REMOVE_LIST_ITEM,
});

//-----------thunk actions --------------

export const addToList = (listItem) => (dispatch) => {
  return listUtil.addToList(listItem).then(
    (listItem) => dispatch(receiveListItem(listItem))
  );
};



export const fetchList = () => (dispatch) => {
  return listUtil.fetchList().then((list) => {
    return dispatch(receiveList(list));
  });
};


export const deleteListItem = (watchlistId) => (dispatch) => {
  return listUtil.deleteListItem(watchlistId).then((watchlistId) => dispatch(removeListItem(watchlistId)));
};
