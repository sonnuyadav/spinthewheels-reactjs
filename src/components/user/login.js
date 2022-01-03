import React from "react";
import { Redirect, Link } from "react-router-dom";
import { signin, storeToken } from "./helper/userHelper";
import Base from "../base";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        username: "",
        password: "",
      },
      errors: {},
      success: false,
      error: "",
      reload: false,
      isLoading: false,
      redirectTo: "/",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayError = this.displayError.bind(this);
    this.displaySuccess = this.displaySuccess.bind(this);
    this.displayLoading = this.displayLoading.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.state && props.location.state.from.pathname) {
      return { ...state, redirectTo: props.location.state.from.pathname };
    }
    return { ...state };
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
      error: "",
    });
  }

  handleCapsLock(event) {
    let errors = this.state.errors;
    if (event.getModifierState("CapsLock")) {
      errors[event.target.name] = "Caps lock is ON.";
    } else {
      errors[event.target.name] = undefined;
    }
    this.setState({
      errors: errors,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      console.log(this.state);
      signin({
        username: this.state.input["username"],
        password: this.state.input["password"],
      })
        .then((data) => {
          if (!data.success) {
            this.setState({
              ...this.state,
              error: data.message,
              isLoading: false,
            });
          } else {
            localStorage.setItem("userName", data.userName);
            storeToken(data.token, () => {
              this.setState({
                ...this.state,
                input: { username: "", password: "" },
                success: true,
                reload: true,
                isLoading: false,
              });
            });
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("Error in Login");
          this.setState({
            ...this.state,
            error: "Error in Login",
            isLoading: false,
          });
        });
    }
  }

  displayError() {
    return (
      <div
        className="alert alert-danger p-2"
        style={{ display: this.state.error ? "" : "none" }}
      >
        {this.state.error}
      </div>
    );
  }

  displaySuccess() {
    return (
      <>
        <div
          className="alert alert-success p-2"
          style={{ display: this.state.success ? "" : "none" }}
        >
          Login Successful
        </div>
        {this.state.completeProfile ? (
          <Redirect to={this.state.redirectTo} />
        ) : (
          <Redirect to="/update-user-info" />
        )}
      </>
    );
  }
  displayLoading() {
    return (
      <div
        className="alert alert-info p-2"
        style={{ display: this.state.isLoading ? "" : "none" }}
      >
        Authenticating...
      </div>
    );
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter Password.";
    }
    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter Username.";
    }
    if (input["password"].length < 6) {
      isValid = false;
      errors["password"] = "Password Should be greater than 6 character.";
    }
    this.setState({
      errors: errors,
    });
    return isValid;
  }

  render() {
    return (
      <Base>
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <header className="entry-header">
                <h1 className="entry-title">Login</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="page-spacer clearfix">
          <div className="content-area" id="primary">
            <div className="container">
              <div className="row">
                <main className="site-main col-xs-12" id="main">
                  <div className="col-xs-12 col-sm-6 login-form form">
                    <h3>Login</h3>
                    <form id="login" onSubmit={this.handleSubmit}>
                      {this.state.error ? this.displayError() : ""}
                      {this.state.success ? this.displaySuccess() : ""}
                      {this.state.isLoading ? this.displayLoading() : ""}

                      <label>
                        {" "}
                        Username:
                        <input
                          name="username"
                          type="text"
                          value={this.state.input.username}
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.username}
                        </div>
                      </label>
                      <label>
                        {" "}
                        Password:
                        <input
                          name="password"
                          type="password"
                          value={this.state.input.password}
                          onChange={this.handleChange}
                          onKeyUp={this.handleCapsLock}
                          placeholder="Enter a Password"
                        />{" "}
                        <div className="text-danger">
                          {this.state.errors.password}
                        </div>
                      </label>

                      <p>
                        {" "}
                        Don't have an account?{" "}
                        <Link to="/register">Create an Account</Link> now!{" "}
                      </p>
                      <label>
                        <Link to="/forget-password">Forgot Password?</Link>
                      </label>
                      <input
                        className="btn btn-default"
                        id="submit"
                        name="submit"
                        type="submit"
                        defaultValue="Log In"
                      />
                    </form>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </Base>
    );
  }
}

export default Login;
