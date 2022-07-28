import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TablePage, DetailPage } from "../../pages";

const Content = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TablePage />
        </Route>
        <Route path="/detail/:searchWord/:currentPage/:index">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Content;
