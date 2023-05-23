import React, { Fragment } from 'react'
import { TopLineIcon, BottomLineIcon, ROundWrapIcon, RidesIcon, LineOr1Icon, LineOr2Icon, LineOrSec2on1Icon, LineOrSec2on2Icon } from '../Svg/Svg'

const Sec1 = (props) => {
    return (
        <Fragment>
            {
                props.section == 1 ? <Fragment>
                    <div className="images__line-or-1 d-none d-md-block">
                        <LineOr1Icon />
                    </div>
                    <div className="images__line-or-2 d-none d-md-block">
                        <LineOr2Icon />
                    </div>
                </Fragment> : ""
            }
            {
                props.section == 2 || props.section == 3 ? <Fragment>
                    <div className="images__line-or-sec2-1 d-none d-md-block">
                        <LineOrSec2on1Icon />
                    </div>
                    <div className="images__line-or-sec2-2 d-none d-md-block">
                        <LineOrSec2on2Icon />
                    </div>
                </Fragment> : ""
            }

            <div className="images__line-1 d-xs-none">
                {/* <TopLineIcon /> */}
                <img src="./../images/sdfsdfsdf.png" alt="" />
            </div>
            <div className="images__line-2 d-xs-none">
                <BottomLineIcon />
            </div>
            <img src="./../images/Mask group.png" className="images__bg-1 d-xs-none" alt="" />
            <div className="images__line-3">
                <ROundWrapIcon />
            </div>
            <img src="./../images/Group 706066.png" className="images__bg-2 d-none d-md-block" alt="" />
            <div className="images__bg-wrap-1" alt="" />
            <img src="./../images/Group 706062.png" className="images__bg-3" alt="" />

            <div className="wrapper__number-home d-flex align-items-center w-100">
                <div className="container-lg">
                    <div className="line w-100"></div>
                </div>
            </div>

            <img src="./../images/fgdgfgf.png" className="images__line-red" alt="" />

            <img src="./../images/Vector (3).png" className="images__line-blue" alt="" />
            {
                props.section == 1 ? <div className="images__line-text-blur d-none d-md-block">
                    <RidesIcon width={"100%"} />
                </div>
                    : ""
            }



            {
                props.section != 8 ? <img src="./../images/Vector 300.png" className={"images__triangle-wrap " + (props.section == 4 ? "four" : props.section == 5 ? "left" : "")} alt="" /> : ""
            }
        </Fragment>
    )
}

export default Sec1