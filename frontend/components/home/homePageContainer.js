import { connect } from "react-redux";
import { fetchAllGenres, showArrows } from '../../actions/video_actions';
import { logout } from "../../actions/session_actions";
import HomePage from './homePage';
import { addToList, deleteListItem, fetchList} from '../../actions/list_actions'



const mapStateToProps = (state) => {
    return {
      genres: Object.values(state.entities.genres),
      movies: state.entities.movies,
      currentUser: state.entities.user[state.session.id],
      showArrows: state.entities.showArrows,
      myList: Object.values(state.entities.myList),
      movie: Object.values(state.entities.movies)[0]
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
      fetchAllGenres: () => dispatch(fetchAllGenres()),
      logout: () => dispatch(logout()),
      showArrowsOnBrowse: (show) => dispatch(showArrows(show)),
      addToList: (movieId) => dispatch(addToList(movieId)),
      deleteListItem: (movieId) => dispatch(deleteListItem(movieId)),
      getList: () => dispatch(fetchList()),
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)