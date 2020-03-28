import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import WelcomePage from "./welcome_page";


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.sessionErrors,
    formType: "Sign In"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(WelcomePage);
