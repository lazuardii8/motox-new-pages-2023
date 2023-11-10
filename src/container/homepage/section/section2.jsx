import React, { Fragment } from 'react'

const section2 = (props) => {
    return (
        <Fragment>
            <img src="./../images/line 1.svg" className='absolute left-0 top-0 h-full' alt="" />
            <img src="./../images/layer 3.svg" className='absolute left-0 top-0 h-full' alt="" />
            <img src="./../images/layer 3.svg" className='absolute left-0 top-0 h-full' alt="" />
            <div className="absolute left-0 bottom-0 w-[124vh]">
                <div className="realtive w-full">
                    <img src="./../images/82e90ddf-27b2-48c1-826d-0787014f4e24 1.png" className='w-full' alt="" />
                    <img src="./../images/layer 1.svg" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88vh]' alt="" />
                </div>
            </div>
            <img src="./../images/line 2.svg" className='absolute -right-[5rem] -bottom-[16rem] w-[94vh]' alt="" />
            <div className="container relative h-full">
                <div className="absolute right-0 top-[14vh]">
                    <h5 className='text__20 uppercase text-[#F43329] mb-2'>START YOUR JOURNEY </h5>
                    <h2 className='koulen text-white text__64 mb-2'>step into the track</h2>
                    <p className='text__20 text-white'>Something about VR motocross game, step into the arena, step  <br />into the track, career mode</p>
                    <div className="flex items-center gap-3 mt-4 ml-[2rem]">
                        <div className="flex items-center">
                            <div className="w-[271px] h-[64px] -mr-[14rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                            <a href="#!" className="inline-block relative z-2 text-white koulen text__32 uppercase px-[52px] h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                <span className="-skew-x-[40deg] relative z-[2]">
                                    join BETA
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="#!" className="inline-block relative z-2 text-white koulen text__32 uppercase px-[32px] h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/Mask group.png" className="absolute left-0 top-0" alt="" />
                                <img src="./../images/discord.svg" className="-skew-x-[40deg] relative z-[2] w-[52px]" alt="" />
                            </a>
                            <div className="w-[271px] h-[64px] -ml-[14rem] bg-shadow-btn skew-x-[40deg]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default section2