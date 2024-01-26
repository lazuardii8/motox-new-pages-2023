import React, { Fragment, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// dashboard
const Homepage = React.lazy(() => import('./homepage/index'));
const Error = React.lazy(() => import('./homepage/Error'));

const index = (props) => {
  useEffect(() => {
    $('body').on('click touchstart', function () {
      var videoSleep = document.querySelectorAll("video.lazy");
      var videoSleepUp = document.querySelectorAll(".lazy video");

      if (videoSleep.length >= 1) {
        videoSleep.forEach(element => {
          if (videoSleep.playing) {
            // video is already playing so do nothing
          } else {
            element.play().then(() => {
              // do something after successful playback
            })
              .catch(error => {
                // handle any errors that occurred during playback
              });
          }
        });
      }
      if (videoSleepUp.length >= 1) {
        videoSleepUp.forEach(element => {
          if (videoSleep.playing) {
            // video is already playing so do nothing
          } else {
            element.play().then(() => {
              // do something after successful playback
            })
              .catch(error => {
                // handle any errors that occurred during playback
              });
          }
        });
      }
    });
  }, [])

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
