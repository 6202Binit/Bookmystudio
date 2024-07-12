import HomeLogo from "../assets/homeLogo.svg";
import DropdownArrow from "../assets/dropdownArrow.svg";
import {
  usefullLinkData,
  policiesData,
  helpData,
} from "../data/landing/footer";
import { useState } from "react";

const LastSection = () => {
  const [height, setHeight] = useState(275);
  const [usefullLinkDropdown, setUsefullLinkDropdown] = useState(false);
  const [policiesDropdown, setPoliciesDropdown] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);

  return (
    <>
      <div className="hidden lg:block">
        <div className="w-screen h-[318px] flex justify-between py-[72px] px-[147px] bg-[rgba(0,0,0,1)]">
          <div className="w-[92px] h-[31px] flex gap-[5px]">
            <div className="w-[30px] h-[30px]">
              <img src={HomeLogo} alt="" />
            </div>
            <div className="w-[51px] h-[31px] text-[rgba(255,255,255,1)]">
              <div className="w-[43px] h-[12px] font-['Inter'] font-[700] text-[10px] leading-[12.1px] text-left">
                Book My
              </div>
              <div className="w-[51px] h-[19px] font-['Inter'] font-[700] text-[16px] leading-[19.36px] text-left">
                Studio
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="w-[115px] h-[26px] font-['IBM Plex Sans'] text-[20px] font-[700] leading-[26px] text-left text-[rgba(255,255,255,1)]">
              Useful Links
            </div>
            {usefullLinkData.map((data, index) => (
              <div
                key={index}
                className={`${data.width} py-3 h-[18px] font-['IBM Plex Sans'] text-[14px] font-[500] leading-[18.2px] text-left text-[rgba(255,255,255,1)] cursor-pointer`}
              >
                {data.text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="w-[74px] h-[26px] font-['IBM Plex Sans'] text-[20px] font-[700] leading-[26px] text-left text-[rgba(255,255,255,1)]">
              Policies
            </div>
            {policiesData.map((data, index) => (
              <div
                key={index}
                className={`${data.width} py-3 h-[18px] font-['IBM Plex Sans'] text-[14px] font-[500] leading-[18.2px] text-left text-[rgba(255,255,255,1)] cursor-pointer`}
              >
                {data.text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="w-[44px] h-[26px] font-['IBM Plex Sans'] text-[20px] font-[700] leading-[26px] text-left text-[rgba(255,255,255,1)]">
              Help
            </div>
            {helpData.map((data, index) => (
              <div
                key={index}
                className={`${data.width} py-3 h-[18px] font-['IBM Plex Sans'] text-[14px] font-[500] leading-[18.2px] text-left text-[rgba(255,255,255,1)] cursor-pointer`}
              >
                {data.text}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center w-screen h-[49px] bg-[rgba(42,42,42,1)]">
          <div className="w-[322px] h-[19px] font-['Inter'] font-[400] text-[16px] leading-[19.36px] text-center text-[rgba(255,255,255,1)]">
            © 2023 Bookmystudio. All rights reserved.
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div
          className="w-screen flex flex-col justify-between items-center py-[24px] px-[16px] bg-[rgba(0,0,0,1)]"
          style={{ height: height }}
        >
          <div className="w-[342px] h-[31px] flex gap-[5px]">
            <div className="w-[30px] h-[30px]">
              <img src={HomeLogo} alt="" />
            </div>
            <div className="w-[51px] h-[31px] text-[rgba(255,255,255,1)]">
              <div className="w-[43px] h-[12px] font-['Inter'] font-[700] text-[10px] leading-[12.1px] text-left">
                Book My
              </div>
              <div className="w-[51px] h-[19px] font-['Inter'] font-[700] text-[16px] leading-[19.36px] text-left">
                Studio
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-[345px] h-[21px] flex justify-between items-center cursor-pointer"
              onClick={() =>
                setUsefullLinkDropdown((prevState) => {
                  !prevState
                    ? setHeight(height + 135)
                    : setHeight(height - 135);
                  return !prevState;
                })
              }
            >
              <div className="w-[114px] h-[21px]">
                <div className="w-[91px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-left text-[rgba(255,255,255,1)]">
                  Useful Links
                </div>
              </div>
              <div>
                <img src={DropdownArrow} alt="" />
              </div>
            </div>

            {usefullLinkDropdown && (
              <div className="flex flex-col gap-[5px] pt-[5px]">
                {usefullLinkData.map((data, index) => (
                  <div
                    key={index}
                    className="border w-[345px] h-[21px] flex justify-between items-center"
                  >
                    <div className="h-[18px] font-['IBM Plex Sans'] text-[14px] font-[500] leading-[18.2px] text-left text-[rgba(255,255,255,1)] cursor-pointer pl-[5px]">
                      {data.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div
              className="w-[345px] h-[21px] flex justify-between items-center cursor-pointer"
              onClick={() =>
                setPoliciesDropdown((prevState) => {
                  !prevState
                    ? setHeight(height + 110)
                    : setHeight(height - 110);
                  return !prevState;
                })
              }
            >
              <div className="w-[114px] h-[21px]">
                <div className="w-[91px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-left text-[rgba(255,255,255,1)]">
                  Policies
                </div>
              </div>
              <div>
                <img src={DropdownArrow} alt="" />
              </div>
            </div>

            {policiesDropdown && (
              <div className="flex flex-col gap-[5px] pt-[5px]">
                {policiesData.map((data, index) => (
                  <div
                    key={index}
                    className="border w-[345px] h-[21px] flex justify-between items-center"
                  >
                    <div className="h-[18px] font-['IBM Plex Sans'] text-[14px] font-[500] leading-[18.2px] text-left text-[rgba(255,255,255,1)] cursor-pointer pl-[5px]">
                      {data.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div
              className="w-[345px] h-[21px] flex justify-between items-center cursor-pointer"
              onClick={() =>
                setHelpDropdown((prevState) => {
                  !prevState ? setHeight(height + 60) : setHeight(height - 60);
                  return !prevState;
                })
              }
            >
              <div className="w-[114px] h-[21px]">
                <div className="w-[91px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-left text-[rgba(255,255,255,1)]">
                  Help
                </div>
              </div>
              <div>
                <img src={DropdownArrow} alt="" />
              </div>
            </div>

            {helpDropdown && (
              <div className="flex flex-col gap-[5px] pt-[5px]">
                {helpData.map((data, index) => (
                  <div
                    key={index}
                    className="border w-[345px] h-[21px] flex justify-between items-center"
                  >
                    <div className="h-[18px] font-['IBM Plex Sans'] text-[14px] font-[500] leading-[18.2px] text-left text-[rgba(255,255,255,1)] cursor-pointer pl-[5px]">
                      {data.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div className="w-[114px] h-[21px]">
              <div className="w-[91px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-left text-[rgba(255,255,255,1)]"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-screen h-[45px] bg-[rgba(42,42,42,1)]">
          <div className="w-[241px] h-[15px] font-['Inter'] font-[400] text-[12px] leading-[14.52px] text-center text-[rgba(255,255,255,1)]">
            © 2023 Bookmystudio. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default LastSection;
