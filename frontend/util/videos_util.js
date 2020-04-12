
export const fetchGenres = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/genres'
    })
}


export const fetchGenre = (genreId) => {
    return $.ajax({
        method: 'GET',
        url: `api/genres/${genreId}`
    })
}


export const fetchMovie = (movieId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/movies/${movieId}`
    })
}

