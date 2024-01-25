import React, { Fragment, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// dashboard
const Homepage = React.lazy(() => import('./homepage/index'));
const Error = React.lazy(() => import('./homepage/Error'));

const index = (props) => {
  return (
    <Fragment>
      <Suspense fallback={<div></div>}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  );
};

export default index;
