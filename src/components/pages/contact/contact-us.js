import React from "react";

import { Link } from "react-router-dom";
import Base from "../../base";
import { Helmet } from "react-helmet";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      success: {},
      error: "",
    };
  }

  render() {
    return (
      <Base>
        <>
          <Helmet>
            <title>Contact Us - EGamz</title>
            <meta name="description" content="You can contact us from here" />
          </Helmet>
          <div className="breadcrumb-section">
            <div className="container">
              <div className="row">
                <header className="entry-header">
                  <h1 className="entry-title">Contact Us</h1>
                </header>
              </div>
            </div>
          </div>
          <div className="page-spacer clearfix">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 contact-form">
                  <h3>Stay in Touch</h3>
                  <p>
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the
                    like).
                  </p>
                  <div id="success" className="alert alert-success">
                    Your message succesfully sent!
                  </div>
                  <div id="error" className="alert alert-danger">
                    Opps! There is something wrong. Please try again
                  </div>
                  <form
                    className="contactform"
                    method="post"
                    action="http://demos.themecycle.com/eduhtml/edu-kindergarten/contact_process.php"
                    id="contactForm"
                  >
                    <p>
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        id="fname"
                        name="fname"
                      />
                    </p>
                    <p>
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        id="lname"
                        name="lname"
                      />
                    </p>
                    <p>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </p>
                    <p>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email Address"
                      />
                    </p>
                    <p>
                      <textarea
                        placeholder="Message"
                        name="message"
                        id="message"
                        rows={10}
                        cols={40}
                        defaultValue={""}
                      />
                    </p>
                    <p>
                      <input
                        type="submit"
                        className="btn btn-default"
                        defaultValue="submit now"
                      />
                    </p>
                  </form>
                </div>
                <div className="col-xs-12 col-sm-6 contact-info">
                  <div className="col-xs-12 col-sm-6">
                    <h3 className="head-border-default">Education Press</h3>
                    <p className="address">
                      <i className="fa fa-map-marker" />
                      2036 Thunder Road CA 94612 Oakland, opp. of geon tower
                      Pincode - 580089
                    </p>
                    <p className="email">
                      <i className="lnr lnr-envelope" />
                      <a
                        href="https://websitedownloader.io/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="f39a9d959cb39697869092879a9c9d8381968080dd909c9e"
                      >
                        [email&nbsp;protected]
                      </a>
                    </p>
                    <ul className="social-icons">
                      <li>
                        <Link to="#">
                          <i className="fa fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-google-plus" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <h3 className="head-border-default">Customer Supprt</h3>
                    <p className="phone">
                      <i className="fa fa-phone" />
                      731-234-5678
                    </p>
                    <p className="email">
                      <i className="lnr lnr-envelope" />
                      <a
                        href="https://websitedownloader.io/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="c2b1b7b2b2adb0b682a7a6b7a1b6abadacb2b0a7b1b1"
                      >
                        [email&nbsp;protected]
                      </a>
                      ,com
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-12 have-question">
                    <h3>Have Any Question?</h3>
                    <p>
                      Various versions years, sometimes by accident, sometimes
                      on purpose (injected humour and the like).
                    </p>
                    <Link to="#" className="btn btn-blue btn-medium">
                      Ask a Question
                    </Link>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 map-location">
                  <h3 className="head-border-default">Map and Location</h3>
                  <div
                    id="mapBox"
                    className="row m0"
                    data-lat="37.3818288"
                    data-lon="-122.0636325"
                    data-zoom={15}
                    data-marker="images/map-marker.html"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div id="login-form" style={{display: 'none'}}>
            <div className="row">
              <h3>Login</h3>
              <p>Please Login to Create a New Course</p>
              <form id="login" action="#">
                <input name="email" type="text" placeholder="Email or Username" />
                <input name="password" type="text" placeholder="Password" />
                <div className="row remeber">
                  <label><input name="rember" type="checkbox" defaultValue /> Remember Me</label>
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="text-center button">
                  <input name="Login" type="button" defaultValue="Login Now" />
                </div>
              </form>
            </div>
          </div>
          <div id="register-form" style={{display: 'none'}}>
            <div className="row">
              <h3>Register</h3>
              <p>Please Register to Create a New Account</p>
              <form id="register" action="#">
                <input name="name" type="text" placeholder="Name" />
                <input name="username" type="text" placeholder="Username" />
                <input name="email" type="text" placeholder="Email" />
                <input name="password" type="text" placeholder="Password" />
                <input name="confirmpassword" type="text" placeholder="Confirm Password" />
                <div className="row new-login">
                  Already have an account? <a href="#">Login to your account! </a>
                </div>
                <div className="text-center button">
                  <input name="create-account" type="button" defaultValue="Create an Account" />
                </div>
              </form>
            </div>
          </div>*/}
        </>
      </Base>
    );
  }
}

export default ContactUs;
