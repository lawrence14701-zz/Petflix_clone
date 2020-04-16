import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      active: false
    };
  }

  handleChange(property) {
    return e => {
      this.setState({
        [property]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { password, username } = this.state;
    this.props.processForm({ password, username });
  }

  render() {
    const otherLink = () => {
      if (this.props.formType === "Sign Up") {
        return (
          <div className="user-registration-message">
            Already have an account?&nbsp;
            <Link to={"/login"}>Sign In</Link>
          </div>
        );
      } else {
        return (
          <div className="user-registration-message">
            <span>New to Petflix? </span>
            <Link to={"/signup"}>Sign Up Now</Link>
          </div>
        );
      }
    };

    const errors = this.props.errors.map(error => {
      return (
        <li key={error} className="session-errors">
          {error}
        </li>
      );
    });

    return (
      <>
        <div className="session-container">
          <div className='shadow-background'>
            <header className="auth-header">
              <div className="image-container">
                <Link to="/">
                  <img src={window.logo} alt="logo" />
                </Link>
              </div>
            </header>

            <div className="login-container">
              <div className="login-content">
                <form onSubmit={this.handleSubmit} className="auth">
                  <h1>{this.props.formType}</h1>
                  <div className="user-registration-container">
                    <label className="place-label">
                      <input
                        type="text"
                        onChange={this.handleChange("username")}
                        value={this.state.username}
                        placeholder="Username"
                        className="user-registration"
                      />
                    </label>
                  </div>

                  <div className="user-registration-container">
                    <label className="place-label">
                      <input
                        type="password"
                        onChange={this.handleChange("password")}
                        value={this.state.password}
                        placeholder="Password"
                        className="user-registration"
                      />
                    </label>
                  </div>
                  <button className="loggin-btn" type="submit">
                    {this.props.formType}
                  </button>
                  <div>{otherLink()}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SessionForm;
