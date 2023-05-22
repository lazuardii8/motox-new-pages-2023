import React, { Fragment } from "react";
import { RidesIcon, DiscordIcon } from "../../../component/Svg/Svg";
import Sec1 from "../../../component/Background/Sec1";

const Section1 = (props) => {
  return (
    <Fragment>

      <Sec1 section={1} />

      <div className="container position-relative z-2 py-4 d-flex align-items-center justify-content-center h-100 flex-wrap">
        <img src="./../images/Group 706101.png" className="images__character-all" alt="" />

        <img src="./../images/Group 706118.png" className="images__head-text-one" alt="" />

        <div className="wrapper__text-heading sec1">
          <h2 className="koulen normal font__size--60 text__60-1024 text__60-md text__60-sm wrapper__wrap-text darkblue mb-0 mb-md-2"><span>WELCOME TO MOTO-X</span></h2>
          <div className="mb-md-3">
            <RidesIcon width={"100%"} />
          </div>

          <div className="btn-sosmed d-flex align-items-center justify-content-end">
            <img src="./../images/Vector (2).png" alt="" />
            <img src="./../images/Vector (2).png" alt="" />
            <a href="#!" className="btn__clip">
              <DiscordIcon />
            </a>
            <a href="#!" className="btn__clip long koulen normal font__size--55 text__50-1024 text__50-md text__50-sm text__50-xxs text-uppercase color__white ml-2 ml-lg-3">join BETA</a>
            <img src="./../images/Vector (2).png" className="right" alt="" />
            <img src="./../images/Vector (2).png" className="right" alt="" />
          </div>
        </div>

        <div className="wrapper__sosmed align-self-end ml-auto d-flex align-items-center">
          <img src="./../images/sos (2).png" alt="" />
          <img src="./../images/sos (1).png" className="mx-3" alt="" />
          <img src="./../images/sos (3).png" alt="" />
        </div>

      </div>
    </Fragment>
  );
};

export default Section1;
