import React, { Fragment } from 'react'
import Sec1 from '../../../component/Background/Sec1'

const Section7 = (props) => {
    return (
        <Fragment>

            <Sec1 section={5} />

            <img src="./../images/Group 706126.png" className='images__sec7-chacter' alt="" />

            <div className="container position-relative sm z-2">
                <div className="wrapper__text-heading sec7">
                    <h3 className='zen font__size--30 text__30-1024 text__30-md text__30-sm text-uppercase' style={{ color: "#FF716A" }}>latest Events</h3>
                    <h1 className='zen font__size--50 text__50-1024 text__50-md text__50-sm text__50-xxs normal text-uppercase text__shadow-head text__outline-white mt-4 position-relative z-2'>Supercross championshop</h1>
                    <h2 className='normal font__size--20 text__20-1024 lh__6 mb-0 opacity__7 mb-3 position-relative z-2'>Bibendum velit sollicitudin facilisi nisl praesent orci faucibus aliquam. Aenean vehicula porttitor quam sit enim id viverra. Erat consectetur turpis et aliquet.</h2>
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

export default Section7