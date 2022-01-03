import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "../home";
import ScoreBoard from "../pages/dailyscore/";
import MonthlyBoard from "../pages/monthlyscore/";
import AllScore from "../pages/score/";


function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/daily-score" component={ScoreBoard} />
        <Route exact path="/monthly-score" component={MonthlyBoard} />
        <Route exact path="/all-score" component={AllScore} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
