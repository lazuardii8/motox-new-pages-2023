import React, { Fragment, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// dashboard
const Homepage = React.lazy(() => import('./homepage/index'));

const index = (props) => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <Homepage />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default index;
