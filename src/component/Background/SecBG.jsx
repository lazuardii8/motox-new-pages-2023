import React, { Fragment } from 'react'
import { BottomLineIcon, ROundWrapIcon, TopLineIcon } from '../Svg/Svg'

const SecBG = () => {
    return (
        <Fragment>
            <div className="images__line-1">
                {/* <TopLineIcon /> */}
                <img src="./../images/sdfsdfsdf.png" alt="" />
            </div>
            <div className="images__line-2">
                <BottomLineIcon />
            </div>
            <img src="./../images/Mask group.png" className="images__bg-1" alt="" />
            <div className="images__line-3">
                <ROundWrapIcon />
            </div>
            <div className="images__bg-wrap-1" alt="" />
            <img src="./../images/Group 706062.png" className="images__bg-3" alt="" />

            <div className="wrapper__number-home d-flex align-items-center w-100">
                <div className="container-lg">
                    <div className="line w-100"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default SecBG