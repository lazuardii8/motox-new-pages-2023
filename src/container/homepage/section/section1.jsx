import React, { Fragment } from "react";
import { DiscordIcon, DotIcon, DownIcon, LineBottomIcon, Logov2Icon, PlayIcon } from "../../../component/Svg/Svg";
import { Circ } from "gsap";


const Section1 = (props) => {
  return (
    <Fragment>

      <img src="./../images/sdasdfsa.svg" className="absolute left-0 bottom-0 md:hidden w-full pointer-events-none hminSm700:-bottom-[8rem]" alt="" />

      <img src="./../images/Vector (1).svg" className="absolute right-0 bottom-0 w-[168vh] hidden md:block" alt="" />

      <div className="absolute w-full bottom-0 left-0 h-[54px] md:h-[90px] flex items-center justify-center" style={{ backgroundImage: "url('./../images/Frame 706117.svg')" }}>
        <div className="container">
          <div className="flex items-center justify-center md:justify-end gap-[2.5rem] md:gap-4">
            <img src="./../images/ss (1).png" className="w-[40px] md:w-auto" alt="" />
            <img src="./../images/ss (3).png" className="w-[40px] md:w-auto" alt="" />
            <img src="./../images/ss (2).png" className="w-auto" alt="" />
          </div>
        </div>
      </div>

      <div className="container relative z-[2] h-full hidden md:block">
        <img src="./../images/Rectangle 22653.png" className="absolute w-[52vw] h-[56vh] hminlg700:w-[61vw] hminxl700:w-[46rem] hminxl900:w-[51rem] top-[54%] object-cover -translate-y-1/2 left-[27%] hminxl700:left-[24%]" alt="" />
        <div className="absolute bottom-0 left-[6rem] hminlg700:left-[9rem] lg:left-[13rem]">
          <img src="./../images/pose 5.png" className="w-[54vh]" alt="" />
        </div>
        <img src="./../images/Rectangle 22580.svg" className="absolute left-0 top-0" alt="" />

        <img src="./../images/Group 706118.png" className="absolute left-[2rem] lg:left-[3rem] top-[27vh] w-[15vh] lg:w-auto" alt="" />


        <div className="absolute right-[3rem] lg:right-[9rem] hminlg700:right-[3rem] hminxl900:right-[5rem] top-[18%] lg:top-[13%] hminlg700:top-[16%] hminxl900:top-[18%] text-center z-[10]">
          <div className="text-right inline-block">
            <h5 className="uppercase koulen text__48 text-white mb-2">WELCOME TO MOTOX</h5>
            <img src="./../images/RIDERS.svg" className="w-[55vh] lg:w-[66vh] hminlg700:w-[50vh] hminxl900:w-[50vh]" alt="" />
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="relative inline-block">
              <div className="absolute w-[271px] h-full -left-[3rem] bg-shadow-btn skew-x-[40deg] rotate-[180deg]"></div>
              <a href="#!" className="inline-block relative z-2 text-white koulen text__32 uppercase px-[36px] lg:px-[52px] h-[50px] lg:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                <img src="./../images/path24.png" className="absolute right-0 top-0" alt="" />
                <span className="-skew-x-[40deg] relative z-[2]">
                  join BETA
                </span>
              </a>
            </div>
            <div className="relative inline-block">
              <div className="absolute w-[271px] h-full -right-[3rem] bg-shadow-btn skew-x-[40deg]"></div>
              <a href="#!" className="inline-block relative z-2 text-white koulen text__32 uppercase px-[32px] h-[50px] lg:h-[64px] flex items-center justify-center bg-[#D21F33] border-[3px] border-solid !border-white skew-x-[40deg] relative overflow-hidden">
                <img src="./../images/Mask group.png" className="absolute left-0 top-0" alt="" />
                <img src="./../images/discord.svg" className="-skew-x-[40deg] relative z-[2] w-[52px]" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute z-[10] right-[9rem] hminlg700:right-[3rem] hminxl900:right-[5rem] bottom-[22vh]">
          <div className="flex items-center gap-3 pointer" onClick={props.toogleModal}>
            <img src="./../images/Group 706149.svg" className="w-[60px]" alt="" />
            <span className="koulen text__32 text-white">watch trailer</span>
          </div>
        </div>

      </div>
      <img src="./../images/Group 706219.svg" className="absolute left-0 bottom-0 w-[163vh] z-[2] pointer-events-none hidden md:block" alt="" />


      <div className="container relative md:hidden h-full">
        <div className="inline-block w-full h-full relative">

          <div className="absolute w-full top-[2rem] left-0 top-0">
            <div className="text-center relative z-[1] -mb-[5rem]">
              <img src="./../images/Group 1502.png" className="mx-auto" alt="" />
            </div>
            <div className="p-[1rem] relative w-full border border-solid !border-[#FFFFFF26]">
              <img src="./../images/rc (1).png" className="absolute left-0 top-0" alt="" />
              <img src="./../images/rc (4).png" className="absolute right-0 top-0" alt="" />
              <img src="./../images/rc (2).png" className="absolute left-0 bottom-0" alt="" />
              <img src="./../images/rc (3).png" className="absolute right-0 bottom-0" alt="" />
              <img src="./../images/Rectangle 22653.png" className="object-cover w-full h-[29vh] sm:h-[34vh]" alt="" />

              <div className="absolute left-1/2 -translate-x-1/2 bottom-[1.5rem]">
                <div className="btn-sosmed d-flex align-items-center justify-content-center position-relative z-2">
                  <img src="./../images/Vector (2).png" className="w-[12px]" alt="" />
                  <img src="./../images/Vector (2).png" className="w-[12px]" alt="" />
                  <a href="https://discord.gg/AhJz97vxsw" target="_blank" className="btn__clip !h-[40px] !w-[40px] !p-[6px]">
                    <DiscordIcon />
                  </a>
                  <a href="#!" className="btn__clip long koulen normal text__24 !h-[40px] !px-[20px] text-uppercase color__white ml-2 ml-lg-3"><span>buy now</span></a>
                  <img src="./../images/Vector (2).png" className="right rotate-[180deg] w-[12px]" alt="" />
                  <img src="./../images/Vector (2).png" className="right rotate-[180deg] w-[12px]" alt="" />
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center cursor-pointer gap-2" onClick={() => window.fullpage_api.moveTo(2)}>
                <img src="./../images/ic (1).svg" alt="" />
                <span className="koulen text-white text__16">About the Game</span>
              </div>
              <div className="flex items-center cursor-pointer gap-2" onClick={props.toogleModal}>
                <img src="./../images/ic (2).svg" alt="" />
                <span className="koulen text-white text__16">watch trailer</span>
              </div>
            </div>
          </div>

          <img src="./../images/Group 706218.svg" className="absolute bottom-[calc(54px_+_0.5rem)] w-[33vh] xx:w-[36vh] ss:w-[32vh] left-1/2 -translate-x-1/2" alt="" />

        </div>
      </div>



    </Fragment>
  );
};

export default Section1;
