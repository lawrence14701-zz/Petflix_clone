import Nav from "./nav";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, logout } from "../../actions/session_actions";
import { fetchAllGenres } from '../../actions/video_actions';

const msp = (state) => ({
  currentUser: state.entities.user[state.session.id],
  genres: Object.values(state.entities.genres),
});

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  fetchAllGenres: () => dispatch(fetchAllGenres()),
});

export default withRouter(connect(msp, mdp)(Nav));
