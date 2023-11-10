import React, { Fragment } from 'react'

const section5 = (props) => {
    return (
        <Fragment>
            <img src="./../images/sec 5 - layer 3.svg" className='absolute w-full left-0 top-0' alt="" />
            <div className="absolute right-0 bottom-0 w-[88vh] right-[6rem] bottom-[4rem]">
                <div className="relative w-full">
                    <img src="./../images/sec 5 - layer 2.png" className='w-full' alt="" />
                    <img src="./../images/sec 5 - layer 1.svg" className='absolute right-[3rem] -bottom-[6rem] w-[80vh]' alt="" />
                </div>
            </div>

            <div className="container relative h-full">
                <div className="absolute left-0 bottom-[7vh]">
                    <h5 className='text__20 uppercase text-[#F43329] mb-2'>START YOUR JOURNEY </h5>
                    <h2 className='koulen text-white text__64 mb-2'>career mode</h2>
                    <p className='text__20 text-white'>Embark on a journey from rookie to motocross <br /> legend in our immersive career mode. Blaze your <br /> own trail, conquer challenges, and rise to the top of <br /> the motocross world</p>
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

export default section5