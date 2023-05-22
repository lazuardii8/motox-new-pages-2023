import React, { Fragment } from 'react'
import { Sec4Line1Icon } from '../../../component/Svg/Svg'
import Sec1 from '../../../component/Background/Sec1'

const section4 = (props) => {
    return (
        <Fragment>
            <Sec1 section={4} />
            <div className="container position-relative z-2">
                <div className="row z-3 position-relative">
                    <div className="col-md-4 text-center d-none d-lg-block">
                        <img src="./../images/dsfsdfsd.png" className='images__sec4-chacter' alt="" />
                        {/* <img src="./../images/pose 2c 2.png" className='images__sec4-chacter' alt="" /> */}
                    </div>
                    <div className="mt__auto-sec4 col-lg-8 position-relative text-center text-md-left">


                        <h1 className="zen font__size--56 text__50-1024 text__50-md text__50-sm text__50-xxs normal text-uppercase mb-3 position-relative z-2">player <br /> customization</h1>

                        <div className="d-md-none">
                            <h2 className='normal font__size--20 text__20-1024 lh__6 mb-0 opacity__7 mb-3'>Bibendum velit sollicitudin facilisi nisl praesent orci faucibus aliquam. Aenean vehicula porttitor quam sit enim id viverra. Erat consectetur turpis et aliquet.</h2>

                            <div className="wrapper__btn-sosmed d-flex align-items-center justify-content-center mb-4">
                                <img src="./../images/Vector (2).png" alt="" />
                                <img src="./../images/Vector (2).png" alt="" />
                                <a href="#!" className="btn__clip more koulen normal font__size--40 text__40-1024 text__40-md text__1024-sm text-uppercase color__white"><span>coming soon</span></a>
                                <img src="./../images/Vector (2).png" className="right" alt="" />
                                <img src="./../images/Vector (2).png" className="right" alt="" />
                            </div>
                        </div>

                        <div className="row position-relative z-2">
                            <div className="col-md-7 col-lg-6">
                                <div className="wrapper__height-res-sec4">
                                    <div className="row">
                                        <div className="col-6 mb-4">
                                            <div className="wrapper__card-property" style={{ backgroundImage: "url('./../images/Vector 190.png')" }}>
                                                <div className="content">
                                                    <img src="./../images/lynch-designed-bell-roller-goggle.png" alt="" />
                                                </div>
                                                <div style={{ backgroundImage: "url('./../images/Vector 191.png')" }} className="desc font__size--16 text__16-1024 zen text-uppercase">
                                                    GLASSES
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="wrapper__card-property" style={{ backgroundImage: "url('./../images/Vector 190.png')" }}>
                                                <div className="content">
                                                    <img src="./../images/glooves 3.png" alt="" />
                                                </div>
                                                <div style={{ backgroundImage: "url('./../images/Vector 191.png')" }} className="desc font__size--16 text__16-1024 zen text-uppercase">
                                                    GLOOVES
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 mb-4">
                                            <div className="wrapper__card-property" style={{ backgroundImage: "url('./../images/Vector 190.png')" }}>
                                                <div className="content">
                                                    <img src="./../images/andrii-turianskyi-02-02.png" alt="" />
                                                </div>
                                                <div style={{ backgroundImage: "url('./../images/Vector 191.png')" }} className="desc font__size--16 text__16-1024 zen text-uppercase">
                                                    HELMET
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="wrapper__card-property" style={{ backgroundImage: "url('./../images/Vector 190.png')" }}>
                                                <div className="content align-items-end">
                                                    <img src="./../images/pose 2c 3.png" alt="" />
                                                </div>
                                                <div style={{ backgroundImage: "url('./../images/Vector 191.png')" }} className="desc font__size--16 text__16-1024 zen text-uppercase">
                                                    CHARACTER
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='wrapper__text-heading sec4 d-none d-md-block'>
                    <h2 className='normal font__size--20 text__20-1024 lh__6 mb-0 opacity__7 mb-4'>Bibendum velit sollicitudin facilisi nisl praesent orci faucibus aliquam. Aenean vehicula porttitor quam sit enim id viverra. Erat consectetur turpis et aliquet.</h2>

                    <div className="wrapper__btn-sosmed d-flex justify-content-md-start justify-content-center align-items-center">
                        <img src="./../images/Vector (2).png" alt="" />
                        <img src="./../images/Vector (2).png" alt="" />
                        <a href="#!" className="btn__clip more koulen normal font__size--40 text__40-1024 text__40-md text__1024-sm text-uppercase color__white"><span>coming soon</span></a>
                        <img src="./../images/Vector (2).png" className="right" alt="" />
                        <img src="./../images/Vector (2).png" className="right" alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default section4