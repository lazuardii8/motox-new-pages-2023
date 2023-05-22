import React, { Component, Fragment, Suspense } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../../component/Other/Navbar";
import { Sec4Line2Icon, Sec5Line2Icon, Sec5Line3Icon, Sec6Line4Icon, Sec7Line1Icon, Sec7Line2Icon } from "../../component/Svg/Svg";


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

    // $(".onScroll").removeClass("aos-animate");
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

  fullapi(state, api) {
    // console.log(state);
    // console.log(api);
  }
  componentDidMount() {

    const style = document.documentElement.style;
    style.setProperty("--height", `${window.innerHeight}px`);
  }

  render() {
    const anchors = [];
    return (
      <Fragment>
        {
          this.state.currentSlide != 8 ? <div className="wrapper__number zen font__size--20 d-none d-md-block">
            <div className="d-flex align-items-center">
              <img src="./../images/Vector 304.png" alt="" />
              <div className="mx-3">
                % {this.state.currentSlide <= 9 ? 0 : ""}{this.state.currentSlide}
              </div>
              <img src="./../images/Vector 305.png" className="right" alt="" />
            </div>
          </div> : ""
        }


        <Navbar current={this.state.currentSlide} />

        <div className="overflow-hidden position-relative wrapper__wrap-all-screan">
          <ReactFullpage
            scrollOverflow={true}
            loopBottom={false}
            loopTop={false}
            css3={true}
            autoScrolling={true}
            scrollingSpeed={600}
            // anchors={anchors}
            // navigation
            // navigationTooltips={anchors}
            normalScrollElements={".wrapper__side-nav-mobile"}
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
                    <div className="wrapper__h-100-screan d-flex align-items-center justify-content-center">
                      <Suspense fallback={<div>Loading...</div>}>
                        <Section1 />
                      </Suspense>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <div className="wrapper__h-100-screan py-4 d-flex align-items-center justify-content-center">
                      <div className="w-100">
                        <Suspense fallback={<div>Loading...</div>}>
                          <Section2 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <div className=" wrapper__h-100-screan py-4 d-flex align-items-center justify-content-center">
                      <div className="w-100">
                        <Suspense fallback={<div>Loading...</div>}>
                          <Section3 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <div className="wrapper__h-100-screan py-4 d-flex align-items-center justify-content-center wrapper__align-750-680-end">
                      <div className="w-100">
                        <Suspense fallback={<div>Loading...</div>}>
                          <Section4 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <div className="wrapper__h-100-screan py-4 d-flex align-items-center justify-content-center">
                      <div className="w-100">
                        <Suspense fallback={<div>Loading...</div>}>
                          <Section5 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <div className="wrapper__h-100-screan py-4 d-flex align-items-center justify-content-center">
                      <div className="w-100">
                        <Suspense fallback={<div>Loading...</div>}>
                          <Section6 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <div className="wrapper__h-100-screan py-4 d-flex align-items-center justify-content-center">
                      <div className="w-100">
                        <Suspense fallback={<div>Loading...</div>}>
                          <Section7 />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                  <div className="section bg__black position-relative overflow-hidden">
                    <div className="wrapper__h-100-screan py-4 d-flex align-items-center wrapper__align-750-end justify-content-center">
                      <div className="w-100">
                        <Suspense fallback={<div>Loading...</div>}>
                          <Section8 />
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
