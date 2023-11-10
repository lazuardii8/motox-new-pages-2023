import React, { Fragment } from 'react'

const section6 = (props) => {
    return (
        <Fragment>
            <img src="./../images/Screenshot 2023-11-05 at 5.36 1.png" className='w-full h-full absolute left-0 top-0 object-cover' alt="" />
            <img src="./../images/sec 6 - layer 2.svg" className='absolute left-0 top-0 h-full' alt="" />

            <div className="container relative h-full">
                <div className="absolute left-0 top-[26vh]">
                    <h5 className='text__20 uppercase text-[#F43329] mb-2'>START YOUR JOURNEY </h5>
                    <h2 className='koulen text-white text__64 mb-2'>open world</h2>
                    <p className='text__20 text-white'>Unleash your motocross adventure in a vast open world. <br /> Explore, race, and conquer diverse terrains at your own pace. <br /> Your motocross playground awaits!</p>
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

export default section6