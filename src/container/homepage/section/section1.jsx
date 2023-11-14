import React, { Fragment, useEffect } from "react";
import $ from "jquery";
import Desktop from "../../../component/Section/one/Desktop";
import Mobile from "../../../component/Section/one/Mobile";

const Section1 = (props) => {
  const showScreen = () => {
    if ($(window).width() >= 768) {
      return <Desktop toogleModal={props.toogleModal} />
    } else {
      return <Mobile toogleModal={props.toogleModal} />
    }
  }
  return (
    <Fragment>
      {showScreen()}
    </Fragment>
  );
};

export default Section1;
