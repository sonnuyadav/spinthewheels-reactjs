import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import { userToken } from "./helper/userHelper";
import { API, handlePostRequest } from "../app/helper/appHelper";

const UpdateUserInfo = (props) => {
  const [state, setState] = useState({
    input: {
      categoryOfProduct: "",
      gst: "",
      address: "",
      organizationName: "",
    },
    errors: {},
    success: false,
    error: "",
    isLoading: true,
    reload: false,
  });

  const handleChange = (event) => {
    let input = state.input;
    input[event.target.name] = event.target.value;
    let errors = state.errors;
    errors[event.target.name] = "";
    setState({ ...state, input, error: "", errors: errors });
  };

  const handleSubmit = () => {
    if (validate()) {
      setState({
        ...state,
        loading: true,
      });
      console.log(state);
      const requestOptions = {
        method: "put",
        url: `${API}/update-user-info`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: userToken(),
        },
        data: JSON.stringify({
          categoryOfProduct: state.input["categoryOfProduct"],
          gst: state.input["gst"],
          address: state.input["address"],
          organizationName: state.input["organizationName"],
        }),
      };

      handlePostRequest(requestOptions)
        .then((data) => {
          if (!data.success) {
            setState({
              ...state,
              error: data.message,
              loading: false,
            });
          } else {
            setState({
              ...state,
              input: {
                categoryOfProduct: "",
                gst: "",
                address: "",
                organizationName: "",
              },
              success: data.message,
              reload: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("Request Failed");
          setState({
            ...state,
            error: "Request Failed",
            loading: false,
          });
        });
    }
  };

  const displayError = () => {
    return (
      <div
        className="alert alert-danger p-2"
        style={{ display: state.error ? "" : "none" }}
      >
        {state.error}
      </div>
    );
  };

  const displaySuccess = () => {
    return (
      <>
        <div
          className="alert alert-success p-2"
          style={{ display: state.success ? "" : "none" }}
        >
          Info Updated Successfully
        </div>
        <Redirect to="/" />
      </>
    );
  };

  const validate = () => {
    let input = state.input;
    let errors = {};
    let isValid = true;

    if (!input["organizationName"]) {
      isValid = false;
      errors["organizationName"] = "Please enter Organization Name.";
    }

    if (!input["gst"]) {
      isValid = false;
      errors["gst"] = "Please enter your gst number.";
    }
    if (!input["address"]) {
      isValid = false;
      errors["address"] = "Please enter your address.";
    }
    if (!input["categoryOfProduct"]) {
      isValid = false;
      errors["categoryOfProduct"] = "Please enter Category Of Product.";
    }

    setState({ ...state, errors: errors });

    return isValid;
  };

  const updateUserInfoForm = () => {
    return (
      <div>
        <form className="user-info-form pt-2">
          {state.error ? displayError() : ""}
          {state.success ? displaySuccess() : ""}

          <div className="row pt-3">
            <div className="col-5">
              <label htmlFor="organizationName">Organization Name</label>
            </div>
            <div className="col-7">
              <div className="form-group">
                <input
                  type="text"
                  name="organizationName"
                  value={state.input.organizationName}
                  onChange={handleChange}
                  className="form-control border"
                  placeholder=""
                  id="organizationName"
                />

                <div className="text-danger">
                  {state.errors.organizationName}
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-5">
              <label htmlFor="gst">GST</label>
            </div>
            <div className="col-7">
              <div className="form-group">
                <input
                  type="text"
                  name="gst"
                  value={state.input.gst}
                  onChange={handleChange}
                  className="form-control border"
                  id="gst"
                />

                <div className="text-danger">{state.errors.gst}</div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-5">
              <label htmlFor="address">Address</label>
            </div>
            <div className="col-7">
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  value={state.input.address}
                  onChange={handleChange}
                  className="form-control border"
                  id="address"
                />

                <div className="text-danger">{state.errors.address}</div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-5">
              <label htmlFor="email">Category of Products</label>
            </div>
            <div className="col-7">
              <div className="form-group">
                <input
                  type="text"
                  name="categoryOfProduct"
                  value={state.input.categoryOfProduct}
                  onChange={handleChange}
                  className="form-control border"
                  id="categoryOfProduct"
                />

                <div className="text-danger">
                  {state.errors.categoryOfProduct}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 row">
            <div className="col-6">
              <button
                className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn w-100"
                onClick={(event) => {
                  event.preventDefault();
                  setState({
                    ...state,
                    input: {
                      categoryOfProduct: "",
                      gst: "",
                      address: "",
                      organizationName: "",
                    },
                    success: "Redirecting to Home",
                    reload: true,
                  });
                }}
              >
                SKIP
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn w-100"
                onClick={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

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
            <div className="card-body">
              <p className="card-title" style={{ color: "red" }}>
                Bidz<span style={{ color: "#007bff" }}>Z</span>.in
              </p>
              <div style={{ fontSize: "1.8em" }}>
                To post a requirement or Bid for an inquiry please fill your
                Business Details.
              </div>
              {updateUserInfoForm()}
            </div>
          </div>
          <NotificationContainer />
        </div>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
