import React, { Fragment, useRef } from 'react'
import Slider from 'react-slick';

const Section3 = (props) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        switouchMovepe: false,
        draggable: false,
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
            title: `Tracks: Dead <br /> Forest`,
            desc: `Get ready to tear through lifelike tracks that mirror the <br /> heart-pounding excitement of real motocross racing. Our <br /> game's realistic tracks offer an authentic experience <br /> with challenging terrain`,
            background: "./../images/sec 3 - layer 2.svg",
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
            title: `Tracks: <br /> Grasslands`,
            desc: `Experience the thrill of the Grasslands track, where <br /> speed meets nature's challenges. Are you ready to <br /> conquer this dynamic motocross terrain?`,
            background: "./../images/bgtrack2.svg",
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
            title: `Tracks: Emerald <br /> Desert   `,
            desc: `Prepare for an adrenaline-fueled ride through the <br /> Emerald Desert track. Master the dunes, conquer the <br /> heat, and make your mark in the heart of the desert!`,
            background: "./../images/bgtrack3.svg",
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
            title: `Tracks: <br /> California Beach`,
            desc: `Hit the sandy shores of the California Beach track for <br /> high-speed motocross action. Sun, surf, and intense <br /> racing – it's the ultimate beachside thrill!`,
            background: "./../images/bgtrack 4.svg",
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
            title: `Tracks: <br /> Supercross  `,
            desc: `Get ready to tear through lifelike tracks that mirror the <br /> heart-pounding excitement of real motocross racing. Our <br /> game's realistic tracks offer an authentic experience <br /> with challenging terrain`,
            background: "./../images/bgtrack 5.svg",
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
            desc: `Get ready to tear through lifelike tracks that mirror the <br /> heart-pounding excitement of real motocross racing. Our <br /> game's realistic tracks offer an authentic experience <br /> with challenging terrain`,
            background: "./../images/bgtrack6.svg",
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
                        dataTracks.map((obj) => {
                            return <div>
                                <div className="w-full wrapper__h-100-screan relative overflow-hidden">
                                    <img src="./../images/sec 3 - line.svg" className='absolute right-0 top-0 h-full' alt="" />
                                    <img src={obj.background} className='absolute left-0 -bottom-[17vh] w-full h-full object-cover' alt="" />

                                    <div className="container h-full relative">
                                        <div className="absolute left-0 bottom-[2rem]">
                                            <h2 className='koulen text-white text__64 mb-2' dangerouslySetInnerHTML={{
                                                __html: obj.title
                                            }}></h2>
                                            <p className='text__20 text-white' dangerouslySetInnerHTML={{
                                                __html: obj.desc
                                            }}></p>
                                        </div>

                                        <div className="absolute right-[4rem] top-[14vh] w-[67vh]">
                                            <div className="relative inline-block h-fit">
                                                <img src="./../images/Group 706193.svg" className='absolute object-left-top object-cover left-0 top-0 w-full h-full' alt="" />
                                                <div className="relative pl-[1rem] pb-[1rem] pr-[5rem] pt-[0.8rem]">
                                                    <img src={obj.track} className='h-[23vh] w-full' alt="" />
                                                    <div className="pb-[1rem] pt-[0.5rem] pr-[4rem]">
                                                        <h5 className='koulen text__24 mb-2'>{obj.trackTitle}</h5>
                                                        <p className='text__10 mb-3 opacity-70 clamp-4'>{obj.trackDesc}</p>

                                                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                                            <div className="">
                                                                <h5 className='koulen text__20 mb-2'>{obj.TData1}</h5>
                                                                <p className='text__18 opacity-70'>{obj.SData1}</p>
                                                            </div>
                                                            <div className="">
                                                                <h5 className='koulen text__20 mb-2'>{obj.TData2}</h5>
                                                                <p className='text__18 opacity-70'>{obj.sData2}</p>
                                                            </div>
                                                            <div className="">
                                                                <h5 className='koulen text__20 mb-2'>{obj.TData3}</h5>
                                                                <p className='text__18 opacity-70'>{obj.sData3}</p>
                                                            </div>
                                                            <div className="">
                                                                <h5 className='koulen text__20 mb-2'>{obj.TData4}</h5>
                                                                <p className='text__18 opacity-70'>{obj.sData4}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute right-0 bottom-[2rem]">
                                            <div className="flex items-center gap-3 ml-[2rem]">
                                                <div className="flex items-center">
                                                    <div className="w-[271px] h-[56px] -mr-[14rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                                                    <div onClick={previous} className="cursor-pointer inline-block relative z-2 text-white koulen text__32 uppercase px-[52px] h-[56px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                                        <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                                        <span className="-skew-x-[40deg] relative z-[2]">
                                                            <span className="flex items-center gap-2">
                                                                <img src="./../images/arrow.svg" alt="" />
                                                                <span>prev</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div onClick={next} className="cursor-pointer inline-block relative z-2 text-white koulen text__32 uppercase px-[52px] h-[56px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                                        <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                                        <span className="-skew-x-[40deg] relative z-[2]">
                                                            <span className="flex items-center gap-2">
                                                                <span>next</span>
                                                                <img src="./../images/arrow.svg" className='rotate-[180deg]' alt="" />
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="w-[271px] h-[56px] -ml-[14rem] bg-shadow-btn skew-x-[40deg]"></div>
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