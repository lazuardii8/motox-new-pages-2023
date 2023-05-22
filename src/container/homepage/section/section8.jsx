import React, { Fragment, useState } from 'react'
import Sec1 from '../../../component/Background/Sec1'

const Section8 = (props) => {
    return (
        <Fragment>
            <Sec1 section={8} />
            <div className="container position-relative z-2">
                <div className="text-center">
                    <h1 className='zen font__size--60 text__60-1024 text__60-md text__60-sm normal text-uppercase text__shadow-head mb-4 position-relative z-2 mb-5 mb-md-2'>sign up for beta</h1>

                    <div className="wrapper__contact-wrap position-relative z-2">
                        <img src="./../images/dsfggfgf.png" className='bg__cover d-none d-md-block' alt="" />

                        <img src="./../images/dgdgdfgfdgh.png" className='images__sec8-glase' alt="" />
                        <div className="row justify-content-end position-relative z-2">
                            <div className="col-md-9 col-lg-8">
                                <div className="wrapper__input-field position-relative mb-4">
                                    <div className="wrap">
                                        <input type="text" className='zen font__size--18 text__18-1024 color__white position-relative z-2' placeholder='Insert your email' />

                                        <div className="btn__clip register koulen normal font__size--40 text__40-1024 text__40-md text__1024-sm text-uppercase color__white pointer d-none d-md-block">
                                            <span className='z-2'>Submit</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-inline-block d-md-none">
                                    <div className="btn__clip register koulen normal font__size--40 text__40-1024 text__40-md text__1024-sm text-uppercase color__white pointer">
                                        <span className='z-2'>Submit</span>
                                    </div>
                                </div>

                                <h3 className='normal font__size--18 text__18-1024 color__white text-left lh__5 d-none d-md-block'>After registering, we will send your our latest new and more <br /> opportunities to win</h3>
                            </div>
                        </div>

                        <img src="./../images/fsdfdfsdf.png" className='images__sec8-character' alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Section8