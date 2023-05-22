import React, { Fragment } from 'react'
import Sec1 from '../../../component/Background/Sec1'

const section5 = (props) => {
    return (
        <Fragment>
            <Sec1 section={5} />

            <img src="./../images/Group 706130.png" className='images__sec5-chacter' alt="" />

            <div className="container position-relative sm z-2">
                <div className="wrapper__text-heading sec5">
                    <h1 className='zen font__size--60 text__60-1024 text__60-md text__60-sm normal text-uppercase text__shadow-head'>multiplayer</h1>
                    <h2 className='normal font__size--20 text__20-1024 lh__6 mb-0 opacity__7'>Bibendum velit sollicitudin facilisi nisl praesent orci faucibus aliquam. Aenean vehicula porttitor quam sit enim id viverra. Erat consectetur turpis et aliquet.</h2>
                </div>
            </div>
        </Fragment>
    )
}

export default section5