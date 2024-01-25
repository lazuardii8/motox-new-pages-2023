import React, { Fragment } from 'react'
import Navbar from '../../component/Other/Navbar'

const Error = () => {
    return (
        <Fragment>

            <Navbar current={-1} status={true} />
            <section className='relative min-h-screen bg-black flex items-center justify-center'>
                <img src="./../images/Group 706067.svg" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                <img src="./../images/Group 706223.png" className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
                <div className="bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.00)100%)] absolute left-0 top-0 w-full h-full object-cover"></div>
                <div className="container relative z-[2] my-[1.5rem]">
                    <div className="text-center w-full">
                        <img src="./../images/Group 706218.png" className='mx-auto' alt="" />

                        <div className="mt-[2rem]">
                            <h3 className='text-[30px] md:text-[32px] lg:text-[45px] xl:text-[50px] text-uppercase color__white koulen mb-2'>Oops, looks like you're <span className='text-[#F43329]'>off track!</span></h3>
                            <p className='text__20 text-white opacity-70 mb-4'>Looks like you've hit a jump off the track. Time to rev up and make a daring leap <br className='md:block hidden' /> back to the main course of our digital motocross circuit.</p>

                            <div className="flex items-center justify-center">
                                <a href="/" className="inline-block flex-shrink-0 relative z-2 text-white koulen text__32 uppercase px-[30px] xx:px-[36px] ss:px-[52px] h-[48px] xs:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                    <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                    <span className="-skew-x-[40deg] relative z-[2]">
                                        back to home
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default Error