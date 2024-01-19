import React, { Fragment } from 'react'

const section6 = (props) => {
    
    return (
        <Fragment>
            {/* <img src="./../images/Screenshot 2023-11-05 at 5.36 1.png" className='w-full h-full absolute left-0 top-0 object-cover' alt="" /> */}

            <video
                data-keepplaying
                // poster="./../images/Rectangle 22653.png"
                className='w-full h-full absolute left-0 top-0 object-cover z-[1]'
                autoPlay
                controls={false}
                loop
                playsInline
                preload
                muted
            >
                <source
                    src="https://dfpcevrzf8nxo.cloudfront.net/MotoX%20Web.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aDmFwLXNvdXRoZWFzdC0xIkcwRQIgGUlrKG%2BMhwl3p3FCwFx3BNjmu5OglxFg8K6elDERA1cCIQDWui6hhDCIzCbpM9JA2wKvcx6LoP714bNK9Xy0Z0lVRSrkAghWEAAaDDkyNjIwNjM3NzYzNiIMV736LVg5LwFOClZaKsECMMUePtFHUXkrbX9A85hZu4FF4Pm6SgyVlAUnE%2Fl4v4sZSQiSLnvxQ4DN9lvIufiETqHgNbHkiaPTdKeVCoatRBDim33w4Q7PihkDRE28NpWwWsqbzn2NXI4TVeberU8VSpQavXB8zCNW5bnN8%2FeGpcZE8Yx1UraXXjwe6t1imDHGPKSgR8RgXfcoWAkQ4U9rolNUv93%2Fw3%2BsIPeznrqeDqbtcIeZpO5UqCIHZa9wFs8e%2FwFttYOH1DefTuQlvv77VAHOZVDcuGVWvh18MKnYhZAs7ZE4K3mNHGta5CwX%2B7Ws2beaBlZaVKc%2FSRberhl2IBals9kJEj5pMvv%2BoGN7qWS5qd0q9B%2FUzaZyLNIPdsq5WuDj1c1rhZN%2Bibuc8pnL9ZFZal7O4ZB6opnl8rlX4uVD3PkcxS7%2BySLaV3gFnZ0MMM%2Fty6oGOrMCv7YbdvpNZa4aSi9ZGZ0ikwfotiwSqFv7oc%2BGAZum3g6JxG16dgLhI0wUPYcjMGaoqVs0bOjrjZp5WSSuN9EXyL6GiASKUqQbVeEO98hB1g4DE5rZbxoTposuqJPY9kuDpQFcxzu0K8vwvVR4g3sxHoAj8Gt4MMY6o5xvPvr7Fmm2z8ge1DqiKMhgTXbLTbujf%2FjWRoJdTshWUYLznAhZsXS1RQF%2BsCfepr1vzElo73fO2z2SPHq7jhUTkaLiW%2FSCXCTwtQr1s14kQqE7OxAxCRB57O53l%2F%2B4uRzHyipq6swSBnbYvVl63uoDBRZ06kHBUt6MRfxgDNHtNhxvkCVHzDPyxH1WdWpAEvkTAJ91fHVvrhJPr%2BXNIxqUASKfGZmVnzEI8zih72BW13KcDai9NTMjpw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231114T042807Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5PJRTX2SOYBU4CNP%2F20231114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ad8adc4a354991ab825858ed42ba1f8c78b53a3e6d4dd4befc18438968e59b7a"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <img src="./../images/sec 6 - layer 2.svg" className='bg6 absolute left-0 top-0 h-full object-cover z-[2]' alt="" />

            <div className="container relative h-full z-[4]">
                <div className="absolute ct6 left-[1rem] xl:left-0 top-[50vh] hminMaxSm800:top-[58vh] md:top-[26vh]">
                    <h5 className='text__20 uppercase text-[#F43329] mb-2'>START YOUR JOURNEY </h5>
                    <h2 className='koulen text-white text__64 mb-2'>open world</h2>
                    <p className='text__20 text-white'>Unleash your motocross adventure in a vast open world. <br className='hidden sm:block' /> Explore, race, and conquer diverse terrains at your own pace. <br className='hidden sm:block' /> Your motocross playground awaits!</p>
                    <div className="flex items-center gap-3 mt-4 ml-[1rem]">
                        <div className="flex items-center">
                            <div className="w-[271px] h-[48px] xs:h-[64px] -mr-[14rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
                            <a href="https://www.meta.com/experiences/5754014731339882/" target='_blank' className="inline-block flex-shrink-0 relative z-2 text-white koulen text__32 uppercase px-[30px] xx:px-[36px] ss:px-[52px] h-[48px] xs:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                                <span className="-skew-x-[40deg] relative z-[2]">
                                    join BETA
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="https://discord.com/invite/gkAqERE6AF" target='_blank' className="inline-block relative z-2 text-white koulen text__32 uppercase px-[20px] ss:px-[32px] h-[48px] xs:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                                <img src="./../images/Mask group.png" className="absolute left-0 top-0" alt="" />
                                <img src="./../images/discord.svg" className="-skew-x-[40deg] relative z-[2] w-[36px] ss:w-[52px]" alt="" />
                            </a>
                            <div className="w-[271px] h-[48px] xs:h-[64px] -ml-[14rem] bg-shadow-btn skew-x-[40deg]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default section6