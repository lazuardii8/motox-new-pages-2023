import React, { Fragment, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// dashboard
const Homepage = React.lazy(() => import('./homepage/index'));

const index = (props) => {
  return (
    <Fragment>
      <Suspense fallback={<div></div>}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  );
};

export default index;
