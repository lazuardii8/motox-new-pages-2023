import React, { Fragment, useEffect } from "react";
import { TweenMax, TimelineMax } from "gsap";
import $ from "jquery";
import { DiscordIcon, DotIcon, DownIcon, LineBottomIcon, Logov2Icon, PlayIcon } from "../../../component/Svg/Svg";


const Section1 = (props) => {


  // useEffect(() => {
  //   const plusOne = $(".images__plus.one")
  //   const plusTwo = $(".images__plus.two")
  //   const plusThree = $(".images__plus.three")
  //   const plusFour = $(".images__plus.four")

  //   const logo = $(".wrapper__video-wrap-loading .wrap .logo")

  //   const action = $(".action__sec1")

  //   const infoBottom = $(".wrapper__text-bottom-info")

  //   const sosmed = $(".wrapper__line-sosmed")

  //   const navabar = $(".wrapper__navbar")

  //   const videoWrap = $(".wrapper__video-wrap-loading .wrap .lineWrap")

  //   const video = $(".wrapper__video-wrap")

  //   const WrapBg = $(".wrapper__bg-full")


  //   // inisialisaisi
  //   const tl = new TimelineMax({ repeat: 0, delay: 1.5 });


  //   // start:setMax

  //   TweenMax.set(plusOne, {
  //     css: {
  //       opacity: 0,
  //       x: "0",
  //       y: "5rem",
  //     },
  //   });
  //   TweenMax.set(plusTwo, {
  //     css: {
  //       opacity: 0,
  //       x: "0",
  //       y: "5rem",
  //     },
  //   });
  //   TweenMax.set(plusThree, {
  //     css: {
  //       opacity: 0,
  //       x: "0",
  //       y: "5rem",
  //     },
  //   });
  //   TweenMax.set(plusFour, {
  //     css: {
  //       opacity: 0,
  //       x: "0",
  //       y: "5rem",
  //     },
  //   });



  //   TweenMax.set(action, {
  //     css: {
  //       opacity: 0,
  //       x: "-50%",
  //       y: "5rem",
  //     },
  //   });


  //   TweenMax.set(infoBottom, {
  //     css: {
  //       opacity: 0,
  //       y: "5rem",
  //     },
  //   });


  //   TweenMax.set(logo, {
  //     css: {
  //       opacity: 0,
  //       x: "-50%",
  //       y: "-50%",
  //       top: "60%",
  //       scale: "0.2"
  //     },
  //   });


  //   TweenMax.set(sosmed, {
  //     css: {
  //       opacity: 0,
  //       y: "5rem",
  //     },
  //   });


  //   TweenMax.set(navabar, {
  //     css: {
  //       opacity: 0,
  //       y: "-5rem",
  //     },
  //   });

  //   TweenMax.set(videoWrap, {
  //     css: {
  //       opacity: 0,
  //       scale: "0.2"
  //     },
  //   });

  //   TweenMax.set(video, {
  //     css: {
  //       scale: "1",
  //       width: "100%",
  //       height: "100%"
  //     },
  //   });


  //   // end:setMax


  //   // start:animation
  //   tl.add([
  //     TweenMax.to(WrapBg, 1, {
  //       css: {
  //         opacity: 0,
  //       },
  //     }),

  //     TweenMax.to(logo, 1, {
  //       css: {
  //         opacity: 1,
  //         x: "-50%",
  //         y: "-60%",
  //         scale: "1"
  //       },
  //     }),


  //     TweenMax.to(WrapBg, 1, {
  //       css: {
  //         visibility: "hidden"
  //       },
  //     }),

  //   ]);
  //   // end:animation

  // }, [])



  return (
    <Fragment>

      <div className="wrapper__bg-full"></div>

      <div className="wrapper__video-wrap">
        <div className="pos">
          <img src="./../images/Rectangle 22653.png" className="cover" alt="" />
          <div className="bg"></div>
        </div>
      </div>

      <div className="image__dot-bg">
        <DotIcon />
      </div>

      <img src="./../images/Group 706181.png" className="images__line2-home" alt="" />

      <div className="wrapper__line-sosmed">
        <div className="pos">
          <img src="./../images/sos (2).png" className="sosmed" alt="" />
          <img src="./../images/Group 706118 (1).svg" className="line" alt="" />
        </div>
      </div>

      <img src="./../images/sfsfsf.png" className="images__plus one" alt="" />
      <img src="./../images/sfsfsf.png" className="images__plus two" alt="" />
      <img src="./../images/sfsfsf.png" className="images__plus three" alt="" />
      <img src="./../images/sfsfsf.png" className="images__plus four" alt="" />


      <div className="wrapper__video-wrap-loading">
        <div className="wrap">
          <div className="lineWrap">
            <img src="./../images/rc (1).png" className="obj-1" alt="" />
            <img src="./../images/rc (4).png" className="obj-2" alt="" />
            <img src="./../images/rc (3).png" className="obj-3" alt="" />
            <img src="./../images/rc (2).png" className="obj-4" alt="" />
          </div>
          <img src="./../images/Group 1502 (1).svg" className="logo" alt="" />

          {/* 
          <img src="./../images/Rectangle 22653.png" className="cover" alt="" />
          <div className="bg"></div> */}

          <div className="action__sec1">
            <div className="btn-sosmed d-flex align-items-center justify-content-center position-relative z-2">
              <img src="./../images/Vector (2).png" alt="" />
              <img src="./../images/Vector (2).png" alt="" />
              <a href="https://discord.gg/AhJz97vxsw" target="_blank" className="btn__clip">
                <DiscordIcon />
              </a>
              <a href="#!" className="btn__clip long koulen normal font__size--55 text__50-1024 text__50-md text__50-sm text__50-xxs text-uppercase color__white ml-2 ml-lg-3"><span>buy now</span></a>
              <img src="./../images/Vector (2).png" className="right" alt="" />
              <img src="./../images/Vector (2).png" className="right" alt="" />
            </div>
          </div>

        </div>

        <div className="wrapper__text-bottom-info d-flex align-items-center justify-content-between mt-3">
          <div className="d-flex align-items-center flex-shrink-0">
            <DownIcon />
            <div className="koulen font__size--24 text-text-uppercase color__white ml-2">About the Game</div>
          </div>
          <div className="line mx-3"></div>
          <div className="d-flex align-items-center flex-shrink-0">
            <PlayIcon />
            <div className="koulen font__size--24 text-text-uppercase color__white ml-2">watch trailer</div>
          </div>
        </div>
      </div>



    </Fragment>
  );
};

export default Section1;
