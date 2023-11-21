import React, { Fragment } from 'react'

const section5 = (props) => {
    return (
        <Fragment>
            <img src="./../images/sec 5 - layer 3.svg" className='absolute w-full left-0 top-0' alt="" />
            <div className="absolute bottom-[7rem] lg:bottom-0 w-[79vh] lg:w-[88vh] right-0 lg:right-[6rem] bottom-[4rem] hminxl800:w-[75vh] hminxl800:right-[12rem] hmaxMaxSm600:w-[42vh] hminMaxSm600:w-[54vh] hminMaxSm:bottom-0 hminMaxSm:left-1/2 hminMaxSm:-translate-x-1/2 hminMaxSm700:w-[51vh] hminMaxSm700:bottom-0 hminMaxSm700:left-1/2 hminMaxSm700:-translate-x-1/2">
                <div className="relative w-full">
                    <img src="./../images/sec 5 - layer 2.png" className='w-full' alt="" />
                    <img src="./../images/sec 5 - layer 1.svg" className='absolute right-[3rem] -bottom-[6rem] w-[80vh]' alt="" />
                </div>
            </div>

            <div className="container relative h-full">
                <div className="absolute left-0 top-[14vh] md:top-auto md:bottom-[7vh] pl-[1rem] xl:pl-0">
                    <h5 className='text__20 uppercase text-[#F43329] mb-2'>START YOUR JOURNEY </h5>
                    <h2 className='koulen text-white text__64 mb-2'>career mode</h2>
                    <p className='text__20 text-white  opacity-70'>Embark on a journey from rookie to motocross <br className='hidden xs:block' /> legend in our immersive career mode. Blaze your <br className='hidden xs:block' /> own trail, conquer challenges, and rise to the top of <br className='hidden xs:block' /> the motocross world</p>
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

export default section5