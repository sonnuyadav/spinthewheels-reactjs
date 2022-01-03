import React from "react";
import { Link, Redirect } from "react-router-dom";
import { signup } from "./helper/userHelper";
import Facebook from "../../assets/icons/facebook-f-brands.svg";
import Google from "../../assets/icons/google-brands.svg";
import Base from "../base";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {},
      success: false,
      error: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCapsLock = this.handleCapsLock.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayError = this.displayError.bind(this);
    this.displaySuccess = this.displaySuccess.bind(this);
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
      console.log(this.state);

      signup({
        firstName: this.state.input["firstName"],
        lastName: this.state.input["lastName"],
        mobileNumber: this.state.input["mobileNumber"],
        userName: this.state.input["userName"],
        email: this.state.input["email"],
        password: this.state.input["password"],
        confirmPassword: this.state.input["confirmPassword"],
      })
        .then((data) => {
          if (!data.success) {
            this.setState({
              ...this.state,
              error: data.message,
              loading: false,
            });
          } else {
            this.setState({
              ...this.state,
              input: {
                firstName: "",
                lastName: "",
                userName: "",
                mobileNumber: "",
                email: "",
                password: "",
                confirmPassword: "",
              },
              success: true,
              message: data.message,
              loading: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("Error in signup");
          this.setState({
            ...this.state,
            error: "Registration Error!",
            loading: false,
          });
        });
    }
  }

  displayError() {
    return (
      <div
        className="alert alert-danger"
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
          {this.state.message} <Link to={"/login"}>Login Here.</Link>
        </div>
        <Redirect to="/login" />
      </>
    );
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["firstName"]) {
      isValid = false;
      errors["firstName"] = "Please enter your First Name.";
    }

    if (!input["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter your Last Name.";
    }
    if (!input["userName"]) {
      isValid = false;
      errors["userName"] = "Please enter your Last Name.";
    }
    if (!input["mobileNumber"]) {
      isValid = false;
      errors["mobileNumber"] = "Please enter your mobile Number.";
    } else if (input["mobileNumber"].length < 10) {
      isValid = false;
      errors["mobileNumber"] = "Please enter valid mobile number.";
    } else if (phonenumber(input["mobileNumber"])) {
      isValid = false;
      errors["mobileNumber"] = "Please enter valid mobile number.";
    }
    function phonenumber(inputtxt) {
      var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      return !!inputtxt.match(phoneno);
    }

    /* if (!input["terms"]) {
      isValid = false;
      errors["terms"] = "Please Accept Terms and conditions.";
    }*/

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter Password.";
    } else if (input["password"].length < 6) {
      isValid = false;
      errors["password"] = "Password Should be greater than 6 character.";
    }

    if (!input["confirmPassword"]) {
      isValid = false;
      errors["confirmPassword"] = "Please Confirm Password.";
    } else if (input["confirmPassword"].length < 6) {
      isValid = false;
      errors["confirmPassword"] =
        "Password Should be greater than 6 character.";
    }

    if (input["password"] !== input["confirmPassword"]) {
      isValid = false;
      errors["password"] = "Password and confirm password not matching";
      errors["confirmPassword"] = "Password and confirm password not matching";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
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
                <h1 className="entry-title">Register</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="page-spacer clearfix">
          <div className="content-area" id="primary">
            <div className="container">
              <div className="row">
                <main className="site-main col-xs-12" id="main">
                  <div className="col-xs-12 col-sm-10 register-form form clearfix">
                    <h3>Register</h3>
                    <form
                      className="student-settings"
                      onSubmit={this.handleSubmit}
                    >
                      {this.state.error ? this.displayError() : ""}
                      {this.state.success ? this.displaySuccess() : ""}

                      <label>
                        First Name
                        <input
                          name="firstName"
                          type="text"
                          value={this.state.input.firstName}
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.firstName}
                        </div>
                      </label>
                      <label>
                        Last Name
                        <input
                          name="lastName"
                          type="text"
                          value={this.state.input.lastName}
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.lastName}
                        </div>
                      </label>
                      <label>
                        User Name
                        <input
                          name="userName"
                          type="text"
                          value={this.state.input.userName}
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.userName}
                        </div>
                      </label>
                      <label>
                        Email{" "}
                        <input
                          name="email"
                          type="text"
                          value={this.state.input.email}
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.email}
                        </div>
                      </label>
                      <label>
                        Password
                        <input
                          name="password"
                          type="password"
                          value={this.state.input.password}
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.password}
                        </div>
                      </label>
                      <label>
                        Confirm Password:
                        <input
                          name="confirmPassword"
                          type="password"
                          value={this.state.input.confirmPassword}
                          onChange={this.handleChange}
                        />
                        <div className="text-danger">
                          {this.state.errors.confirmPassword}
                        </div>
                      </label>
                      <p>
                        Already have an account?{" "}
                        <Link to="/login">Login to your account</Link> !
                      </p>
                      <input
                        className="btn btn-default pull-right"
                        name="submit"
                        type="submit"
                        defaultValue="Create an Account"
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

export default Register;
