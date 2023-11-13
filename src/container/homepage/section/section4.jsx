import React, { Fragment } from 'react'

const section4 = (props) => {
    return (
        <Fragment>
            <img src="./../images/sec4 - layer 3.svg" className='absolute left-0 bottom-0 md:bottom-auto md:top-0 w-full' alt="" />
            <img src="./../images/sec4 - layer 2.png" className='absolute left-1/2 md:left-auto -translate-x-1/2 md:translate-x-[initial] md:-right-[10rem] lg:right-0 bottom-0 w-[58vh] hminMaxSm800:w-[62vh] md:w-[103vh] hminMaxSm800:max-w-[116%] hminMaxSm800:w-[113vw] hminMaxSm800:max-w-[135%] hminMaxSm800:left-[68%] hminMaxSm900:w-[112vw]' alt="" />
            <img src="./../images/sec4 - layer 1.svg" className='absolute right-0 bottom-0 w-[106vh]' alt="" />

            <div className="container relative h-full">
                <div className="absolute left-[1rem] xl:left-0 top-[14vh] md:top-[26vh]">
                    <h5 className='text__20 uppercase text-[#F43329] mb-2'>START YOUR JOURNEY </h5>
                    <h2 className='koulen text-white text__64 mb-2'>Multiplayer</h2>
                    <p className='text__20 text-white'>Race, compete, and conquer with friends and players <br className='hidden ss:block' /> worldwide in our exhilarating multiplayer mode. It's time to <br className='hidden ss:block' /> prove your motocross prowess on a global stage!</p>
                    <div className="flex items-center gap-3 mt-4 ml-[1rem]">
                        <div className="flex items-center">
                            <div className="w-[271px] h-[48px] xs:h-[64px] -mr-[14rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                            <a href="#!" className="inline-block flex-shrink-0 relative z-2 text-white koulen text__32 uppercase px-[30px] xx:px-[36px] ss:px-[52px] h-[48px] xs:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                <span className="-skew-x-[40deg] relative z-[2]">
                                    join BETA
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="#!" className="inline-block relative z-2 text-white koulen text__32 uppercase px-[20px] ss:px-[32px] h-[48px] xs:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/Mask group.png" className="absolute left-0 top-0" alt="" />
                                <img src="./../images/discord.svg" className="-skew-x-[40deg] relative z-[2] w-[36px] ss:w-[52px]" alt="" />
                            </a>
                            <div className="w-[271px] h-[48px] xs:h-[64px] -ml-[14rem] bg-shadow-btn skew-x-[40deg]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default section4