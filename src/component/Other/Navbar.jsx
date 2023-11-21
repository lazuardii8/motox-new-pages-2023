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
                        <div className="menu text-center position-relative z-2 mt-5">
                            <a onClick={() => {
                                window.fullpage_api.moveTo(1)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>Home</a>


                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(2)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>MotoX</a>


                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(3)
                                setToogleMenu(!toogleMenu)
                            }}
                                className={"pointer font__size--45 text-uppercase color__white koulen normal "}>Tracks</a>


                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(4)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>Multiplayer</a>


                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(5)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>Career</a>
                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(6)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>WORLD</a>
                            <hr />
                            <a onClick={() => {
                                window.fullpage_api.moveTo(7)
                                setToogleMenu(!toogleMenu)
                            }} className={"pointer font__size--45 text-uppercase color__white koulen normal "}>community</a>


                        </div>

                    </div>
                </div>
            </div >
            <nav
                className={"navbar navbar-expand-lg wrapper__navbar transition-all duration-500 fixed position-relative z-2 " + (toogleMenu ? "active" : "")}
            >
                <div className="container position-relative">
                    {/* <img src="./../images/Vector 317.png" className="images__nav-line-1 md:w-[44vh] xl:w-auto" alt="" /> */}
                    <div className="images__nav-line-1 md:w-[44vh] xl:w-auto">
                        <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 379 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="nav-p-1" d="M0 22H207.5L228.5 1H378.5" stroke="#FC003C" stroke-width="2" />
                        </svg>
                    </div>
                    <a
                        onClick={() => window.fullpage_api.moveTo(1)}
                        class={"pointer navbar-brand font__size--18 text__18-1024 normal "}
                    >
                        <LogoIcon width={"62px"} height={"52px"} />
                    </a>



                    <div
                        className="wrapper__navbar-menu my-auto lg:block hidden"
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
                                    MotoX
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(3)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 3 ? "bold" : "opacity__4 normal")}
                                >
                                    Tracks
                                </a>


                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(4)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 4 ? "bold" : "opacity__4 normal")}
                                >
                                    Multiplayer
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => window.fullpage_api.moveTo(5)}
                                    class={"pointer nav-link light font__size--16 text__16-1024 text-uppercase color__white hover " + (props.current == 5 ? "bold" : "opacity__4 normal")}
                                >
                                    Career
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
                                    community
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