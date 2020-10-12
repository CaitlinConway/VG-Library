import React from "react";
import { Redirect } from "react-router-dom";
import { login } from '../store/authReducer'
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
      }

handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  demoUserLogin = (e) => {
    e.preventDefault();
    const email = "guest@guest.com";
    const password = "password";
    this.props.login(email, password);
  }

  render() {
    if (this.props.isLoggedIn) return <Redirect to="/"></Redirect>;
    const { email, password } = this.state;
    return (
      <div className="login-page">
        <div className="login-background"></div>
        <div className="login-page-div">
          <div className="login-form-header">Welcome!</div>
          <div className="error-container">
            <ul id="errors" className="errors"></ul>
          </div>
          <div className="login-form-div">
            <form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-form-email-header">Email</div>
              <input
                className="login-input"
                type="email"
                value={email}
                onChange={this.updateEmail}
              ></input>
            <div className="login-form-email-header">Password</div>
              <div>
              <input
                className="login-input"
                type="password"
                value={password}
                onChange={this.updatePassword}
              ></input>
              </div>
              <div className="login-sign-in-button">
                <button type="submit" className="login-button">
                  Sign In
                </button>
              </div>
            </form>
          </div>
            <form onSubmit={this.demoUserLogin} className="login-sign-in-button">
              <button type="submit"
              className="login-sign-in-button">
              Demo User
              </button>
            </form>
          </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
      isLoggedIn: !!state.auth.id,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
