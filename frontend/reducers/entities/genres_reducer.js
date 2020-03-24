import { RECEIVE_SINGLE_GENRE, RECEIVE_ALL_GENRES } from '../../actions/video_actions';


const genresReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_GENRES:
            return Object.assign({}, oldState, action.genres)
        case RECEIVE_SINGLE_GENRE:
            return Object.assign({}, oldState, { [action.genre.id]: action.genre })

        default:
            return oldState;
    }
}


export default genresReducer;