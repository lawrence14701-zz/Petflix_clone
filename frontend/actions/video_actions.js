import * as VideoUtil from '../util/videos_util';




export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES';
export const RECEIVE_SINGLE_GENRE = 'RECEIVE_SINGLE_GENRE';
export const RECEIVE_SINGLE_MOVIE = "RECEIVE_SINGLE_MOVIE"
export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES"
export const PLAYING_BILLBOARD = "PLAYING_BILLBOARD"
export const RECEIVE_SHOW_ITEMS = "RECEIVE_SHOW_ITEMS"

export const SHOW_ARROWS = "SHOW_ARROWS"

const receiveGenres = (payload) => {
    const { genres, movies } = payload
    return {
        type: RECEIVE_ALL_GENRES,
        genres,
        movies,
    }
}

const receiveGenre = (genre) => ({
    type: RECEIVE_SINGLE_GENRE,
    genre
})

const receiveMovie = (movie) => ({
  type: RECEIVE_SINGLE_MOVIE,
  movie,
});

export const showArrows = (showArrow) => ({ //take in true or false
    type: SHOW_ARROWS,
    showArrow,
})

export const playingBillBoard = (billBoard) => ({
    type: PLAYING_BILLBOARD,
    billBoard
})


export const receiveShowItems = (showItems) => ({
    type: RECEIVE_SHOW_ITEMS,
    showItems
})





export const fetchAllGenres = () => (dispatch) => {
    return VideoUtil.fetchGenres()
        .then(genres => {
            return dispatch(receiveGenres(genres))
        })
}



export const fetchMovie = (movieId) => (dispatch) => {
    return VideoUtil.fetchMovie(movieId)
        .then(movie => (dispatch(receiveMovie(movie))))
}

export const fetchGenre = (genreId) => (dispatch) => {
    return VideoUtil.fetchGenre(genreId)
        .then(genre => (dispatch(receiveGenre(genre))))
}

