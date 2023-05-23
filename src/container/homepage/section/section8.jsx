import React, { Fragment, useState } from 'react'
import Sec1 from '../../../component/Background/Sec1'
import { InstagramIcon, TiktokIcon, TwitterIcon, WebsiteIcon, YoutubeIcon } from '../../../component/Svg/Svg'

const Section8 = (props) => {
    return (
        <Fragment>
            <Sec1 section={8} />
            <div className="container position-relative z-2">
                <div className="text-center mt-5">
                    <h1 className='zen font__size--60 hres text__60-1024 text__60-md text__60-sm text__60-xxs normal text-uppercase text__shadow-head mb-4 position-relative z-2 mb-0'>Connect with us</h1>

                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="wrapper__connet-discord position-relative text-center">
                                <img src="./../images/gfjhfgjs.png" className='glasses d-none d-md-block' alt="" />
                                <div className='logo'>
                                </div>
                                <img src="./../images/Group 706160.png" className='logoWrap' alt="" />
                                <div className="wrap">
                                    <h4 className='zen my-4 normal font__size--32 text__32-1024 text__32-xx hres color__white text-uppercase'>join our discord channel</h4>

                                </div>
                                <div className="wrapper__btn-sosmed btn-join d-flex justify-content-center align-items-center">
                                    <img src="./../images/Vector (2).png" alt="" />
                                    <img src="./../images/Vector (2).png" alt="" />
                                    <a href="https://discord.gg/AhJz97vxsw" target="_blank" className="btn__clip more koulen normal hres font__size--40 text__40-1024 text__40-md text-uppercase color__white"><span>join Now</span></a>
                                    <img src="./../images/Vector (2).png" className="right" alt="" />
                                    <img src="./../images/Vector (2).png" className="right" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-10 col-xl-7 mt-4">
                            <div className="row">
                                <div className="col-md-6 text-center text-lg-left mb-3 mb-lg-0">
                                    <h4 className='normal koulen font__size--32 text__32-1024 hres color__white text-up
                                    mb-3'>follow us</h4>

                                    <ul className="list__sosmed">
                                        <li>
                                            <a href="https://www.tiktok.com/@motoxvr/" target='_blank'>
                                                <TiktokIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/MotoXVR" target='_blank'>
                                                <TwitterIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/motoxvr/" target='_blank'>
                                                <InstagramIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCpDug3g8oD0Msie9s6fihkw" target='_blank'>
                                                <YoutubeIcon />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 text-center text-lg-right">
                                    <h4 className='normal koulen font__size--32 text__32-1024 hres color__white text-up
                                    mb-3'>The Developer and Publisher</h4>

                                    <div className="list__website">
                                        <div className="position-relative z-2 icon">
                                            <WebsiteIcon />
                                        </div>
                                        <div className="wrap normal font__size--24 hres text__24-1024 color__white hres">
                                            <a href="https://enverstudio.com/" target='_blank' className='color__white'>
                                                enverstudio.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment >
    )
}

export default Section8