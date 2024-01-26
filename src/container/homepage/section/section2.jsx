import React, { Fragment } from 'react'

const section2 = (props) => {
    return (
        <Fragment>
            <img src="./../images/line 2.svg" className='absolute hidden md:block -right-[5rem] -bottom-[16rem] w-[94vh] hminxl800:w-[85vh] hminxl800:-right-[6rem] hminxl900:-right-[14rem] hminxl800:-bottom-[10rem] hminlg950:w-[79vh] hminlg950:-right-[24rem]' alt="" />
            <img src="./../images/line 1.svg" className='absolute -left-[7rem] sm:left-0 top-0 w-[221vh] max-w-[200%] sm:max-w-[100%] sm:w-auto h-full' alt="" />
            <img src="./../images/layer 3.png" className='absolute md:-left-[12rem] lg:left-0 md:!bottom-0 h-full object-cover -bottom-[14rem] left-0 object-[23%] md:left-0 md:object-[100%] hminmd1000:object-[65%]' alt="" />
            <div className="absolute left-0 bottom-0 w-[72vh] -left-[1rem] xx:-left-[2rem] xx:w-[80vh] xs:left-0 sm:!w-[124vh] hminlg950:!w-[100vh] hminlg1100:!w-[95vh] hminmd1024:!w-[90vh] hminmd700:-left-[4rem]">
                <div className="realtive w-full">
                    <img src="./../images/82e90ddf-27b2-48c1-826d-0787014f4e24 1.png" className='w-[100vh] lg:w-full' alt="" />
                    <img src="./../images/layer 1.svg" className='absolute left-[17rem] lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vh] lg:w-[88vh]' alt="" />
                </div>
            </div>
            <div className="container relative h-full">
                <div className="absolute md:right-0 top-[14vh] pr-0 md:!pr-[1rem] xl:!pr-0">
                    <h5 className='text__20 uppercase text-[#F43329] mb-2'>START YOUR JOURNEY </h5>
                    <h2 className='koulen text-white text__64 mb-2'>step into the track</h2>
                    <p className='text__20 text-white opacity-70'>Something about VR motocross game, step into the arena, step  <br className='sm:block hidden' />into the track, career mode</p>
                    <div className="flex items-center gap-3 mt-4 ml-[1rem]">
                        <div className="flex items-center">
                            <div className="w-[271px] h-[48px] xs:h-[64px] -mr-[14rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                            <a href="https://www.meta.com/experiences/5754014731339882/" target='_blank' className="inline-block flex-shrink-0 relative z-2 text-white koulen text__32 uppercase px-[30px] xx:px-[36px] ss:px-[52px] h-[48px] xs:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                <span className="-skew-x-[40deg] relative z-[2]">
                                    join BETA
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="https://discord.com/invite/gkAqERE6AF" target='_blank' className="inline-block relative z-2 text-white koulen text__32 uppercase px-[20px] ss:px-[32px] h-[48px] xs:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
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

export default section2