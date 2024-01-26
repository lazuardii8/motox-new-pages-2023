import React, { Fragment, useRef } from 'react'
import Slider from 'react-slick';

const Section3 = (props) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        switouchMovepe: false,
        draggable: false,
        pauseOnHover: false,
        autoplay: true,
        // speed: 1,
        speed: 1000,
        autoplaySpeed: 2800,
    };

    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };
    const dataTracks = [
        {
            title: `Tracks: Dead <br class="hidden sm:block md:hidden lg:block" /> Forest`,
            desc: `Get ready to tear through lifelike tracks that mirror the <br class="hidden sm:block md:hidden lg:block" /> heart-pounding excitement of real motocross racing. Our <br class="hidden sm:block md:hidden lg:block" /> game's realistic tracks offer an authentic experience <br class="hidden sm:block md:hidden lg:block" /> with challenging terrain`,
            background: "./../images/sec 3 - layer 2.png",
            track: "./../images/map - 1.svg",
            trackTitle: "Dead Forest",
            trackDesc: "Dead Forest: Prepare for a motocross adventure like no other. Tackle treacherous turns, jaw-dropping jumps, and navigate through the eerie obstacles of the Dead Forest track.",
            TData1: "Wyoming",
            SData1: "Dead Forest",
            TData2: "Level",
            sData2: "Medium",
            TData3: "20 KM",
            sData3: "DIstance",
            TData4: "12 Minutes",
            sData4: "Duration",
        },
        {
            title: `Tracks: <br class="hidden sm:block md:hidden lg:block" /> Grasslands`,
            desc: `Experience the thrill of the Grasslands track, where <br class="hidden sm:block md:hidden lg:block" /> speed meets nature's challenges. Are you ready to <br class="hidden sm:block md:hidden lg:block" /> conquer this dynamic motocross terrain?`,
            background: "./../images/bgtrack2.png",
            track: "./../images/track2.svg",
            trackTitle: "Grasslands ",
            trackDesc: "Grasslands Track: Get ready to navigate a thrilling motocross circuit with hairpin turns, heart-pounding jumps, and natural obstacles. Conquer the wild beauty of the grasslands and show your mastery over diverse terrain",
            TData1: "arizona desert",
            SData1: "World Name",
            TData2: "Medium / Hard",
            sData2: "Level",
            TData3: "20 KM",
            sData3: "DIstance",
            TData4: "12 Minutes",
            sData4: "Duration",
        },
        {
            title: `Tracks: Emerald <br class="hidden sm:block md:hidden lg:block" /> Desert   `,
            desc: `Prepare for an adrenaline-fueled ride through the <br class="hidden sm:block md:hidden lg:block" /> Emerald Desert track. Master the dunes, conquer the <br class="hidden sm:block md:hidden lg:block" /> heat, and make your mark in the heart of the desert!`,
            background: "./../images/bgtrack3.png",
            track: "./../images/track3.svg",
            trackTitle: "Emerald Desert   ",
            trackDesc: "Emerald Desert: Conquer a rugged motocross oasis with sharp turns, gravity-defying jumps, and formidable obstacles. Test your skills in this dynamic terrain, where the desert's secrets await brave riders",
            TData1: "arizona desert",
            SData1: "Emerald Desert",
            TData2: "Level",
            sData2: "Easy",
            TData3: "20 KM",
            sData3: "DIstance",
            TData4: "12 Minutes",
            sData4: "Duration",
        },
        {
            title: `Tracks: <br class="hidden sm:block md:hidden lg:block" /> California Beach`,
            desc: `Hit the sandy shores of the California Beach track for <br class="hidden sm:block md:hidden lg:block" /> high-speed motocross action. Sun, surf, and intense <br class="hidden sm:block md:hidden lg:block" /> racing – it's the ultimate beachside thrill!`,
            background: "./../images/bgtrack 4.png",
            track: "./../images/track4.svg",
            trackTitle: "Emerald Desert",
            trackDesc: "California Beach: A motocross paradise with a twist. Master a thrilling blend of tight turns, breathtaking jumps, and diverse obstacles. This track demands both finesse and fearless speed.",
            TData1: "arizona desert",
            SData1: "Emerald Desert",
            TData2: "Level",
            sData2: "Easy",
            TData3: "20 KM",
            sData3: "DIstance",
            TData4: "12 Minutes",
            sData4: "Duration",
        },
        {
            title: `Tracks: <br class="hidden sm:block md:hidden lg:block" /> Supercross  `,
            desc: `Get ready to tear through lifelike tracks that mirror the <br class="hidden sm:block md:hidden lg:block" /> heart-pounding excitement of real motocross racing. Our <br class="hidden sm:block md:hidden lg:block" /> game's realistic tracks offer an authentic experience <br class="hidden sm:block md:hidden lg:block" /> with challenging terrain`,
            background: "./../images/bgtrack 5.png",
            track: "./../images/track5.svg",
            trackTitle: "Emerald Desert",
            trackDesc: "Bibendum velit sollicitudin facilisi nisl praesent orci faucibus aliquam. Aenean vehicula porttitor quam sit enim id viverra. Erat consectetur turpis et aliquet.",
            TData1: "arizona desert",
            SData1: "Emerald Desert",
            TData2: "Level",
            sData2: "Easy",
            TData3: "20 KM",
            sData3: "DIstance",
            TData4: "12 Minutes",
            sData4: "Duration",
        },
        {
            title: `Tracks: Canyon  `,
            desc: `Get ready to tear through lifelike tracks that mirror the <br class="hidden sm:block md:hidden lg:block" /> heart-pounding excitement of real motocross racing. Our <br class="hidden sm:block md:hidden lg:block" /> game's realistic tracks offer an authentic experience <br class="hidden sm:block md:hidden lg:block" /> with challenging terrain`,
            background: "./../images/bgtrack6.png",
            track: "./../images/track 6.svg",
            trackTitle: "Emerald Desert",
            trackDesc: "Bibendum velit sollicitudin facilisi nisl praesent orci faucibus aliquam. Aenean vehicula porttitor quam sit enim id viverra. Erat consectetur turpis et aliquet.",
            TData1: "arizona desert",
            SData1: "Emerald Desert",
            TData2: "Level",
            sData2: "Easy",
            TData3: "20 KM",
            sData3: "DIstance",
            TData4: "12 Minutes",
            sData4: "Duration",
        },
    ]

    return (
        <Fragment>
            <div className="relative w-full h-full">
                <Slider ref={slider} {...settings}>
                    {
                        dataTracks.map((obj, i) => {
                            return <div key={i}>
                                <div className="w-full wrapper__h-100-screan relative overflow-hidden">
                                    <img src="./../images/sec 3 - line.svg" className='absolute right-0 top-0 h-full' alt="" />
                                    <img src={obj.background} className='absolute left-0 -bottom-[4vh] md:-bottom-[17vh] hminxl900:-bottom-[7vh] w-full h-full object-cover' alt="" />

                                    <div className="container h-full relative">
                                        <div className="absolute left-[1rem] xl:left-0 bottom-[2rem] md:w-1/2 lg:w-auto">
                                            <h2 className='koulen text-white text__64 mb-2' dangerouslySetInnerHTML={{
                                                __html: obj.title
                                            }}></h2>
                                            <p className='text__20 text-white  opacity-70' dangerouslySetInnerHTML={{
                                                __html: obj.desc
                                            }}></p>

                                            <div className="mt-3 md:hidden">
                                                <div className="flex items-center gap-3 ml-[2rem]">
                                                    <div className="flex items-center">
                                                        <div className="w-[200px] lg:w-[271px] h-[48px] lg:h-[56px] -mr-[11rem] lg:-mr-[14rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                                                        <div onClick={previous} className="cursor-pointer inline-block relative z-2 text-white koulen text__32 uppercase  px-[30px] xx:px-[30px] lg:px-[52px] h-[48px] lg:h-[56px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                                            <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                                            <span className="-skew-x-[40deg] relative z-[2]">
                                                                <span className="flex items-center gap-2">
                                                                    <img src="./../images/arrow.png" alt="" />
                                                                    <span>prev</span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div onClick={next} className="cursor-pointer inline-block relative z-2 text-white koulen text__32 uppercase  px-[30px] xx:px-[30px] lg:px-[52px] h-[48px] lg:h-[56px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                                            <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                                            <span className="-skew-x-[40deg] relative z-[2]">
                                                                <span className="flex items-center gap-2">
                                                                    <span>next</span>
                                                                    <img src="./../images/arrow.png" className='rotate-[180deg]' alt="" />
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="w-[200px] lg:w-[271px] h-[48px] lg:h-[56px] -ml-[11rem] lg:-ml-[14rem] bg-shadow-btn skew-x-[40deg]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <img src={obj.track} className='md:!hidden absolute left-1/2 -translate-x-1/2 top-[26%] hminMaxSm700:top-[35%] hminMaxSm800:top-[40%] hminMaxSm900:top-[50%] -translate-y-1/2 ss:w-auto w-[92%]' alt="" />

                                        <div className="absolute -right-[3rem] lg:right-[4rem] top-[10vh] lg:top-[14vh] hminxl800:top-[19vh] w-[23rem] lg:w-[26rem] hminxl800:w-[29rem] hminxl900:w-[32.5rem] hidden md:block">
                                            <div className="relative inline-block h-fit">
                                                <img src="./../images/Group 706193.svg" className='absolute object-left-top object-cover left-0 top-0 w-full h-full' alt="" />
                                                <div className="relative pl-[1rem] pb-[2rem] pr-[5rem] pt-[0.8rem]">
                                                    <img src={obj.track} className='h-[23vh] w-full' alt="" />
                                                    <div className="pb-[2rem] pt-[0.5rem] pr-[4rem]">
                                                        <h5 className='koulen text__24 hminxl800:text-[28px] hminxl900:text-[32px] mb-2'>{obj.trackTitle}</h5>
                                                        <p className='text__10 hminxl800:text-[12px] hminxl900:text-[14px] mb-3 opacity-70 clamp-4'>{obj.trackDesc}</p>

                                                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                                            <div className="">
                                                                <h5 className='koulen text__20 hminxl800:text__[24px] hminxl900:text-[28px] mb-2'>{obj.TData1}</h5>
                                                                <p className='text__18 hminxl800:text-[20px] hminxl900:text-[24px] opacity-70'>{obj.SData1}</p>
                                                            </div>
                                                            <div className="">
                                                                <h5 className='koulen text__20 hminxl800:text__[24px] hminxl900:text-[28px] mb-2'>{obj.TData2}</h5>
                                                                <p className='text__18 hminxl800:text-[20px] hminxl900:text-[24px] opacity-70'>{obj.sData2}</p>
                                                            </div>
                                                            <div className="">
                                                                <h5 className='koulen text__20 hminxl800:text__[24px] hminxl900:text-[28px] mb-2'>{obj.TData3}</h5>
                                                                <p className='text__18 hminxl800:text-[20px] hminxl900:text-[24px] opacity-70'>{obj.sData3}</p>
                                                            </div>
                                                            <div className="">
                                                                <h5 className='koulen text__20 hminxl800:text__[24px] hminxl900:text-[28px] mb-2'>{obj.TData4}</h5>
                                                                <p className='text__18 hminxl800:text-[20px] hminxl900:text-[24px] opacity-70'>{obj.sData4}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute right-0 bottom-[2rem] hidden md:block">
                                            <div className="flex items-center gap-3 ml-[2rem]">
                                                <div className="flex items-center">
                                                    <div className="w-[200px] lg:w-[271px] h-[48px] lg:h-[56px] -mr-[11rem] lg:-mr-[14rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                                                    <div onClick={previous} className="cursor-pointer inline-block relative z-2 text-white koulen text__32 uppercase  px-[30px] xx:px-[30px] lg:px-[52px] h-[48px] lg:h-[56px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                                        <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                                        <span className="-skew-x-[40deg] relative z-[2]">
                                                            <span className="flex items-center gap-2">
                                                                <img src="./../images/arrow.png" alt="" />
                                                                <span>prev</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div onClick={next} className="cursor-pointer inline-block relative z-2 text-white koulen text__32 uppercase  px-[30px] xx:px-[30px] lg:px-[52px] h-[48px] lg:h-[56px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                                        <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                                        <span className="-skew-x-[40deg] relative z-[2]">
                                                            <span className="flex items-center gap-2">
                                                                <span>next</span>
                                                                <img src="./../images/arrow.png" className='rotate-[180deg]' alt="" />
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="w-[200px] lg:w-[271px] h-[48px] lg:h-[56px] -ml-[11rem] lg:-ml-[14rem] bg-shadow-btn skew-x-[40deg]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </Slider>
            </div>
        </Fragment>
    )
}

export default Section3