import React, { Fragment, Suspense, useEffect } from "react";
import $ from "jquery";

const Desktop = React.lazy(() => import('../../../component/Section/one/Desktop'));
const Mobile = React.lazy(() => import('../../../component/Section/one/Mobile'));

const Section1 = (props) => {
  const showScreen = () => {
    console.log($(window).width())
    if ($(window).width() >= 576) {
      return <Suspense fallback={<div>Loading...</div>}>
        <Desktop toogleModal={props.toogleModal} />
      </Suspense>
    } else {
      return <Suspense fallback={<div>Loading...</div>}>
        <Mobile toogleModal={props.toogleModal} />
      </Suspense>
    }
  }
  return (
    <Fragment>
      {showScreen()}
    </Fragment>
  );
};

export default Section1;
