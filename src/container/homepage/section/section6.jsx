import React, { Fragment } from 'react'
import { Sec6Line1Icon, Sec6Line2Icon, Sec6Line3Icon } from '../../../component/Svg/Svg'
import Sec1 from '../../../component/Background/Sec1'

const section6 = (props) => {
    return (
        <Fragment>

            <Sec1 section={6} />

            <img src="./../images/fdfdsfs.png" className='images__sec6-character' alt="" />
            <div className="container position-relative sm z-2">
                <div className="wrapper__text-heading sec6">
                    <h1 className='zen font__size--60 text__60-1024 text__60-md text__60-sm normal text-uppercase text__shadow-head'>Open world</h1>
                    <h2 className='normal font__size--20 text__20-1024 lh__6 mb-3 opacity__7'>Bibendum velit sollicitudin facilisi nisl praesent orci faucibus aliquam. Aenean vehicula porttitor quam sit enim id viverra. Erat consectetur turpis et aliquet.</h2>
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

export default section6