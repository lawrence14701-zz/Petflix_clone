import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionFrom from "./session_form";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.sessionErrors,
    formType: "Sign Up"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionFrom);
