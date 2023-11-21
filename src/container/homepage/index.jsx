import React, { Component, Fragment, Suspense } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../../component/Other/Navbar";
import { ClosedIcon, Sec4Line2Icon, Sec5Line2Icon, Sec5Line3Icon, Sec6Line4Icon, Sec7Line1Icon, Sec7Line2Icon } from "../../component/Svg/Svg";
import ReactPlayer from "react-player";
import { TweenMax } from "gsap";


const Section1 = React.lazy(() => import('./section/section1'));
const Section2 = React.lazy(() => import('./section/section2'));
const Section3 = React.lazy(() => import('./section/section3'));
const Section4 = React.lazy(() => import('./section/section4'));
const Section5 = React.lazy(() => import('./section/section5'));
const Section6 = React.lazy(() => import('./section/section6'));
const Section7 = React.lazy(() => import('./section/section7'));
const Section8 = React.lazy(() => import('./section/section8'));

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      totalSlide: 8,
      currentSlide: 1,
      anchor: ["HOME", "ABOUT ME", "PODCAST", "CONTACT"],
      anchorSelect: "",
      isOpen: false,
    };
  }

  componentDidMount() {

  }

  onLeave(origin, destination, direction) {
    // console.log("Leaving section " + origin.index);
    this.solveSkipPages(origin, destination, direction)
    console.log(destination.index)
    if (destination.index == 5) {
      TweenMax.set(".bg6", {
        css: {
          y: -10,
        },
      });
      TweenMax.to(".bg6", {
        css: {
          y: 0,
        },
      });
      TweenMax.set(".ct6", {
        css: {
          y: -10,
        },
      });
      TweenMax.to(".ct6", {
        clearProps: "all",
      });
    }
  }

  afterRender(origin, destination, direction) {
    // console.log("after render");
  }

  afterLoad(origin, destination, direction) {
    // console.log("After load: " + destination.index);
    this.setState({
      currentSlide: destination.index + 1,
    });

  }

  solveSkipPages(origin, destination, direction) {
    console.log(destination.index + 1)
    // window.fullpage_api.moveTo(destination.index)
    setTimeout(function () {
      window.fullpage_api.moveTo(destination.index + 1);
    });
  }

  fullapi(state, api) {
    // console.log(state);
    // console.log(api);
  }
  componentDidMount() {

    const style = document.documentElement.style;
    style.setProperty("--height", `${window.innerHeight}px`);
  }

  toogleModal = () => {
    console.log('modal')
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const anchors = [];
    return (
      <Fragment>

        <div className={"wrapper__modal-full-video bg-black " + (this.state.isOpen ? "active" : "")}>
          <div className="wrap">
            <div className="close pointer" onClick={this.toogleModal}>
              <ClosedIcon />
            </div>
            <ReactPlayer
              className="loading_img"
              url="https://dfpcevrzf8nxo.cloudfront.net/kyle-ende4.mp4"
              playing={this.state.isOpen}
              muted={false}
              autoPlay={this.state.isOpen}
              playsinline={true}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>



        <Navbar current={this.state.currentSlide} />

        <div className="overflow-hidden position-relative wrapper__wrap-all-screan">

          <ReactFullpage
            scrollOverflow={true}
            loopBottom={false}
            loopTop={false}
            css3={true}
            autoScrolling={true}
            scrollingSpeed={1000}
            touchSensitivity={15}
            onLeave={this.onLeave.bind(this)}
            afterLoad={this.afterLoad.bind(this)}
            afterRender={this.afterRender.bind(this)}
            render={({ state, fullpageApi }) => {
              this.fullapi(state, fullpageApi);
              <Component
                fullPageState={state}
                fullPageApi={fullpageApi}
              ></Component>;
              return (
                <div id="fullpage-wrapper position-relative">
                  <div className="section bg__black position-relative overflow-hidden">
                    <img src="./../images/Group 706067.svg" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                    <div className="bgWrap absolute z-[9999] w-full h-full left-0 top-0 bg-black transition-all duration-500 pointer-events-none"></div>
                    <div className="wrapper__h-100-screan overflow-hidden d-flex align-items-center justify-content-center">
                      <div className="w-100 h-full">
                        <Suspense fallback={<div></div>}>
                          <Section1 toogleModal={this.toogleModal} />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <img src="./../images/Group 706067.svg" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                    <div className="wrapper__h-100-screan overflow-hidden d-flex align-items-center justify-content-center">
                      <div className="w-100 h-full">
                        <Suspense fallback={<div></div>}>
                          <Section2 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <img src="./../images/Group 706067.svg" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                    <div className=" wrapper__h-100-screan overflow-hidden d-flex align-items-center justify-content-center">
                      <div className="w-100 h-full">
                        <Suspense fallback={<div></div>}>
                          <Section3 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <img src="./../images/Group 706067.svg" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                    <div className="wrapper__h-100-screan overflow-hidden d-flex align-items-center justify-content-center wrapper__align-750-680-end">
                      <div className="w-100 h-full">
                        <Suspense fallback={<div></div>}>
                          <Section4 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <img src="./../images/Group 706067.svg" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                    <div className="wrapper__h-100-screan overflow-hidden d-flex align-items-center justify-content-center">
                      <div className="w-100 h-full">
                        <Suspense fallback={<div></div>}>
                          <Section5 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <img src="./../images/Group 706067.svg" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                    <div className="wrapper__h-100-screan overflow-hidden d-flex align-items-center justify-content-center">
                      <div className="w-100 h-full">
                        <Suspense fallback={<div></div>}>
                          <Section6 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <img src="./../images/Group 706067.svg" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                    <div className="wrapper__h-100-screan overflow-hidden d-flex align-items-center justify-content-center">
                      <div className="w-100 h-full">
                        <Suspense fallback={<div></div>}>
                          <Section7 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </Fragment >
    );
  }
}
