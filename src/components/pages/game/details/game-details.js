import React, { useState } from "react";

import { Link } from "react-router-dom";
import Base from "../../../base";
import { Helmet } from "react-helmet";

const GameDetails = () => {
  return (
    <Base>
      <Helmet>
        <title> Lorem ipsum dolor best child game - EGamz</title>
        <meta
          name="description"
          content="Features Name Here Lorem ipsum dolor is a best child game"
        />
      </Helmet>
      <div className="breadcrumb-detail-page">
        <div className="container">
          <div className="row">
            <p>
              <Link to="/">HOME</Link>
              <i className="fa fa-angle-right" />
              <Link to="/game-list">ALL Games</Link>
              <i className="fa fa-angle-right" />
              Features Name Here Lorem ipsum dolor
            </p>
          </div>
        </div>
      </div>
      <div className="page-spacer co-detail-page clearfix">
        <div id="primary">
          <div className="container">
            <div className="row">
              <main
                className="site-main col-xs-12 col-sm-8 left-block"
                id="main"
              >
                <div className="courses-info">
                  <h1>Features Name Here Lorem ipsum dolor</h1>
                  <p className="excerpt">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p className="meta">
                    Instructed by:{" "}
                    <a href="classes-video-details.html#">Greg Christman</a> .
                    in: <a href="classes-video-details.html#">Icon Design</a>
                  </p>
                </div>
                <a className="img-thumb " href="classes-video-details.html#">
                  <figure>
                    <img
                      height={415}
                      src="/images/use_img/course_img1.png"
                      width="100%"
                    />
                    {/*<embed
                      height={415}
                      src="https://www.youtube.com/embed/zSaSxgL9SWI"
                      width="100%"
                    />*/}
                  </figure>
                </a>
                <div className="courses-info">
                  <h3>COURSE DESCRIPTION</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                    <i>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book.
                    </i>
                  </p>
                  <h4>Requirements</h4>
                  <ul>
                    <li>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book.
                    </li>
                    <li>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged.
                    </li>
                    <li>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </li>
                  </ul>
                  <h4>What am I going to get from this course?</h4>
                  <ul>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li>
                      Etiam varius tortor ut ligula facilisis varius in a leo.
                    </li>
                    <li>
                      Folutpat tempor tur duis mattis dapibus, felis amet.
                    </li>
                  </ul>
                  <h4>What is the target audience?</h4>
                  <ul>
                    <li>Donec porta ultricies urna, faucibus magna dapibus.</li>
                    <li>
                      Etiam varius tortor ut ligula facilisis varius in a leo.
                    </li>
                    <li>
                      Folutpat tempor tur duis mattis dapibus, felis amet.
                    </li>
                  </ul>
                  <section className="courses-curriculum clearfix">
                    <h3>Curriculum</h3>
                    <h4>Section 1: Introduction</h4>
                    <ul>
                      <li className="courses-open">
                        <span className="no">1</span>
                        <p className="ctitle">
                          <span className="title">
                            <i className="fa fa-play-circle" /> Welcome to the
                            Course!{" "}
                            <a href="classes-video-details.html#">
                              <i className="fa fa-angle-down" />
                            </a>
                          </span>
                          <span className="type">Video</span>
                        </p>
                        <span className="preview">Preview</span>
                        <p className="other">
                          <span className="time">
                            <i className="fa fa-clock-o" /> 11:30
                          </span>
                          <span className="info">
                            <i className="fa fa-lock" /> PDF file
                          </span>
                        </p>
                      </li>
                      <li className="courses-close">
                        <span className="no">2</span>
                        <p className="ctitle">
                          <span className="title">
                            <i className="fa fa-file" /> Course Introduction and
                            Manual
                            <a href="classes-video-details.html#">
                              <i className="fa fa-angle-up" />
                            </a>
                          </span>
                          <span className="type free">Free</span>
                        </p>
                        <p className="other">
                          <span className="info">
                            <i className="fa fa-paperclip" /> PDF file
                          </span>
                        </p>
                        <div className="desc">
                          <p>
                            It has survived not only five centuries. but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged.{" "}
                          </p>
                          <p>
                            <a href="classes-video-details.html#">
                              Download PDF
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h4>Section 2: Title will be here</h4>
                    <ul>
                      <li className="courses-open">
                        <span className="no">3</span>
                        <p className="ctitle">
                          <span className="title">
                            <i className="fa fa-paint-brush" /> Icon Design{" "}
                            <a href="classes-video-details.html#">
                              <i className="fa fa-angle-down" />
                            </a>
                          </span>
                          <span className="type">Lecture</span>
                        </p>
                        <span className="preview">Preview</span>
                        <p className="other">
                          <span className="info">
                            <i className="fa fa-pencil" /> Tools needed
                          </span>
                        </p>
                      </li>
                      <li className="courses-open">
                        <span className="no">4</span>
                        <p className="ctitle">
                          <span className="title">
                            <i className="fa fa-magic" /> Donec porta ultricies
                            urna{" "}
                            <a href="classes-video-details.html#">
                              <i className="fa fa-angle-down" />
                            </a>
                          </span>
                          <span className="type free">Free</span>
                        </p>
                        <p className="other">
                          <span className="info">
                            <i className="fa fa-paperclip" /> PDF file
                          </span>
                        </p>
                      </li>
                      <li className="courses-open">
                        <span className="no">5</span>
                        <p className="ctitle">
                          <span className="title">
                            <i className="fa fa-bell-o" /> Aucibus magna dapibus{" "}
                            <a href="classes-video-details.html#">
                              <i className="fa fa-angle-down" />
                            </a>
                          </span>
                          <span className="type exam">Exam</span>
                        </p>
                        <p className="other">
                          <span className="info">
                            <i className="fa fa-bullhorn" /> Final
                          </span>
                        </p>
                      </li>
                    </ul>
                    <h4>Section 3: Some big title will be here</h4>
                    <ul>
                      <li className="courses-open">
                        <span className="no">6</span>
                        <p className="ctitle">
                          <span className="title">
                            <i className="fa fa-tv" /> Presentation{" "}
                            <a href="classes-video-details.html#">
                              <i className="fa fa-angle-down" />
                            </a>
                          </span>
                        </p>
                        <p className="other">
                          <span className="info">
                            <i className="fa fa-check" /> End of course
                          </span>
                        </p>
                      </li>
                    </ul>
                  </section>
                  <section className="courses-instructor clearfix">
                    <h3>ABOUT INSTRUCTOR</h3>
                    <div className="row instructor-single">
                      <div className="col-xs-12 col-sm-2">
                        <img
                          alt
                          className="avatar"
                          src="images/use_img/author_img.png"
                        />
                      </div>
                      <div className="col-xs-12 col-sm-9">
                        <h3 className="inst-name">
                          <a href="classes-video-details.html#">
                            Greg Christman
                          </a>
                        </h3>
                        <p className="meta">Head In Nichola's Sports Academy</p>
                        <ul className="social-icons">
                          <li>
                            <a href="http://twitter.com/">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="http://facebook.com/">
                              <i className="fa fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a href="http://linkedin.com/">
                              <i className="fa fa-linkedin-square" />
                            </a>
                          </li>
                          <li>
                            <a href="http://google.com/">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                          <li>
                            <a href="http://pinterest.com/">
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="http://instagram.com/">
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="http://youtube.com/">
                              <i className="fa fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="about-instr clearfix">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam sit amet nulla sed neque congue pharetra
                          sed sed leo. Pellentesque elementum porttitor libero
                          hendrerit porta. Aenean vitae odio semper, iaculis
                          nibh non, hendrerit augue. Nam non tincidunt justo, eu
                          fermentum nulla
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="courses-info clearfix">
                  <div className="courses-review clearfix">
                    <h3>REVIEWS</h3>
                    <div className="col-xs-12 col-sm-3 average-rating">
                      <p>Average Rating</p>
                      <p className="total-rating">4.8</p>
                      <div className="course_rating">
                        <i className="glyphicons glyphicon-star" />
                        <i className="glyphicons glyphicon-star" />
                        <i className="glyphicons glyphicon-star" />
                        <i className="glyphicons glyphicon-star" />
                        <i className="glyphicons glyphicon-star" />
                      </div>
                      <p>12 ratings</p>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                      <p>Details</p>
                      <div className="stars-rating">
                        <span>5 Stars</span>
                        <div className="progress active">
                          <div
                            className="progress-bar"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <span>9</span>
                      </div>
                      <div className="stars-rating">
                        <span>4 Stars</span>
                        <div className="progress active">
                          <div
                            className="progress-bar"
                            style={{ width: "30%" }}
                          />
                        </div>
                        <span>3</span>
                      </div>
                      <div className="stars-rating">
                        <span>3 Stars</span>
                        <div className="progress active">
                          <div className="progress-bar" style={{ width: 0 }} />
                        </div>
                        <span />
                      </div>
                      <div className="stars-rating">
                        <span>2 Stars</span>
                        <div className="progress active">
                          <div className="progress-bar" style={{ width: 0 }} />
                        </div>
                        <span />
                      </div>
                      <div className="stars-rating">
                        <span>1 Stars</span>
                        <div className="progress active">
                          <div className="progress-bar" style={{ width: 0 }} />
                        </div>
                        <span />
                      </div>
                    </div>
                  </div>
                  <ul className="review-list">
                    <li>
                      <img
                        alt
                        className="avatar"
                        src="images/use_img/author_img.png"
                      />
                      <div className="review-right col-xs-12 col-sm-9">
                        <span className="author-name">Greg Christman</span>
                        <div className="time">
                          6 months ago
                          <div className="course_rating">
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                          </div>
                        </div>
                      </div>
                      <div className="review-des">
                        <p>Excellent course!</p>
                        <p>
                          The material was presented in just the right sized
                          topics so that learning and understanding were
                          optimal. The instructor was articulate and easy to
                          understand. Highly recommend!
                        </p>
                      </div>
                    </li>
                    <li>
                      <img
                        alt
                        className="avatar"
                        src="images/use_img/author_img.png"
                      />
                      <div className="review-right col-xs-12 col-sm-9">
                        <span className="author-name">Mark Freeman</span>
                        <div className="time">
                          6 months ago
                          <div className="course_rating">
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                          </div>
                        </div>
                      </div>
                      <div className="review-des">
                        <p>Well organized and Informative.</p>
                        <p>
                          The material was presented in just the right sized
                          topics so that learning and understanding were
                          optimal. The instructor was articulate and easy to
                          understand. Highly recommend!
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="add-review clearfix">
                    <h3>Add a Review</h3>
                    <div className="row">
                      <form
                        action="classes-video-details.html#"
                        className="review_form"
                        method="post"
                      >
                        <div className="col-xs-12 col-sm-6">
                          <div className="form_row">
                            <label>
                              Name <span>*</span>
                            </label>
                            <input name="name" type="text" />
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                          <div className="form_row">
                            <label>
                              Email <span>*</span>
                            </label>
                            <input name="email" type="text" />
                          </div>
                        </div>
                        <div className="col-xs-12">
                          <div className="form_row">
                            <label>Your Rating</label>
                            <div className="course_rating">
                              <span className="glyphicon glyphicon-star-empty" />
                              <span className="glyphicon glyphicon-star-empty" />
                              <span className="glyphicon glyphicon-star-empty" />
                              <span className="glyphicon glyphicon-star-empty" />
                              <span className="glyphicon glyphicon-star-empty" />
                            </div>
                          </div>
                          <div className="form_row">
                            <label>
                              Message <span>*</span>
                            </label>
                            <textarea
                              className
                              name="message"
                              rows={10}
                              defaultValue={""}
                            />
                          </div>
                          <input
                            className="btn btn-default"
                            id="submitReview"
                            type="submit"
                            defaultValue="Submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </main>
              <div
                className="widget-area col-xs-12 col-sm-4 left-block"
                id="secondary"
                role="complementary"
              >
                <div className="co-join-info">
                  <p className="co-price">
                    Price: <s>$69.99</s> <span>$18</span>
                  </p>
                  <div className="btns">
                    <a
                      className="btn btn-orange btn-medium"
                      data-animation="animated zoomInUp"
                    >
                      Enroll This Classes{" "}
                    </a>
                  </div>
                  <div className="course_rat">
                    <div className="course_rating col-xs-12 col-sm-6 pull-left">
                      <i className="glyphicons glyphicon-star" />
                      <i className="glyphicons glyphicon-star" />
                      <i className="glyphicons glyphicon-star" />
                      <i className="glyphicons glyphicon-star-empty" />
                      <i className="glyphicons glyphicon-star-empty" />
                    </div>
                    <p className="enroll col-xs-12 col-sm-6">18.4K Enrolled</p>
                  </div>
                  <ul>
                    <li>
                      <span>Lectures:</span> 10
                    </li>
                    <li>
                      <span>Language:</span> English
                    </li>
                    <li>
                      <span>Video:</span> 12 hours
                    </li>
                    <li>
                      <span>Duration:</span> 30 days
                    </li>
                    <li>
                      <span>Includes:</span> Certificate of Completion
                    </li>
                    <li>
                      <span> </span>More includes here
                    </li>
                  </ul>
                </div>
                <aside className="widget widget_courses">
                  <h3 className="widget-title">Similar Classes</h3>
                  <ul>
                    <li className="clearfix">
                      <div className="course-thumbnail">
                        <img
                          alt
                          className="course-media-img"
                          src="images/use_img/widget-thumb.jpg"
                        />
                      </div>
                      <div className="simi-co">
                        <h5>
                          <a href="classes-video-details.html#">
                            JavaScript: Understanding the Weird Parts
                          </a>
                        </h5>
                        <p className="meta">
                          <a href="classes-video-details.html#">James Bond</a>
                        </p>
                        <p>
                          <span className="simi-price">$65</span>
                          <span className="rating">
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                          </span>
                        </p>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="course-thumbnail">
                        <img
                          alt
                          className="course-media-img"
                          src="images/use_img/widget-thumb.jpg"
                        />
                      </div>
                      <div className="simi-co">
                        <h5>
                          <a href="classes-video-details.html#">
                            Become an iOS Developer from Scratch
                          </a>
                        </h5>
                        <p className="meta">
                          <a href="classes-video-details.html#">
                            Greg Christman
                          </a>
                        </p>
                        <p>
                          <span className="simi-price">$66</span>
                          <span className="rating">
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                          </span>
                        </p>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="course-thumbnail">
                        <img
                          alt
                          className="course-media-img"
                          src="images/use_img/widget-thumb.jpg"
                        />
                      </div>
                      <div className="simi-co">
                        <h5>
                          <a href="classes-video-details.html#">
                            Ionic by Example: Create Mobile Apps in HTML5
                          </a>
                        </h5>
                        <p className="meta">
                          <a href="classes-video-details.html#">Emma Wilson</a>
                        </p>
                        <p>
                          <span className="simi-price">$35</span>
                          <span className="rating">
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star" />
                            <i className="glyphicons glyphicon-star-empty" />
                            <i className="glyphicons glyphicon-star-empty" />
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default GameDetails;
