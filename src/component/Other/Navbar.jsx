import React, { Component, Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoIcon } from "../Svg/Svg";
import SecBG from "../Background/SecBG";

const Navbar = (props) => {
    const [toogleMenu, setToogleMenu] = useState(false)

    return (
        <Fragment>
            <div className={"wrapper__side-nav-mobile d-flex d-lg-none " + (toogleMenu ? "active" : "")}>
                <div className="d-flex flex-wrap w-100 position-relative navwarap">
                    <div className="w-100 position-relative">
                        <SecBG />
                        <div className="d-flex align-items-center justify-content-between mb-4 position-relative z-2">
                            <a
                                onClick={() => {
                                    window.fullpage_api.moveTo(1)
                                    setToogleMenu(!toogleMenu)
                                }}
                                class="pointer navbar-brand font__size--20 normal color__white wrapper__center-nav"
                            >
                                <img src="./../images/Group 705849.png" className="images__logo" alt="" />
                            </a>


                            <img src="./../images/Frame 705600.png" onClick={() => setToogleMenu(!toogleMenu)} className="pointer" alt="" />
                        </div>
                        <div className="menu text-center position-relative z-2">
                            <a onClick={() => {
                                window.fullpage_api.moveTo(1)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>Home</a>


                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(2)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>ABOUT US</a>


                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(3)
                                setToogleMenu(!toogleMenu)
                            }}
                                className={"pointer font__size--45 text-uppercase color__white koulen normal "}>STEP</a>


                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(4)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>CUSTOM</a>


                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(5)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>Player</a>
                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(6)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>WORLD</a>
                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(7)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>EVENTS</a>


                        </div>

                    </div>
                </div>
            </div >
            <nav
                className={"navbar navbar-expand-lg wrapper__navbar fixed position-relative z-2 " + (toogleMenu ? "active" : "")}
            >
                <div className="container position-relative">
                    <img src="./../images/Vector 306.png" className="images__nav-line-1" alt="" />
                    <a
                        onClick={() => window.fullpage_api.moveTo(1)}
                        class={"pointer navbar-brand font__size--18 text__18-1024 normal "}
                    >
                        <LogoIcon width={"62px"} height={"52px"} />
                    </a>



                    <div
                        className="collapse navbar-collapse wrapper__navbar-menu my-auto"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">

                                <a
                                    onClick={() => window.fullpage_api.moveTo(1)}
                                    class={"pointer nav-link font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 1 ? "bold" : "opacity__4 normal")}
                                >
                                    HOME
                                </a>


                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(2)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 2 ? "bold" : "opacity__4 normal")}
                                >
                                    ABOUT US
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(3)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 3 ? "bold" : "opacity__4 normal")}
                                >
                                    STEP
                                </a>


                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(4)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 4 ? "bold" : "opacity__4 normal")}
                                >
                                    CUSTOM
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(5)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 5 ? "bold" : "opacity__4 normal")}
                                >
                                    Player
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(6)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 6 ? "bold" : "opacity__4 normal")}
                                >
                                    WORLD
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(7)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 7 ? "bold" : "opacity__4 normal")}
                                >
                                    EVENTS
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center d-lg-none ml-auto">
                        <div
                            onClick={() => setToogleMenu(!toogleMenu)}
                            class={"pointer nav__button position-relative " + (toogleMenu ? "active" : "")}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar