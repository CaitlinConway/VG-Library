import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, login } from "../store/authReducer";


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            zipCode: "",
            errors: ""
        };
    }

    updateFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    };

    updateLastName = (e) => {
        this.setState({ lastName: e.target.value });
    };

    updateEmail = (e) => {
        this.setState({ email: e.target.value });
    };
    updateZipCode = (e) => {
      this.setState({ zipCode: e.target.value });
  };

    updatePassword = (e) => {
        this.setState({ password: e.target.value });
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            this.setState({ errors: "Your password must be at least 8 characters."});
        } else {
            this.setState({ errors: ""});
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, zipCode} = this.state;
        this.props.signUp(firstName, lastName, email, password. zipCode);
        const errorsContainer = document.getElementById("errors");
        if (errorsContainer.style.display === "none") {
          window.location.href = "/";
        }
    };

    render() {
      if (this.props.isLoggedIn) return <Redirect to="/"></Redirect>;
        const { firstName, lastName, email, password, errors, zipCode } = this.state;
        return (
          <div className="signup-page">
            <img src="" alt=""></img>
            <div className="signup-form-content">
                <div className="signup-form-div">
                    <form onSubmit={this.handleSubmit} className="signup-form">
                        <input
                        className="signup-input"
                        type="text"
                        value={firstName}
                        onChange={this.updateFirstName}
                        placeholder="First name"
                        ></input>
                        <input
                        className="signup-input"
                        type="text"
                        value={lastName}
                        onChange={this.updateLastName}
                        placeholder="Last name"
                        ></input>
                        <div className="break"></div>
                        <input
                        className="signup-input"
                        type="email"
                        value={email}
                        onChange={this.updateEmail}
                        placeholder="Email"
                        ></input>
                        <div className="break"></div>
                        <input
                        className="signup-input"
                        type="password"
                        value={password}
                        onChange={this.updatePassword}
                        placeholder="Password (min. 10 characters)"
                        ></input>
                        <div className="break"></div>
                        <button type="submit" className="signup-button">
                            Sign up!
                        </button>
                        <span className="signup-text">Already signed up?
                        <a href="/login" className="login-link">Login to your account here.</a></span>
                    </form>
                </div>
            </div>
            <div className="signup-error-container">
                <ul id="errors" className="errors">{errors}</ul>
            </div>
          </div>
        );
      }
    }

  const mapStateToProps = (state) => {
    return {
        isLoggedIn: !!state.auth.id,
     };
    };

  const mapDispatchToProps = (dispatch) => {
    return {
      signUp: (firstName, lastName, email, password, zipCode) =>
        dispatch(signUp(firstName, lastName, email, password, zipCode)),
      login: (email, password) => dispatch(login(email, password)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
