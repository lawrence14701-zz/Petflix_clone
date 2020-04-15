import * as listUtil from "../util/list_util";
export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";
export const RECEIVE_LISTS = "RECEIVE_LISTS";


//-----------REGULAR ACTION CREATORS-----------------

const receiveListItem = (listItem) => ({
  type: RECEIVE_LIST_ITEM,
  listItem,
});

const receiveList = (watchlist) => ({
  type: RECEIVE_LISTS,
  watchlist
});

//-----------thunk actions --------------

export const addToList = (listItem) => (dispatch) => {
  return APIUtilSessions.signup(listItem).then(
    (listItem) => dispatch(receiveListItem(listItem))
  );
};



export const fetchList = () => (dispatch) => {
  return listUtil.fetchList().then((list) => {
    return dispatch(receiveList(list));
  });
};

