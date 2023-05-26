import React, { Fragment, useEffect } from "react";
import { TweenMax, TimelineMax } from "gsap";
import $ from "jquery";
import { DiscordIcon, DotIcon, DownIcon, LineBottomIcon, Logov2Icon, PlayIcon } from "../../../component/Svg/Svg";
import { Power0 } from "gsap";
import { Power2 } from "gsap";
import { Circ } from "gsap";


const Section1 = (props) => {


  useEffect(() => {
    window.fullpage_api.setAllowScrolling(false);

    var windowWidth = $(window).width();

    const plusOne = $(".images__plus.one")
    const plusTwo = $(".images__plus.two")
    const plusThree = $(".images__plus.three")
    const plusFour = $(".images__plus.four")

    const logo = $(".wrapper__video-wrap-loading .wrap .logo")

    const action = $(".action__sec1")

    const infoBottom = $(".wrapper__text-bottom-info")

    const sosmed = $(".wrapper__line-sosmed")

    const navabar = $(".wrapper__navbar")

    const videoWrap = $(".wrapper__video-wrap-loading .wrap .lineWrap")

    const video = $(".wrapper__video-wrap")

    const WrapBg = $(".wrapper__bg-full")


    // inisialisaisi
    const tl = new TimelineMax({
      repeat: 0, delay: 1.5, onComplete: () => {
        window.fullpage_api.setAllowScrolling(true);
      }
    });


    // start:setMax

    TweenMax.set(plusOne, {
      css: {
        opacity: 0,
        x: "0",
        y: "5rem",
      },
    });
    TweenMax.set(plusTwo, {
      css: {
        opacity: 0,
        x: "0",
        y: "5rem",
      },
    });
    TweenMax.set(plusThree, {
      css: {
        opacity: 0,
        x: "0",
        y: "5rem",
      },
    });
    TweenMax.set(plusFour, {
      css: {
        opacity: 0,
        x: "0",
        y: "5rem",
      },
    });



    TweenMax.set(action, {
      css: {
        opacity: 0,
        bottom: "-8vh",
      },
    });


    TweenMax.set(infoBottom, {
      css: {
        opacity: 0,
        y: "5rem",
      },
    });


    TweenMax.set(logo, {
      css: {
        opacity: 1,
        yPercent: -50,
        top: "50%",
        // scale: "0.2"
      },
    });


    TweenMax.set(sosmed, {
      css: {
        opacity: 0,
        y: "5rem",
      },
    });


    TweenMax.set(navabar, {
      css: {
        opacity: 0,
        y: "-5rem",
      },
    });

    TweenMax.set(videoWrap, {
      css: {
        opacity: 0,
        scale: "0.2"
      },
    });

    TweenMax.set(video, {
      css: {
        scale: "1",
        width: "100%",
        height: "100%",
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0
      },
    });


    // end:setMax


    // start:animation
    tl.add([
      TweenMax.to(WrapBg, 1, {
        css: {
          opacity: 0,
        },
      }),

      // TweenMax.to(logo, 1, {
      //   css: {
      //     opacity: 1,
      //     scale: "1",
      //     ease: Circ.easeOut
      //   },
      // }),

    ]);

    tl.add([
      TweenMax.to(WrapBg, 1, {
        css: {
          visibility: "hidden"
        },
      }),

      TweenMax.to(navabar, 1, {
        css: {
          opacity: 1,
          y: "0rem",
        },
      }),

      TweenMax.to(sosmed, 1, {
        css: {
          opacity: 1,
          y: "0rem",
        },
      }),
    ]);

    tl.add([
      TweenMax.to(logo, 1, {
        css: {
          scale: "1",
          top: windowWidth > 768 ? "8%" : "5%",
          ease: Circ.easeOut
        },
      }),

      //   TweenMax.to(logo, 1, {
      //     css: {
      //       top: windowWidth > 768 ? "8%" : "5%",
      //       ease: Circ.easeOut
      //     },
      //   }),

    ]);


    tl.add([

      TweenMax.to(video, 1, {
        css: {
          scale: "1",
          width: windowWidth > 1024 ? "calc(50vw - 1rem)" : windowWidth > 576 ? "calc(75vw - 1rem)" : "calc(90vw - 1rem)",
          height: windowWidth > 576 ? "calc(66vh - 1rem)" : "calc(55vh - 1rem)",
          ease: "linear",
          delay: 3,
          ease: Circ.easeOut
        },
      }),

    ]);

    tl.add([

      TweenMax.to(videoWrap, {
        css: {
          opacity: 1,
          scale: "1",
        },
      }),
      TweenMax.to(action, {
        css: {
          opacity: 1,
          bottom: "6vh"
        },
      }),


      TweenMax.to(infoBottom, {
        css: {
          opacity: 1,
          y: "0",
        },
      }),

    ]);

    tl.add([

      TweenMax.to(plusOne, 1, {
        css: {
          opacity: 1,
          x: "0",
          y: "0",
        },
      }),
      TweenMax.to(plusTwo, 2, {
        css: {
          opacity: 1,
          x: "0",
          y: "0",
        },
      }),
      TweenMax.to(plusThree, 3, {
        css: {
          opacity: 1,
          x: "0",
          y: "0",
        },
      }),
      TweenMax.to(plusFour, 4, {
        css: {
          opacity: 1,
          x: "0",
          y: "0",
        },
      }),

    ]);
    // // end:animation

  }, [])



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
            <div className="koulen font__size--24 text__24-1024 text-text-uppercase color__white ml-2">About the Game</div>
          </div>
          <div className="line mx-3"></div>
          <div className="d-flex align-items-center flex-shrink-0">
            <PlayIcon />
            <div className="koulen font__size--24 text__24-1024 text-text-uppercase color__white ml-2">watch trailer</div>
          </div>
        </div>
      </div>



    </Fragment>
  );
};

export default Section1;
