import { RECEIVE_SINGLE_MOVIE, RECEIVE_ALL_GENRES } from '../../actions/video_actions';



const moviesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_GENRES:
            return Object.assign({}, oldState, action.movies);
        case RECEIVE_SINGLE_MOVIE:
            return Object.assign({}, oldState, { [action.movie.id]: action.movie })
        default:
            return oldState;
    }
}

export default moviesReducer;