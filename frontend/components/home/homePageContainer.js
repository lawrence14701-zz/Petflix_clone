import { connect } from "react-redux";
import { fetchAllGenres } from '../../actions/video_actions';
import { logout } from "../../actions/session_actions";
import HomePage from './homePage';



const mapStateToProps = (state) => {
    return {
        genres: Object.values(state.entities.genres),
        movies: state.entities.movies,
        currentUser: state.entities.user[state.session.id]

    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllGenres: () => (dispatch(fetchAllGenres())),
        logout: () => (dispatch(logout()))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)