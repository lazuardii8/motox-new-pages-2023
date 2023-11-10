import React, { Fragment } from "react";
import { DiscordIcon, DotIcon, DownIcon, LineBottomIcon, Logov2Icon, PlayIcon } from "../../../component/Svg/Svg";
import { Circ } from "gsap";


const Section1 = (props) => {
  return (
    <Fragment>

      <img src="./../images/Vector (1).svg" className="absolute right-0 bottom-0 w-[168vh]" alt="" />

      <div className="absolute w-full bottom-0 left-0 h-[90px] flex items-center justify-center" style={{ backgroundImage: "url('./../images/Frame 706117.svg')" }}>
        <div className="container">
          <div className="flex items-center justify-end gap-4">
            <img src="./../images/ss (1).png" alt="" />
            <img src="./../images/ss (3).png" alt="" />
            <img src="./../images/ss (2).png" alt="" />
          </div>
        </div>
      </div>

      <div className="container relative z-[2] h-full">
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
      <img src="./../images/Group 706219.svg" className="absolute left-0 bottom-0 w-[163vh] z-[2] pointer-events-none" alt="" />

    </Fragment>
  );
};

export default Section1;
