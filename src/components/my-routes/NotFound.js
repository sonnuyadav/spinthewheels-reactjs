import React from "react";
import Base from "../base";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
      <Base><>
          
          <div className="page-spacer clearfix">
              <div id="primary">
                  <main id="main" className="site-main">
                      <section className="error-404 not-found">
                          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">
                              <span className="font-large">404 <strong>page not found</strong></span>
                              <h2 className="text-center head-border-default">Something Is Wrong</h2>
                              <div className="page-content">
                                  <h4>The page you are looking for was moved, removed, renamed
                                      or might never exist.</h4>
                                  <Link to="/" className="btn btn-normal btn-medium">Go Home</Link>
                              </div>
                          </div>
                      </section>
                  </main>
              </div>
          </div>
      </>
      </Base>
  );
};

export default NotFound;
