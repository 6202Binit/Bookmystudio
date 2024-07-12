import PlayStore from "../../../assets/playStore.svg";
import AppleLogo from "../../../assets/appleLogo.svg";

const Section7 = () => {
  return (
    <div className="w-screen lg:h-[298px] h-[457px] pt-[64px] pr-[133px] pb-[64px] pl-[133px] flex lg:flex-row flex-col justify-between items-center bg-[rgba(8,28,7,1)]">
      <div className="lg:w-[560px] w-[361px] lg:h-[130px] h-[161px] flex flex-col lg:items-start items-center gap-[10px]">
        <div className="w-[214px] h-[27px] pt-[4px] pr-[18px] pb-[5px] pl-[14px] border rounded-[28px] bg-[rgba(255,255,255,1)]">
          <div className="w-[182px] h-[18px] font-['IBM Plex Sans'] text-[14px] font-[600] leading-[18.2px] text-left">
            Creativity at Your Fingertips
          </div>
        </div>
        <div className="lg:w-[380px] w-[367px] lg:h-[31px] h-[26px] font-['IBM Plex Sans'] lg:text-[24px] text-[20px] font-[600] lg:leading-[31.2px] leading-[26px] lg:text-left text-center text-[rgba(255,255,255,1)]">
          Download the Bookmystudio App
        </div>
        <div className="lg:w-[551px] w-[344px] lg:h-[54px] h-[90px] font-['IBM Plex Sans'] text-[14px] font-[500] leading-[18.2px] lg:text-left text-center text-[rgba(239,239,239,1)]">
          Take your studio booking and content creation experience to the next
          level with the StudioBooker app. Convenient, fast, and easy to use –
          now you can manage your bookings and create stunning content on the
          go!
        </div>
      </div>
      <div className="w-[230px] h-[135px] flex flex-col gap-[23px]">
        <div className="flex items-center gap-[8px] w-[230px] h-[56px] py-[13px] px-[15px] border rounded-[15px] bg-[rgba(255,255,255,1)] cursor-pointer">
          <div className="w-[30px] h-[30px]">
            <img src={PlayStore} alt="" />
          </div>
          <div className="w-[161px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-left text-[rgba(52,52,52,1)]">
            Download for android
          </div>
        </div>
        <div className="flex items-center gap-[8px] w-[194px] h-[56px] py-[13px] px-[15px] rounded-[15px] bg-[rgba(14,14,14,1)] cursor-pointer lg:ml-[35px] ml-[20px]">
          <div className="w-[30px] h-[30px]">
            <img src={AppleLogo} alt="" />
          </div>
          <div className="w-[125px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-[rgba(193,193,193,1)]">
            Download for ios
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
