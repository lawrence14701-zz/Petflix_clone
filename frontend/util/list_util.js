

export const addToList = (movieId) => {
    return $.ajax({
      method: "POST",
      url: `/api/users/:user_id/watchlists`,
      data: { watchlist: {movie_id: movieId} }
    });
}

export const fetchList = (userId) => {
        return $.ajax({
          method: "GET",
          url: `/api/users/${userId}/watchlists`,
        });
}


// export const fetchList = (userId,listItemId) => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/users/${userId}/watchlists/${listItemId}`,
//   });
// };




