import React from "react";
import { Link, Redirect } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import {
  isAuthenticated,
  signin,
  storeToken,
  storeUser,
} from "./helper/userHelper";
import Notify from "../app/helper/Notify";
import Facebook from "../../assets/icons/facebook-f-brands.svg";
import Google from "../../assets/icons/google-brands.svg";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      success: {},
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.forgotPasswordForm = this.forgotPasswordForm.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
      error: "",
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);
      /*signin({
        email: this.state.input["email"],
        password: this.state.input["password"],
      })
        .then((data) => {
          if (!data.success) {
            //    Notify('error', data.message);
            this.setState({
              ...this.state,
              error: data.message,
              loading: false,
            });
          } else {
            storeToken(data, () => {
              this.setState({ ...this.state, input: {}, success: true });
              //        Notify('success',"Login Successful")
            });
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("Error in Login");
          // Notify("error", "Signup Error");
        });*/
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

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

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

  forgotPasswordForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.error ? this.displayError() : ""}

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control border"
              placeholder="Enter a Mobile Number Or Email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="mt-3 text-center">
            <button
              className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn w-75"
              type="submit"
              value="submit"
            >
              FORGOT PASSWORD
            </button>
          </div>

          <div className="text-center pt-2">
            <p style={{ color: "#d1d1d1", fontSize: "22px" }}>
              or sign in with
            </p>
          </div>

          <div className="mb-2 text-center">
            <img
              src={Facebook}
              height={30}
              style={{
                backgroundColor: "blue",
                padding: "6px 9px",
                marginRight: "6px",
              }}
            />
            <img
              src={Google}
              height={30}
              style={{
                backgroundColor: "red",
                padding: "6px",
                marginRight: "6px",
              }}
            />
          </div>

          <div className="text-center mt-4 font-weight-light">
            Don't have an account? {"  "}
            <Link to="/register" className="text-primary">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="m-auto" style={{ paddingTop: "30px" }}>
            <div
              className="card card-signin "
              style={{
                margin: "auto",
                /*marginLeft: "-3rem",*/ maxWidth: "35rem",
              }}
            >
              <div className="card-body" style={{ maxWidth: "15rem " }}>
                <p className="card-title" style={{ color: "red" }}>
                  Bidz<span style={{ color: "#007bff" }}>Z</span>.in
                </p>
                <div style={{ fontSize: "1.8em" }}>FORGOT PASSWORD</div>
                <p style={{ color: "#d1d1d1", fontSize: "22px" }}>
                  Enter your email to reset password
                </p>
                {this.forgotPasswordForm()}
              </div>
            </div>
            <NotificationContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
