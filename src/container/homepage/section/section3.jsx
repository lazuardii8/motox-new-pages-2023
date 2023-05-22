import React, { Fragment } from 'react'
import { Sec3Line1Icon, Sec3Line2Icon } from '../../../component/Svg/Svg'
import Sec1 from '../../../component/Background/Sec1'

const section3 = (props) => {
    return (
        <Fragment>

            <Sec1 section={3} />

            <div className="images__sec3-content">
                <div className="position-relative">
                    <img src="./../images/nick-naethuijs-assembly-1.png" className='images__sec3-moto' alt="" />
                    <img src="./../images/Group 706128 (1).png" alt="" />
                </div>
            </div>

            <div className="container sm position-relative z-2">
                <div className="wrapper__text-heading sec3">
                    <h1 className='zen font__size--60 text__60-1024 text__60-md text__60-sm normal text-uppercase text__shadow-head'>Realistic <br className='d-none d-md-block' /> Mechanics</h1>
                    <h2 className='normal font__size--20 text__20-1024 lh__6 mb-0 opacity__7'>MotoX is the first standalone motocross VR game, designed to give you a realistic and immersive motocross experience like no other. With stunning graphics, realistic physics, and intuitive controls. Experience the sensation of racing on a motocross bike, soaring over jumps and navigating challenging turns. </h2>
                </div>
            </div>
        </Fragment>
    )
}

export default section3