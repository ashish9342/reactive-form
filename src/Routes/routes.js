import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import text from "./../configs/text";
import Home from "./../pages/home/home";
import Details from "./../pages/details/Details";

const Routes = () => {
  return (
    <Router>
      <div>
        <Link to="/">{text?.home}</Link> | &nbsp;
        <Link to="/details">{text?.details}</Link>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </div>
    </Router>
  );
};

export default Routes;
