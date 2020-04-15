import { connect } from "react-redux";
import { fetchAllGenres, showArrows } from '../../actions/video_actions';
import { logout } from "../../actions/session_actions";
import HomePage from './homePage';



const mapStateToProps = (state) => {
    return {
        genres: Object.values(state.entities.genres),
        movies: state.entities.movies,
        currentUser: state.entities.user[state.session.id],
        showArrows: state.entities.showArrows,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllGenres: () => (dispatch(fetchAllGenres())),
        logout: () => (dispatch(logout())),
        showArrowsOnBrowse: (show) => (dispatch(showArrows(show))),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)