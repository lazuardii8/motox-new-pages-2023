import React, { Fragment } from 'react'
import { Sec2Line1Icon, Sec2Line2Icon } from '../../../component/Svg/Svg'
import Sec1 from '../../../component/Background/Sec1'

const section2 = (props) => {
    return (
        <Fragment>

            <Sec1 section={2} />

            <img src="./../images/Group 706097.png" className='images__sec2-character' alt="" />
            <div className="container position-relative sm z-2">
                <div className="wrapper__text-heading sec2">
                    <h1 className='zen font__size--60 text__60-1024 text__60-md text__60-sm normal text-uppercase text__shadow-head'>Step into <br /> the track</h1>
                    <h2 className='normal font__size--20 text__20-1024 lh__6 mb-0 opacity__7'>Something about VR motocross game, step into the arena, step into the track, career mode </h2>
                </div>
            </div>
        </Fragment>
    )
}

export default section2