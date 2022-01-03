import React from "react";

import { Link } from "react-router-dom";
import Base from "../../base";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <Base>
      <>
        <Helmet>
          <title>About Us - EGamz</title>
          <meta
            name="description"
            content="Here is more interesting things about world's Best Child Games website"
          />
        </Helmet>
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <header className="entry-header">
                <h1 className="entry-title">About Us</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="page-spacer clearfix">
          <section className="abutinfo">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 col-md-6">
                  <h2 className="head-border-default">
                    We are Online Education{" "}
                  </h2>
                  <p>
                    Aliquam erat volutpatuis finibus eroslacus cursus consequat
                    leocongue nonum its sociis natoque penatibus etmagnis
                    disparturient montes nascetur ridiculusi muse Fusce cursus
                    dolorid tempus. Donec vitae nunc sitamet libero dapibus
                    finibus our justo ullamcorper in turpis aclacinia
                    consectetur lacus.{" "}
                  </p>
                  <ul className="bullet">
                    <li>
                      Etiam utpurus aliquet fermentum libero suscipit fringilla
                      duionec nenatis is orcinonlacus fringilla.
                    </li>
                    <li>
                      Aliquam eratvolutp atuis finibus eros lacus cursus
                      consequat leo congue our noncongue nonvenenatis fringilla.
                    </li>
                    <li>
                      Pellentesque quiselit necjusto blandit molestie ullamet
                      tellus ultricies gravida nisiet posuere risus.
                    </li>
                    <li>
                      Etiam utpurus aliquet fermentum libero suscipit fringilla
                      duionec nenatis is orcinonlacus fringilla.
                    </li>
                  </ul>
                </div>
                <div className="col-sm-7 col-md-6 online-course">
                  <h2 className="head-border-default">
                    Find A Game and Sign Up Today!
                  </h2>
                  <img alt src="images/use_img/find_course_img.jpg" />
                  <p>
                    Pellentesque quiselitnec justo blandit molestieullam etellus
                    ultricies grvidanisi is etposuere risused id neque magna.
                    Mauris dposuere telus.
                  </p>
                  <Link className="btn btn-orange btn-large" to="/game-list">
                    View Online Games <i className="lnr lnr-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="howitworks">
            <div className="container">
              <div className="row">
                <h2 className="text-center head-border-default">
                  How It Works?
                </h2>
                <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <p className="text-center">
                    Quisque varius vitae dolor eget pellentesque Integer
                    ultricies velitleo vestibulum feugiat mauris sollicitudin
                    porttitor finibus liqultrices metus.{" "}
                  </p>
                </div>
                <div className="work-steps">
                  <div className="col-xs-12 col-sm-4">
                    <div className="steps">
                      <h3>Find Your Course</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the typesetting when
                        an unknown printerand scrambled.
                      </p>
                      <i className="fa fa-search-plus" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="steps">
                      <h3>Make Your Schedule</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the typesetting when
                        an unknown printerand scrambled.
                      </p>
                      <i className="fa fa-pencil-square-o" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="steps">
                      <h3>Start Learning</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the typesetting when
                        an unknown printerand scrambled.
                      </p>
                      <i className="fa fa-book" />
                    </div>
                  </div>
                </div>
                <div className="work-steps">
                  <div className="action text-center ">
                    <span>Want to Start Learning Online Today?</span>
                    <Link className="btn btn-orange btn-large" to="/signup">
                      Sign Up Today <i className="lnr lnr-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="meet-teachers">
            <div className="container">
              <div className="row">
                <h2 className="text-center head-border-default">
                  Meet Our Teachers
                </h2>
                <div className="col-xs-12 col-sm-2 teacher">
                  <a href="aboutus.html#">
                    <img alt src="images/use_img/teacher_img1.jpg" />
                  </a>
                  <h4>
                    <a href="aboutus.html#">Delmy Sermons</a>
                  </h4>
                  <p className="post">Chief Business Officer</p>
                  <ul className="social-icons">
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-2 teacher">
                  <a href="aboutus.html#">
                    <img alt src="images/use_img/teacher_img2.jpg" />
                  </a>
                  <h4>
                    <a href="aboutus.html#">Kenith Merrian</a>
                  </h4>
                  <p className="post">Chief Executive Officer</p>
                  <ul className="social-icons">
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-2 teacher">
                  <a href="aboutus.html#">
                    <img alt src="images/use_img/teacher_img3.jpg" />
                  </a>
                  <h4>
                    <a href="aboutus.html#">Grady Busse</a>
                  </h4>
                  <p className="post">Vice Presidet</p>
                  <ul className="social-icons">
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-2 teacher">
                  <a href="aboutus.html#">
                    <img alt src="images/use_img/teacher_img4.jpg" />
                  </a>
                  <h4>
                    <a href="aboutus.html#">Goldie Halligan</a>
                  </h4>
                  <p className="post">Chief Marketing Officer</p>
                  <ul className="social-icons">
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-2 teacher">
                  <a href="aboutus.html#">
                    <img alt src="images/use_img/teacher_img5.jpg" />
                  </a>
                  <h4>
                    <a href="aboutus.html#">Patricia Davis</a>
                  </h4>
                  <p className="post">Chief Product Officer</p>
                  <ul className="social-icons">
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-2 teacher">
                  <a href="aboutus.html#">
                    <img alt src="images/use_img/teacher_img1.jpg" />
                  </a>
                  <h4>
                    <a href="aboutus.html#">Delmy Sermons</a>
                  </h4>
                  <p className="post">Chief Business Officer</p>
                  <ul className="social-icons">
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="aboutus.html#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="partnering-with-us">
            <div className="container">
              <div className="row">
                <h2 className="text-center head-border-default">
                  Partnering With Us
                </h2>
                <div className="col-sm-7 col-md-4">
                  <h4>Acadamic partner</h4>
                  <p>
                    Etiam ut purus aliquet fermentum libero suscipit its
                    fringilla duionec venenatis orcinon lacus fringilla ace
                    laoreet est fermentum ullam molestie vulputate ours iaculis
                    eterat at ullamcorper dictum risus.
                  </p>
                </div>
                <div className="col-sm-7 col-md-4">
                  <h4>Community Partner</h4>
                  <p>
                    Dictum idtex euismod bibendum auris idmetus oure ipsum enean
                    placerat aliquet frgillasit amet nisiquis risus auctor
                    posuerequis inerat Sed iaculis tortor its mpurus tincidunt
                    eget placera.
                  </p>
                </div>
                <div className="col-sm-7 col-md-4">
                  <h4>Advisory Board Members</h4>
                  <p>
                    Etiam ut purus aliquet fermentum libero suscipit its
                    fringilla duionec venenatis orcinon lacus fringilla ace
                    laoreet est fermentum ullam molestie vulputate ours iaculis
                    eterat at ullamcorper dictum risus.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </Base>
  );
};

export default AboutUs;
