import React, { useState } from "react";

import { Link } from "react-router-dom";
import Base from "../../../base";
import GameCard from "./game-card";
import { Pagination } from "react-bootstrap";
import { Helmet } from "react-helmet";
//import GameListData from "../../../../app/data/game-list-data";

const GameList = () => {
  return (
    <Base>
      <Helmet>
        <title>Game List - EGamz</title>
        <meta
          name="description"
          content="You can find world's Best Child Games on our website"
        />
      </Helmet>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <header className="entry-header">
              <h1 className="entry-title">Games</h1>
            </header>
          </div>
        </div>
      </div>
      <div className="page-spacer clearfix">
        <div id="primary">
          <div className="container">
            <div className="row">
              <main id="main" className="site-main col-xs-12 ">
                <div className="school-classes inner-classes">
                  {/*{console.log(GameListData)}
                  {GameListData.map((game) => {
                    return (
                      <div className="col-12 col-sm-6 col-lg-4 zoom">
                        <GameCard game={game} />
                      </div>
                    );
                  })}*/}

                  <div className="col-12 col-sm-6 col-lg-4 zoom">
                    <GameCard />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 zoom">
                    <GameCard />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 zoom">
                    <GameCard />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 zoom">
                    <GameCard />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 zoom">
                    <GameCard />
                  </div>
                </div>
                <Pagination>
                  <Pagination.Prev className="page-numbers" />
                  <Pagination.Item active className="page-numbers">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item className="page-numbers">
                    {2}
                  </Pagination.Item>
                  <Pagination.Item className="page-numbers">
                    {3}
                  </Pagination.Item>
                  <Pagination.Item className="page-numbers">
                    {4}
                  </Pagination.Item>
                  <Pagination.Ellipsis className="page-numbers" />
                  <Pagination.Item className="page-numbers">
                    {20}
                  </Pagination.Item>
                  <Pagination.Next className="page-numbers" />
                </Pagination>
                <div className="pagination">
                  <span className="page-numbers current">1</span>
                  <a href="classes-3-columns.html#" className="page-numbers">
                    2
                  </a>
                  <a href="classes-3-columns.html#" className="page-numbers">
                    3
                  </a>
                  <a
                    href="classes-3-columns.html#"
                    className="next page-numbers"
                  >
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default GameList;
