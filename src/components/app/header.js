import React, { useState } from "react";
import Logo from "../../assets/images/logo.jfif";
import { Link, useHistory, withRouter } from "react-router-dom";

const currentTabClass = (history, path) => {
  if (history.location.pathname === path) {
    return "active";
  } else {
    return "";
  }
};

const Header = (history) => {
  let history2 = useHistory();
  const [values, setValues] = useState({
    isGameHover: false,
  });

  return (
    <header className="site-header home-one" id="masthead">
      <div className="container">
        <div className="row">
          <div className="site-branding col-xs-12 col-sm-3">
           <span>SpinTheWheel</span>
          </div>
          <nav
            className="main-navigation navbar navbar-default"
            id="site-navigation"
          >
            <div className="navbar-header">
              <button
                data-target=".navbar-ex1-collapse"
                data-toggle="collapse"
                className="navbar-toggle"
                type="button"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
              <li className={currentTabClass(history, "/")}>
                  <Link to="/">Game</Link>
                </li>
                <li className={currentTabClass(history, "/score-board")}>
                  <Link to="/daily-score">Daily Score</Link>
                </li>
                <li className={currentTabClass(history, "/monthly-board")}>
                  <Link to="/monthly-score">Monthly Score</Link>
                </li>
                <li className={currentTabClass(history, "/all-board")}>
                  <Link to="/all-score">All Score</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
