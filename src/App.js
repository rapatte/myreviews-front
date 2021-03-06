import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import FormNewReview from "./pages/newReview/FormNewReview";
import "./main.scss";
import { Header } from "./components/common";
import Login from "./pages/login/login";
import {
  PAGE_HOME,
  PAGE_LOGIN,
  PAGE_REVIEWS,
  PAGE_NEWREVIEW,
  PAGE_DETAILS,
  PAGE_MODIFIER,
} from "./constants/router";
import Reviews from "./pages/reviews/reviews";
import PrivateRoute from "./utils/PrivateRoute";
import ReviewDetails from "./pages/reviewDetails/ReviewDetails";
import ReviewModifier from "./pages/reviewModifier/ReviewModifier";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={PAGE_HOME} component={Home} />
        <Route exact path={PAGE_LOGIN} component={Login} />
        <Route exact path={PAGE_REVIEWS} component={Reviews} />
        <Route path={PAGE_DETAILS} component={ReviewDetails} />
        <PrivateRoute path={PAGE_MODIFIER} component={ReviewModifier} />
        <PrivateRoute exact path={PAGE_NEWREVIEW} component={FormNewReview} />
      </Switch>
    </Router>
  );
}

export default App;
