import * as VideoUtil from '../util/videos_util';




export const RECEIVE_ALL_GENRES = 'RECEIVE_ALL_GENRES';
export const RECEIVE_SINGLE_GENRE = 'RECEIVE_SINGLE_GENRE';
export const RECEIVE_SINGLE_MOVIE = "RECEIVE_SINGLE_MOVIE"
export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES"

export const CONTENT_OPEN = "CONTENT_OPEN"

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

const contentOpen = (isItOpen) => ({
    type: CONTENT_OPEN,
    isItOpen,
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

