import React, { Fragment, useEffect, useRef } from 'react'
import $ from "jquery";
import anime from 'animejs/lib/anime.es.js';
import gsap from 'gsap';

const Desktop = (props) => {
    let mm = gsap.matchMedia();
    const videoLoad = useRef()
    let playing = true;
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
        mm.add("(max-height: 899px) and (min-width:1025px)", () => {
            gsap.set(coverVideo, {
                css: {
                    width: "100%",
                    height: "100%",
                    left: "0",
                    top: "50%",
                    yPercent: -50,
                },
                ease: "power1.inOut"
            });
        })
        mm.add("(min-height: 900px) and (min-width:1025px)", () => {
            gsap.set(coverVideo, {
                css: {
                    width: "100%",
                    height: "100%",
                    left: "0",
                    top: "50%",
                    yPercent: -50,
                },
                ease: "power1.inOut"
            });
        })
        mm.add("(min-height: 900px) and (max-width:1024px)", () => {
            gsap.set(coverVideo, {
                css: {
                    width: "100%",
                    height: "100%",
                    left: "50%",
                    top: "50%",
                    yPercent: -50,
                    xPercent: -50,
                },
                ease: "power1.inOut"
            });
        })
        gsap.set(navbar, {
            css: {
                top: "-100rem"
            },
        });

        gsap.set(titleHero, {
            css: {
                right: "-100rem"
            },
        });

        gsap.set(trailer, {
            css: {
                right: "-100rem"
            },
        });
        gsap.set(lineLeft, {
            css: {
                left: "-100rem"
            },
        });
        gsap.set(textMoto, {
            css: {
                left: "-100rem"
            },
        });
        gsap.set(character, {
            css: {
                left: "-100rem"
            },
        });
        gsap.set(lineRIght, {
            css: {
                right: "-100rem"
            },
        });
        gsap.set(sosmedBottom, {
            css: {
                bottom: "-100rem"
            },
        });
        videoLoad.current.onplaying = function () {
            if (playing) {
                // / inisialisaisi
                const tl = gsap.timeline({
                    repeat: 0,
                    onComplete: () => {
                        window.fullpage_api.setAllowScrolling(true);
                    }
                });

                tl.add([
                    gsap.to(bgWrap, 1, {
                        css: {
                            opacity: 0,
                        },
                    }),
                ]);

                mm.add("(max-height: 899px) and (min-width:1025px)", () => {
                    tl.add([
                        gsap.to(coverVideo, 1, {
                            css: {
                                width: "100%",
                                height: "100%",
                                left: "0",
                                top: "50%",
                                yPercent: -50,
                            },
                            ease: "power1.inOut",
                            delay: 1.5,
                        }),
                    ]);
                })
                mm.add("(min-height: 900px) and (min-width:1025px)", () => {
                    tl.add([
                        gsap.to(coverVideo, 1, {
                            css: {
                                width: "100%",
                                height: "100%",
                                left: "0",
                                top: "50%",
                                yPercent: -50,
                            },
                            ease: "power1.inOut",
                            delay: 1.5,
                        }),
                    ]);
                })
                mm.add("(min-height: 900px) and (max-width:1024px)", () => {
                    tl.add([
                        gsap.to(coverVideo, 1, {
                            css: {
                                width: "100%",
                                height: "100%",
                                left: "50%",
                                top: "50%",
                                yPercent: -50,
                                xPercent: -50,
                            },
                            ease: "power1.inOut",
                            delay: 1.5,
                        }),
                    ]);
                })
                tl.add([
                    gsap.to(coverVideo, 1, {
                        onComplete: function () {
                            gsap.set(coverVideo, { clearProps: "all", ease: "power1.inOut" });
                        }
                    }),
                ]);
                tl.add([
                    gsap.to(navbar, 1, {
                        css: {
                            top: "-100rem"
                        },
                        onComplete: function () {
                            gsap.set(navbar, { top: "0rem" });
                            anime({
                                targets: '#nav-p-1',
                                strokeDashoffset: [anime.setDashoffset, 0],
                                easing: 'easeInOutSine',
                                duration: 1000,
                                duration: 1,
                                direction: 'alternate',
                                loop: false
                            });
                        }
                    }),
                ]);
                tl.add([
                    gsap.to(titleHero, 1, {
                        css: {
                            right: "-100rem",
                        },
                        onComplete: function () {
                            gsap.set(titleHero, { clearProps: "all" });
                        }
                    }),
                ]);
                tl.add([
                    gsap.to(trailer, 1, {
                        css: {
                            right: "-100rem"
                        },
                        onComplete: function () {
                            gsap.set(trailer, { clearProps: "all" });
                        }
                    }),
                ]);
                tl.add([
                    gsap.to(lineLeft, 1, {
                        css: {
                            left: "-100rem"
                        },
                        onComplete: function () {
                            gsap.set(lineLeft, { clearProps: "all" });

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
                    gsap.to(character, 1, {
                        css: {
                            left: "-100rem"
                        },
                        onComplete: function () {
                            gsap.set(character, { clearProps: "all" });
                        }
                    }),
                ]);
                tl.add([
                    gsap.to(textMoto, 1, {
                        css: {
                            left: "-100rem"
                        },
                        onComplete: function () {
                            gsap.set(textMoto, { clearProps: "all" });
                        }
                    }),
                ]);
                tl.add([
                    gsap.to(lineRIght, 1, {
                        css: {
                            right: "-100rem"
                        },
                        onComplete: function () {
                            gsap.set(lineRIght, { clearProps: "all" });
                        }
                    }),
                ]);
                tl.add([
                    gsap.to(sosmedBottom, 1, {
                        css: {
                            bottom: "-100rem"
                        },
                        onComplete: function () {
                            gsap.set(sosmedBottom, { clearProps: "all" });
                        }
                    }),
                ]);

                tl.duration(2.5).play()

                playing = false;
            }
        };




    }, [])
    return (
        <Fragment>
            <img src="./../images/Vector (1).svg" className="lineRIght transition-all duration-500 absolute right-0 bottom-0 w-[168vh] hidden xsTop:block" alt="" />

            <div className="sosmedBottom transition-all duration-500 absolute w-full bottom-0 left-0 h-[54px] md:h-[90px]">
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundImage: "url('./../images/Frame 706117.svg')" }}>
                    <div className="container">
                        <div className="flex items-center justify-center xsTop:justify-end gap-[1rem] md:gap-4">
                            <img src="./../images/ss (1).png" className="w-[40px] md:w-auto" alt="" />
                            <img src="./../images/ss (3).png" className="w-[40px] md:w-auto" alt="" />
                            <img src="./../images/ss (2).png" className="w-auto" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <img src="./../images/Rectangle 22653.png" className="coverVideo absolute w-[52vw] h-[56vh] hminlg700:w-[61vw] hminxl700:w-[46rem] hminxl900:w-[51rem] top-[54%] object-cover -translate-y-1/2 left-[27%] hminxl700:left-[24%] transition-all duration-500" alt="" /> */}

            <video
                ref={videoLoad}
                data-keepplaying
                // poster="./../images/Rectangle 22653.png"
                className="coverVideo lazy absolute w-[52vw] h-[56vh] hminlg700:w-[61vw] hminxl700:w-[46vw] hminxl900:w-[45vw] top-[54%] object-cover -translate-y-1/2 left-[27%] hminxl700:left-[24%] hminxl700:left-[29%] transition-all duration-500 hminmd1024:w-[60vw] hminmd10242500:w-[40vw] hminlgMd900:w-[90%] hminlgMd900:left-1/2 hminlgMd900:-translate-x-1/2 hminlgMd900:translate-y-0 hminlgMd900:top-[26%] hminlgMd900:h-[40vh]"
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
            <div className="container relative z-[2] h-full hidden xsTop:block pointer-events-none">
                <div className="character transition-all duration-500 absolute bottom-0 left-[6rem] hminlg700:left-[9rem] hminlg900:left-[4rem] lg:left-[13rem] hminlg850:left-[7rem] hminlg950:left-[3rem] hminlg1200:left-[2rem] hminmd1024:left-0 xsTop:left-[1rem] hminlgMd900:left-1/2 hminlgMd900:-translate-x-1/2">
                    <img src="./../images/pose 5.png" className="w-[59vh] hminlgMd900:w-[30vh]" alt="" />
                </div>
                {/* <img src="./../images/Rectangle 22580.svg" className="absolute left-0 top-0" alt="" /> */}

                <img src="./../images/Group 706118.png" className="textMoto transition-all duration-500 absolute left-[2rem] hminlg900:left-[0] lg:left-[3rem] top-[27vh] w-[15vh] lg:w-auto hminlg950:left-[0.5rem] hminmd1024:w-[11vh] hminmd1024:top-[19vh] hminmd1024:left-[1rem] xsTop:w-[13vh] xsTop:top-[19vh] xsTop:left-[1rem] hminlgMd900:hidden" alt="" />


                <div className="wrapper__title-hero  transition-all duration-500 absolute right-[3rem] lg:right-[9rem] hminlg700:right-[3rem] hminxl900:right-[5rem] top-[18%] lg:top-[13%] hminlg700:top-[16%] hminxl900:top-[18%] text-center z-[10]">
                    <div className="text-right inline-block">
                        <h5 className="uppercase koulen text__48 text-white mb-2">WELCOME TO MOTOX</h5>
                        <img src="./../images/RIDERS.svg" className="w-[55vh] lg:w-[66vh] hminlg700:w-[50vh] hminxl900:w-[50vh] hminlgMd900:w-[45vh]" alt="" />
                    </div>
                    <div className="flex items-center gap-3 mt-8">
                        <div className="relative inline-block">
                            <div className="absolute w-[271px] h-full -left-[3rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                            <a href="https://www.meta.com/experiences/5754014731339882/" target='_blank' className="inline-block relative z-2 text-white koulen text__32 uppercase px-[36px] lg:px-[52px] h-[50px] lg:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden pointer-events-auto">
                                <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                <span className="-skew-x-[40deg] relative z-[2]">
                                    join BETA
                                </span>
                            </a>
                        </div>
                        <div className="relative inline-block">
                            <div className="absolute w-[271px] h-full -right-[3rem] bg-shadow-btn skew-x-[40deg]"></div>
                            <a href="https://discord.com/invite/gkAqERE6AF" target='_blank' className="inline-block relative z-2 text-white koulen text__32 uppercase px-[32px] h-[50px] lg:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden pointer-events-auto">
                                <img src="./../images/Mask group.png" className="absolute left-0 top-0" alt="" />
                                <img src="./../images/discord.svg" className="-skew-x-[40deg] relative z-[2] w-[52px]" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="wrapper__trailer transition-all duration-500 absolute z-[10] right-[9rem] hminlg700:right-[3rem] hminxl900:right-[5rem] bottom-[22vh] hminmd1024:right-[3rem] xsTop:right-[5rem] hminlgMd900:right-[3rem] hminlgMd900:bottom-[40vh]  hminmd10242500:right-[7rem]">
                    <div className="flex items-center gap-3 pointer pointer-events-auto" onClick={props.toogleModal}>
                        <img src="./../images/Group 706149.svg" className="w-[60px]" alt="" />
                        <span className="koulen text__32 text-white">watch trailer</span>
                    </div>
                </div>

            </div>
            {/* <img src="./../images/jfsbkdfs.svg" className="lineLeft transition-all duration-500 absolute left-0 bottom-0 w-[120vh] z-[2] pointer-events-none hidden xsTop:block" alt="" /> */}


            <div className="lineLeft transition-all duration-500 absolute left-0 bottom-0 w-[120vh] hminlg850:w-[100vh] z-[2] pointer-events-none hidden xsTop:block hminlg1100:w-[75vh] hminmd1024:w-[60vh] xsTop:w-[80vh] hminlgMd900:w-[50vh]">
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

        </Fragment>
    )
}

export default Desktop