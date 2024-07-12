import MobileScreen from "../../../assets/mobileScreen.svg";
import MobileRing from "../../../assets/mobileRing.svg";
import BackShade1 from "../../../assets/backShade1.svg";
import BackShade2 from "../../../assets/backShade2.svg";
import DownloadIcon from "../../../assets/downloadIcon.svg";

import Button from "../../Button";

const Section1 = () => {
  const buttonStyle = {
    width: "202px",
    height: "54px",
    padding: "15px 17px",
    borderRadius: "15px",
    background: "rgba(52,52,52,1)",
  };

  return (
    <section>
      <div className="w-screen h-[1400px] lg:px-[128px] px-[16px] md:py-[80px] py-[50px] sm:mb-[0px] mb-[150px] flex justify-between gap-[40px]">
        {/* left */}
        <div>
          {/* top */}
          <div className="w-[750px] flex flex-col gap-[30px] items-start py-[40px] pb-[80px]">
            <div className="flex flex-col gap-[10px]">
              <div className="w-[242px] h-[31px] px-[11px] py-[6px] border rounded-[37px] bg-[rgba(13,48,10,0.61)]">
                <h3 className="w-[220px] h-[19px] font-['Inter'] text-[16px] leading-[19.36px] text-[rgba(255,255,255,1)]">
                  Welcome To Book My Studio
                </h3>
              </div>
              <div className="sm:w-[639px] w-[333px] sm:h-[154px] h-[116px] font-['Inter'] font-[600] sm:text-[64px] text-[48px] sm:leading-[77.45px] leading-[58px] text-[rgba(8,28,7,1)]">
                <h1>
                  Your{" "}
                  <span className="text-[rgba(49,91,48,1)]">
                    Creative Space
                  </span>{" "}
                  Awaits
                </h1>
              </div>
            </div>

            <div className="sm:w-[627px] w-[313px] sm:h-[130px] h-[168px] font-['IBM Plex Sans'] font-[500] sm:text-[20px] text-[16px] sm:leading-[26px] leading-[20px] text-[rgba(111,111,111,1)]">
              Are you an artist, photographer, musician, dancer, or anyone with
              a passion for creativity? We understand the importance of the
              right space to bring your artistic vision to life. That's why
              we're thrilled to welcome you to Studio on Rent, your gateway to a
              world of limitless possibilities.
            </div>

            <Button buttonStyle={buttonStyle}>
              <img src={DownloadIcon} alt="Download Icon" />
              <div className="w-[140px] h-[24px] font-['Inter'] font-[500] text-[20px] leading-[24px] text-[rgba(255,255,255,1)]">
                Download App
              </div>
            </Button>
          </div>
        </div>
        {/* right */}
        <div className="relative flex ">
          <div className="2xl:block hidden relative z-10">
            <div className="w-[550px] h-[865px] flex justify-end">
              <img src={MobileScreen} alt="Mobile screen" />
            </div>
            <div className="absolute top-[250px] -right-[45px]">
              <img src={MobileRing} alt="Ring on mobile screen" />
            </div>
          </div>
          <div className="absolute 2xl:top-[170px] top-[300px] 2xl:right-[-50px] right-[100px] w-[749px] h-[849px]">
            <img src={BackShade1} alt="back shade" />
          </div>
          <div className="absolute w-[1002px] top-[850px] h-[961px]">
            <img src={BackShade2} alt="back shade" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
