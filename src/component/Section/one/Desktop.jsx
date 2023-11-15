import React, { Fragment, useEffect } from 'react'
import { TweenMax, TimelineMax } from "gsap";
import $ from "jquery";
import { Circ } from "gsap";
import { TweenLite } from 'gsap/gsap-core';

const Desktop = (props) => {
    useEffect(() => {
        window.fullpage_api.setAllowScrolling(false);

        const coverVideo = $(".coverVideo")
        const bgWrap = $(".bgWrap")
        const navbar = $(".wrapper__navbar")
        const titleHero = $(".wrapper__title-hero")
        const trailer = $(".wrapper__trailer")
        const lineLeft = $(".lineLeft")
        const character = $(".character")
        const lineRIght = $(".lineRIght")
        const textMoto = $(".textMoto")
        const sosmedBottom = $(".sosmedBottom")

        // / inisialisaisi
        const tl = new TimelineMax({
            repeat: 0, delay: 1.5, onComplete: () => {
                window.fullpage_api.setAllowScrolling(true);
            }
        });


        TweenMax.set(coverVideo, {
            css: {
                width: "100%",
                height: "100%",
                left: "0",
                top: "50%",
                yPercent: -50,
                ease: Circ.easeOut
            },
        });

        TweenMax.set(navbar, {
            css: {
                top: "-100rem"
            },
        });

        TweenMax.set(titleHero, {
            css: {
                right: "-100rem"
            },
        });

        TweenMax.set(trailer, {
            css: {
                right: "-100rem"
            },
        });
        TweenMax.set(lineLeft, {
            css: {
                left: "-100rem"
            },
        });
        TweenMax.set(textMoto, {
            css: {
                left: "-100rem"
            },
        });
        TweenMax.set(character, {
            css: {
                left: "-100rem"
            },
        });
        TweenMax.set(lineRIght, {
            css: {
                right: "-100rem"
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
            TweenLite.to(coverVideo, 1, {
                css: {
                    width: "100%",
                    height: "100%",
                    left: "0",
                    top: "50%",
                    yPercent: -50,
                    ease: Circ.easeOut
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
            TweenLite.to(titleHero, 1, {
                css: {
                    right: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(titleHero, { clearProps: "all" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(trailer, 1, {
                css: {
                    right: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(trailer, { clearProps: "all" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(lineLeft, 1, {
                css: {
                    left: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(lineLeft, { clearProps: "all" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(character, 1, {
                css: {
                    left: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(character, { clearProps: "all" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(textMoto, 1, {
                css: {
                    left: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(textMoto, { clearProps: "all" });
                }
            }),
        ]);
        tl.add([
            TweenLite.to(lineRIght, 1, {
                css: {
                    right: "-100rem"
                },
                onComplete: function () {
                    TweenLite.set(lineRIght, { clearProps: "all" });
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
            <img src="./../images/Vector (1).svg" className="lineRIght transition-all duration-500 absolute right-0 bottom-0 w-[168vh] hidden md:block" alt="" />

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

            {/* <img src="./../images/Rectangle 22653.png" className="coverVideo absolute w-[52vw] h-[56vh] hminlg700:w-[61vw] hminxl700:w-[46rem] hminxl900:w-[51rem] top-[54%] object-cover -translate-y-1/2 left-[27%] hminxl700:left-[24%] transition-all duration-500" alt="" /> */}

            <video
                data-keepplaying
                // poster="./../images/Rectangle 22653.png"
                className="coverVideo absolute w-[52vw] h-[56vh] hminlg700:w-[61vw] hminxl700:w-[46rem] hminxl900:w-[51rem] top-[54%] object-cover -translate-y-1/2 left-[27%] hminxl700:left-[24%] hminxl700:left-[29%] transition-all duration-500"
                autoPlay
                controls={false}
                loop
                playsInline
                preload="none"
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
            <div className="container relative z-[2] h-full hidden md:block">
                <div className="character transition-all duration-500 absolute bottom-0 left-[6rem] hminlg700:left-[9rem] hminlg900:left-[4rem] lg:left-[13rem]">
                    <img src="./../images/pose 5.png" className="w-[59vh]" alt="" />
                </div>
                {/* <img src="./../images/Rectangle 22580.svg" className="absolute left-0 top-0" alt="" /> */}

                <img src="./../images/Group 706118.png" className="textMoto transition-all duration-500 absolute left-[2rem] hminlg900:left-[0] lg:left-[3rem] top-[27vh] w-[15vh] lg:w-auto" alt="" />


                <div className="wrapper__title-hero  transition-all duration-500 absolute right-[3rem] lg:right-[9rem] hminlg700:right-[3rem] hminxl900:right-[5rem] top-[18%] lg:top-[13%] hminlg700:top-[16%] hminxl900:top-[18%] text-center z-[10]">
                    <div className="text-right inline-block">
                        <h5 className="uppercase koulen text__48 text-white mb-2">WELCOME TO MOTOX</h5>
                        <img src="./../images/RIDERS.svg" className="w-[55vh] lg:w-[66vh] hminlg700:w-[50vh] hminxl900:w-[50vh]" alt="" />
                    </div>
                    <div className="flex items-center gap-3 mt-8">
                        <div className="relative inline-block">
                            <div className="absolute w-[271px] h-full -left-[3rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                            <a href="#!" className="inline-block relative z-2 text-white koulen text__32 uppercase px-[36px] lg:px-[52px] h-[50px] lg:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                <span className="-skew-x-[40deg] relative z-[2]">
                                    join BETA
                                </span>
                            </a>
                        </div>
                        <div className="relative inline-block">
                            <div className="absolute w-[271px] h-full -right-[3rem] bg-shadow-btn skew-x-[40deg]"></div>
                            <a href="#!" className="inline-block relative z-2 text-white koulen text__32 uppercase px-[32px] h-[50px] lg:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/Mask group.png" className="absolute left-0 top-0" alt="" />
                                <img src="./../images/discord.svg" className="-skew-x-[40deg] relative z-[2] w-[52px]" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="wrapper__trailer transition-all duration-500 absolute z-[10] right-[9rem] hminlg700:right-[3rem] hminxl900:right-[5rem] bottom-[22vh]">
                    <div className="flex items-center gap-3 pointer" onClick={props.toogleModal}>
                        <img src="./../images/Group 706149.svg" className="w-[60px]" alt="" />
                        <span className="koulen text__32 text-white">watch trailer</span>
                    </div>
                </div>

            </div>
            <img src="./../images/jfsbkdfs.svg" className="lineLeft transition-all duration-500 absolute left-0 bottom-0 w-[120vh] z-[2] pointer-events-none hidden md:block" alt="" />
        </Fragment>
    )
}

export default Desktop