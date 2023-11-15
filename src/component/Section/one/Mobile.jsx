import React, { Fragment, useEffect } from 'react'
import { DiscordIcon } from '../../Svg/Svg'
import { TweenMax, TimelineMax } from "gsap";
import $ from "jquery";
import { Circ } from "gsap";
import { TweenLite } from 'gsap/gsap-core';

const Mobile = (props) => {
    useEffect(() => {
        window.fullpage_api.setAllowScrolling(false);

        const coverVideo = $(".coverVideo")
        const logoCover = $(".logoCover")
        const bgWrap = $(".bgWrap")
        const navbar = $(".wrapper__navbar")
        const lineLeft = $(".lineLeft")
        const btnAction = $(".btnAction")
        const textAction = $(".textAction")
        const motoContent = $(".motoContent")
        const sosmedBottom = $(".sosmedBottom")

        // / inisialisaisi
        const tl = new TimelineMax({
            repeat: 0, delay: 1.5, onComplete: () => {
                window.fullpage_api.setAllowScrolling(true);
            }
        });

        TweenMax.set(coverVideo, {
            css: {
                width: window.innerWidth + 45,
                height: window.innerHeight + 45,
                x: "-3rem",
                y: "-17%"
            },
        });

        TweenMax.set(logoCover, {
            css: {
                top: "50vh",
                opacity: 0,
            },
        });

        TweenMax.set(navbar, {
            css: {
                top: "-100rem"
            },
        });
        TweenMax.set(lineLeft, {
            css: {
                left: "-100rem"
            },
        });
        TweenMax.set(btnAction, {
            css: {
                opacity: 0,
                bottom: "-10rem"
            },
        });
        TweenMax.set(textAction, {
            css: {
                opacity: 0,
                y: "5rem"
            },
        });
        TweenMax.set(motoContent, {
            css: {
                left: "150%"
            },
        });
        TweenMax.set(sosmedBottom, {
            css: {
                bottom: "-100rem"
            },
        });


        tl.add([
            TweenMax.to(bgWrap, 1, {
                css: {
                    opacity: 0,
                },
            }),
        ]);
        tl.add([
            TweenMax.to(logoCover, 1, {
                css: {
                    top: "40vh",
                    opacity: 1,
                },
            }),
        ]);
        tl.add([
            TweenMax.to(logoCover, 1, {
                css: {
                    top: "25vh",
                    opacity: 1,
                    ease: Circ.easeOut
                },
                onComplete: function () {
                    TweenLite.set(logoCover, { top: 0, ease: Circ.easeOut });
                }
            }),
            TweenLite.to(coverVideo, 2, {
                css: {
                    width: window.innerWidth + 45,
                    height: window.innerHeight + 45,
                    x: "-3rem",
                    y: "-17%"
                },
                onComplete: function () {
                    TweenLite.set(coverVideo, { clearProps: "all", ease: Circ.easeOut });
                }
            }),
        ]);

        tl.add([
            TweenLite.to(navbar, 1, {
                css: {
                    top: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(navbar, { top: "0rem" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(lineLeft, 1, {
                css: {
                    left: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(lineLeft, { left: "0rem" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(btnAction, 1, {
                css: {
                    opacity: 0,
                    bottom: "-10rem"
                },
                onComplete: function () {
                    TweenLite.set(btnAction, { clearProps: "all" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(textAction, 1, {
                css: {
                    opacity: 0,
                    y: "5rem"
                },
                onComplete: function () {
                    TweenLite.set(textAction, { clearProps: "all" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(motoContent, 1, {
                css: {
                    left: "150%"
                },
                onComplete: function () {
                    TweenLite.set(motoContent, { clearProps: "all" });
                }
            }),
        ]);

        tl.add([
            TweenLite.to(sosmedBottom, 1, {
                css: {
                    bottom: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(sosmedBottom, { clearProps: "all" });
                }
            }),
        ]);

    }, [])

    return (
        <Fragment>
            <img src="./../images/sdasdfsa.svg" className="lineLeft transition-all duration-500 absolute left-0 bottom-0 md:hidden w-full pointer-events-none hminSm700:-bottom-[8rem]" alt="" />
            <div className="sosmedBottom transition-all duration-500 absolute w-full bottom-0 left-0 h-[54px] md:h-[90px]">
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundImage: "url('./../images/Frame 706117.svg')" }}>
                    <div className="container">
                        <div className="flex items-center justify-center md:justify-end gap-[2.5rem] md:gap-4">
                            <img src="./../images/ss (1).png" className="w-[40px] md:w-auto" alt="" />
                            <img src="./../images/ss (3).png" className="w-[40px] md:w-auto" alt="" />
                            <img src="./../images/ss (2).png" className="w-auto" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container relative md:hidden h-full">
                <div className="inline-block w-full h-full relative">

                    <div className="absolute w-full top-[2rem] left-0 top-0">
                        <div className="logoCover transition-all duration-500 text-center relative z-[1] -mb-[5rem]">
                            <img src="./../images/Group 1502.png" className="mx-auto" alt="" />
                        </div>
                        <div className="coverVideo transition-all duration-500 p-[1rem] relative w-full border border-solid !border-[#FFFFFF26] lineVideo transition-all duration-500">
                            <img src="./../images/rc (1).png" className="absolute left-0 top-0" alt="" />
                            <img src="./../images/rc (4).png" className="absolute right-0 top-0" alt="" />
                            <img src="./../images/rc (2).png" className="absolute left-0 bottom-0" alt="" />
                            <img src="./../images/rc (3).png" className="absolute right-0 bottom-0" alt="" />
                            <video
                                data-keepplaying
                                // poster="./../images/Rectangle 22653.png"
                                className="w-full h-[29vh] sm:h-[34vh] w-full h-full object-cover"
                                autoPlay
                                controls={false}
                                loop
                                playsInline
                                preload
                                muted
                            >
                                <source
                                    src="https://dfpcevrzf8nxo.cloudfront.net/kyle-ende4%20%281%29.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAKsDA2Lpm3fMA7i9RWS2s7QsdAKhZfujVOjcf3laUNgaAiB4zt7V%2BPp5BagPUkaHFeQKv7hOzHwR3ify0b2mN7kCVirkAghpEAAaDDkyNjIwNjM3NzYzNiIMkquc5tdnuXiba%2FASKsECJ4vLZZm92Kr4pVz5oddlzRRHdewZilpi6t%2BHf07MZK%2BV1WUMABPxtS3LyFjhxHqHV22f3I1GWe%2BDuQuYHDuzoLbgshn%2B09sxWuVDZYrrGhiQ%2F8cay3CS0iSN6ZPqzMhUjoskwdewsCDf%2F8f3rABT3ge9bH6ImF8lApZECSFPBRRemMOp8nowVRMCYwGYr21qCgRpXzG6bjGsSr52sHF%2FMcCjPxxY5kqr4xVYUwJutU29wiY%2BB9FdAwluW0yrJblO7wIq%2FhG4%2F8NgA%2BcFegaEoQh6j4L%2BDJXSZJJoduqtD0flr5T0%2F4p6Qeo0aoXe7tMsGZd%2FFWZtAyGgwGbWQB8H8sKJUriFJfLkApAZXHv3q9fZZ%2B0eQeGIZq3QP4OngVpZN0U7qdRn348A9IQJW4saw7ZJXxhP%2BtXh3Q6fO2%2BEFdvLMPGU0KoGOrMCpmPu%2BCTMYkB6s6y8CjtgAKTdAboHcguCGFvCw7wmRERbbAJ1nEgdUoi4ySJFfL3RS8Bbx1tgUUGwQFTdH93K6TKBc2DtsMC23r3eLOsvTW%2FV7IRtRSKN9Scjo9jnj0nxMKWe6y5gx%2FHyY0URIZf2R%2F76pzQ1AX6Jb75ov0gfocmzjUJ60x4oqLeQb2AVT1zGwNMw5p5IA2fwsZgUTizD4sbJrSof5KszAcnCigDIk0sQaB54lGubhhtyOXo4oGxafZPPDXZJuOSvZJaBeFRNU9qYY%2BsTIxCwwBRdHpfQQs4z%2BI8wI9uyaPPT9AYTfFbXCyMNssyYc3Utti7uG551qm5KRu48OcN6tJ%2FbpAKkAnD9eZ33abjA6Cmj2Oj97Q9XApQVfAUI63mbSEzyljUNl1EGIg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231115T002026Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA5PJRTX2SLVBHMCTK%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f59a97b6df2b8d127cf9812eb022d4c2ea13f4153cd8b9957d477bbdcb74634c"
                                    type="video/mp4"
                                />
                                <source
                                    src="https://dfpcevrzf8nxo.cloudfront.net/kyle-ende4-1.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAKsDA2Lpm3fMA7i9RWS2s7QsdAKhZfujVOjcf3laUNgaAiB4zt7V%2BPp5BagPUkaHFeQKv7hOzHwR3ify0b2mN7kCVirkAghpEAAaDDkyNjIwNjM3NzYzNiIMkquc5tdnuXiba%2FASKsECJ4vLZZm92Kr4pVz5oddlzRRHdewZilpi6t%2BHf07MZK%2BV1WUMABPxtS3LyFjhxHqHV22f3I1GWe%2BDuQuYHDuzoLbgshn%2B09sxWuVDZYrrGhiQ%2F8cay3CS0iSN6ZPqzMhUjoskwdewsCDf%2F8f3rABT3ge9bH6ImF8lApZECSFPBRRemMOp8nowVRMCYwGYr21qCgRpXzG6bjGsSr52sHF%2FMcCjPxxY5kqr4xVYUwJutU29wiY%2BB9FdAwluW0yrJblO7wIq%2FhG4%2F8NgA%2BcFegaEoQh6j4L%2BDJXSZJJoduqtD0flr5T0%2F4p6Qeo0aoXe7tMsGZd%2FFWZtAyGgwGbWQB8H8sKJUriFJfLkApAZXHv3q9fZZ%2B0eQeGIZq3QP4OngVpZN0U7qdRn348A9IQJW4saw7ZJXxhP%2BtXh3Q6fO2%2BEFdvLMPGU0KoGOrMCpmPu%2BCTMYkB6s6y8CjtgAKTdAboHcguCGFvCw7wmRERbbAJ1nEgdUoi4ySJFfL3RS8Bbx1tgUUGwQFTdH93K6TKBc2DtsMC23r3eLOsvTW%2FV7IRtRSKN9Scjo9jnj0nxMKWe6y5gx%2FHyY0URIZf2R%2F76pzQ1AX6Jb75ov0gfocmzjUJ60x4oqLeQb2AVT1zGwNMw5p5IA2fwsZgUTizD4sbJrSof5KszAcnCigDIk0sQaB54lGubhhtyOXo4oGxafZPPDXZJuOSvZJaBeFRNU9qYY%2BsTIxCwwBRdHpfQQs4z%2BI8wI9uyaPPT9AYTfFbXCyMNssyYc3Utti7uG551qm5KRu48OcN6tJ%2FbpAKkAnD9eZ33abjA6Cmj2Oj97Q9XApQVfAUI63mbSEzyljUNl1EGIg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231115T004122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5PJRTX2SLVBHMCTK%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=76ad2231d21ec5adc85c720b517fefaed763205da91285ff53b437f30da622cc"
                                    type="video/webm"
                                />
                                Your browser does not support the video tag.
                            </video>

                            <div className="btnAction transition-all duration-500 absolute left-1/2 -translate-x-1/2 bottom-[1.5rem]">
                                <div className="btn-sosmed d-flex align-items-center justify-content-center position-relative z-2">
                                    <img src="./../images/Vector (2).png" className="w-[12px]" alt="" />
                                    <img src="./../images/Vector (2).png" className="w-[12px]" alt="" />
                                    <a href="https://discord.gg/AhJz97vxsw" target="_blank" className="btn__clip !h-[40px] !w-[40px] !p-[6px]">
                                        <DiscordIcon />
                                    </a>
                                    <a href="#!" className="btn__clip long koulen normal text__24 !h-[40px] !px-[20px] text-uppercase color__white ml-2 ml-lg-3"><span>buy now</span></a>
                                    <img src="./../images/Vector (2).png" className="right rotate-[180deg] w-[12px]" alt="" />
                                    <img src="./../images/Vector (2).png" className="right rotate-[180deg] w-[12px]" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="textAction transition-all duration-500 mt-3 flex items-center justify-between">
                            <div className="flex items-center cursor-pointer gap-2" onClick={() => window.fullpage_api.moveTo(2)}>
                                <img src="./../images/ic (1).svg" alt="" />
                                <span className="koulen text-white text__16">About the Game</span>
                            </div>
                            <div className="flex items-center cursor-pointer gap-2" onClick={props.toogleModal}>
                                <img src="./../images/ic (2).svg" alt="" />
                                <span className="koulen text-white text__16">watch trailer</span>
                            </div>
                        </div>
                    </div>

                    <img src="./../images/Group 706218.svg" className="motoContent transition-all duration-500 absolute bottom-[calc(54px_+_0.5rem)] w-[33vh] xx:w-[36vh] ss:w-[32vh] left-1/2 -translate-x-1/2" alt="" />

                </div>
            </div>
        </Fragment>
    )
}

export default Mobile