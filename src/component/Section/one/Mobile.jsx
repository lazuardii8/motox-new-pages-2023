import React, { Fragment, useEffect, useRef } from 'react'
import { DiscordIcon } from '../../Svg/Svg'
import { TweenMax, TimelineMax } from "gsap";
import $ from "jquery";
import { Circ } from "gsap";
import { TweenLite } from 'gsap/gsap-core';
import anime from 'animejs/lib/anime.es.js';

const Mobile = (props) => {
    const videoLoad = useRef()
    let playing = true;
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

        document.addEventListener("DOMContentLoaded", function () {
            var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

            if ("IntersectionObserver" in window) {
                var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (video) {
                        if (video.isIntersecting) {
                            for (var source in video.target.children) {
                                var videoSource = video.target.children[source];
                                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                                    videoSource.src = videoSource.dataset.src;
                                }
                            }

                            video.target.load();
                            video.target.classList.remove("lazy");
                            lazyVideoObserver.unobserve(video.target);
                        }
                    });
                });

                lazyVideos.forEach(function (lazyVideo) {
                    lazyVideoObserver.observe(lazyVideo);
                });
            }
        });

        TweenMax.set(coverVideo, {
            css: {
                width: window.innerWidth + 95,
                height: window.innerHeight + 100,
                x: "-3rem",
                y: "-24%"
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
        videoLoad.current.onplaying = function () {
            if (playing) {
                // / inisialisaisi
                const tl = new TimelineMax({
                    repeat: 0, delay: 1.5, onComplete: () => {
                        window.fullpage_api.setAllowScrolling(true);
                    }
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
                            top: "35vh",
                            opacity: 1,
                        },
                    }),
                ]);
                tl.add([
                    TweenLite.to(coverVideo, {
                        delay: 1.5,
                    }),
                ]);
                tl.add([
                    TweenMax.to(logoCover, 1, {
                        css: {
                            top: 0,
                        },
                    }),
                    TweenLite.to(coverVideo, 1, {
                        clearProps: "all", ease: Circ.easeOut
                    }),
                ]);

                tl.add([
                    TweenLite.to(navbar, 1, {
                        css: {
                            top: "-100rem"
                        },
                        onComplete: function () {
                            TweenLite.set(navbar, { top: "0rem" });
                            anime({
                                targets: '#nav-p-1',
                                strokeDashoffset: [anime.setDashoffset, 0],
                                easing: 'easeInOutSine',
                                duration: 1000,
                                delay: 2,
                                direction: 'alternate',
                                loop: false
                            });
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

                            anime({
                                targets: '.s1-pt-1',
                                strokeDashoffset: [anime.setDashoffset, 0],
                                easing: 'easeInOutSine',
                                duration: 1000,
                                delay: function (el, i) { return i * 150 },
                                direction: 'alternate',
                                loop: false
                            });
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
                tl.duration(4).play()
                playing = false;
            }
        }



    }, [])

    return (
        <Fragment>
            {/* <img src="./../images/jfsbkdfs.svg" className="lineLeft transition-all duration-500 absolute left-0 bottom-0 md:hidden w-full pointer-events-none z-[1]" alt="" /> */}

            <div className="lineLeft transition-all duration-500 absolute left-0 bottom-0 md:hidden w-full pointer-events-none z-[1]">
                <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 981 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_119_1732)">
                        <path className='s1-pt-1' d="M566 181.5L661.5 277H799.5L981 458.5H139L0 319.5V16H54.5L220 181.5H566Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <path className='s1-pt-1' d="M733 439L562 268H602.5L773.5 439H733Z" fill="#F43329" />
                    <path className='s1-pt-1' d="M248 414L77 243H107.5L278.5 414H248Z" fill="#F43329" />
                    <path className='s1-pt-1' d="M277.5 88L499 309.5H452L321.5 179H288L197 88H277.5Z" fill="#D9D9D9" />
                    <path className='s1-pt-1' d="M320 340L468.5 488.5" stroke="#F43329" />
                    <path className='s1-pt-1' d="M-38 1L133 172H92.5L61.5 141" stroke="white" />
                    <path className='s1-pt-1' d="M468.5 162H576.5L673.5 259H792.5" stroke="white" />
                    <defs>
                        <filter id="filter0_b_119_1732" x="-30" y="-14" width="1041" height="502.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_119_1732" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_119_1732" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="sosmedBottom transition-all duration-500 z-[2] absolute w-full bottom-0 left-0 h-[54px] md:h-[90px]">
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

                    <div className="absolute w-full top-[95px] hminMaxSm900:top-[5rem] left-0 top-0">
                        <div className="logoCover transition-all duration-500 text-center relative z-[1] -mb-[5rem]">
                            <img src="./../images/Group 1502.png" className="mx-auto w-[65vw]" alt="" />
                        </div>
                        <div className="coverVideo transition-all duration-500 p-[1rem] relative w-full border border-solid !border-[#FFFFFF26] lineVideo transition-all duration-500">
                            <img src="./../images/rc (1).png" className="absolute left-0 top-0" alt="" />
                            <img src="./../images/rc (4).png" className="absolute right-0 top-0" alt="" />
                            <img src="./../images/rc (2).png" className="absolute left-0 bottom-0" alt="" />
                            <img src="./../images/rc (3).png" className="absolute right-0 bottom-0" alt="" />
                            <video
                                ref={videoLoad}
                                data-keepplaying
                                // poster="./../images/Rectangle 22653.png"
                                className="lazy w-full h-[29vh] sm:h-[34vh] w-full h-full object-cover"
                                autoPlay
                                controls={false}
                                loop
                                playsInline
                                preload="auto"
                                muted
                            >
                                <source
                                    src="https://dfpcevrzf8nxo.cloudfront.net/kyle-ende4%20%282%29%20%283%29.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhANKco7gSHzdiUUgcv8OE%2FiYo6wejY7GpjWjvQz8mGPJAAiEA1mer6spSMsQdUuPKeW1JdQhRZc1FmGAM4hcdIEKFlYsq7QII%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5MjYyMDYzNzc2MzYiDCC7ZfBGLfGnCjp5YSrBAvOGpzsh9jl1hvXax7eikujW6s8Chjap4Sl5d3ziFTVOI6oooGpgEdjEa9AfvbYzRFnHRL4UrNm29oVC2gU6a%2Fo1X3rgcFZEXGdW9FlhuXIJBR5NqaYlfJS7Ih3Nten%2B25pu3QI7mDyEivH29cA95wiobGgZd%2FoCu0A3FvPSZ8qDyoUvyUmHR7cXQHGCR940E84dHc736Si36G%2B8cwiJLJWXXCfXE%2FUaUC7PoFbtwyLhDS%2FMxDWXBBAWlSjG9bxa53OPxhoYVWwVhbzP4w461ss0lEkVQyM9%2FtvlprvgOe2RowJO%2BDrUqiZEU9ufd73r8I4hcSSRxZSW8PoTD7B63nAuQfeBtLwKk579TbqjNupAhQdae2m4EWTdB%2Bm74IaqkyMLnuL8RVW2yZ1QGHFUukyz5WTdyWE0u8JPxkuJsJLNKzCYue%2BqBjqyAg0sRkEW393fXtCoqfSI8r0%2B6mDGfTy%2Fd4rm7bQmi4EipwOKBeS6FYxAP89FTnOEcOOqWziwf2g%2BQ5MydZ2Dp6Za3H7mgd2cMOgqMlfagCuCq%2FhjjG3dxemhqc1AqgzguKc%2FrbkdBDrQgQ%2FMkjmE8gComc8%2FrtlX5DtD84gCCyGiYrAy67OEXpyywpogIgmdVty5TQ7GC4cGjvHb%2BmpRkI6K6BadI0r3feO7XIWETgcrKvs5OXTieuBlp%2B2FntaiuJTVmn86kVYi%2BP4g6jGHogO4SgDZD20VG1qnRym4%2Fw5KVwu7b2tkkz4F1YPErG9fMVqfaELTzPQDAyhyUAvqQnU6gyOzQu2bMT9ARKGL77549N4YgQjUlEUkIpFmweJpSeIwcNZmPDoKqZtC7ptl5l0JlA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231121T073302Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5PJRTX2SCRJNFFHH%2F20231121%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=32731e54f542415c63d3d4fa44402c49a8890a519a1259f6e50b527f94add436"
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
                                    <a href="https://www.meta.com/experiences/5754014731339882/" target='_blank' className="btn__clip long koulen normal text__24 !h-[40px] !px-[20px] text-uppercase color__white ml-2 ml-lg-3"><span>buy now</span></a>
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

                    <img src="./../images/pose 5.png" className="motoContent transition-all duration-500 absolute bottom-0 hmaxMaxSm600:w-[28vh] hminMaxSm600:w-[26vh] sm: left-1/2 hminMaxSm700:w-[26vh] hminMaxSm800:w-[30vh] -translate-x-1/2 pointer-events-none" alt="" />


                </div>
            </div>
        </Fragment>
    )
}

export default Mobile