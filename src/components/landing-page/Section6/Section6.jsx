import BtnRightArrow from "../../../assets/btnRightArrow.svg";
import Mail from "../../../assets/mail.svg";
import Phone from "../../../assets/phone.svg";
import Location from "../../../assets/location.svg";
import InputBox  from "../../InputBox";
import Button from "../../Button";
import Heading from "../../Heading";

const Section6 = () => {
  return (
    <div
      id="contactUs"
      className="w-screen lg:px-[150px] sm:mt-[0px] 2xl:mb-[100px] sm:mb-[800px] mb-[650px]"
    >
      <div className="flex flex-col gap-[40px] sm:ml-[15px] lg:ml-[0px]">
        <div className="2xl:w-[1250px] xl:w-[1080px] lg:w-[750px] w-[365px] flex justify-center">
          <Heading headingStyle={{ width: "360px" }} center={true}>
            Contact Us
          </Heading>
        </div>
        <div className="bg-[white] flex flex-wrap sm:gap-[65px] 2xl:w-[1200px] xl:w-[1040px] lg:w-[750px] w-[400px] lg:h-[650px] h-[465px] lg:border sm:rounded-[30px] lg:shadow-[0px_4px_26.5px_0px_rgba(0,0,0,0.1)]">
          {/* left */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center lg:w-[419px] w-[375px] lg:h-[217px] h-[138px] pt-[70px] lg:pr-[100px] pr-[50px] pb-[69px] pl-[53px] border rounded-br-[72px] bg-[rgba(8,28,7,1)]">
              <div className="w-[78px] h-[78px]">
                <img src={Mail} alt="Mail logo" />
              </div>
              <div className="flex flex-col">
                <div className="w-[79px] h-[18px] font-['IBM Plex Sans'] text-[14px] font-[400] leading-[18.2px] text-left text-[rgba(255,255,255,0.74)]">
                  Our Email Id
                </div>
                <div className="w-[178px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-left text-[rgba(255,255,255,0.91)]">
                  studionrent@gmail.com
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center lg:w-[528px] w-[375px] lg:h-[216px] h-[156px] pt-[70px] lg:pr-[260px] pr-[105px] pb-[69px] pl-[53px] border rounded-r-[72px] bg-[rgba(13,48,10,0.61)]">
              <div className="w-[78px] h-[78px]">
                <img src={Phone} alt="Phone logo" />
              </div>
              <div className="flex flex-col">
                <div className="w-[125px] h-[18px] font-['IBM Plex Sans'] text-[14px] font-[400] leading-[18.2px] text-left text-[rgba(255,255,255,0.74)]">
                  Our Phone Number
                </div>
                <div className="w-[96px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-left text-[rgba(255,255,255,0.91)]">
                  9056472346
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center lg:w-[528px] w-[375px] lg:h-[217px] h-[167px] pt-[70px] lg:pr-[100px] pr-[0px] pb-[69px] pl-[53px] border rounded-tr-[72px] bg-[rgba(26,26,26,0.94)]">
              <div className="w-[78px] h-[78px]">
                <img src={Location} alt="Location logo" />
              </div>
              <div className="flex flex-col w-[230px] break-words">
                <div className="w-[78px] h-[18px] font-['IBM Plex Sans'] text-[14px] font-[400] leading-[18.2px] text-left text-[rgba(255,255,255,0.74)]">
                  Our Address
                </div>
                <div className="lg:w-[288px] w-[200px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[600] leading-[20.8px] text-left text-[rgba(255,255,255,0.91)] break-words">
                  123 Creative Street, Country, ZIP Code
                </div>
              </div>
            </div>
          </div>
          {/* mid */}
          <div className="hidden 2xl:block w-[1px] h-[597px] bg-[rgba(217,217,217,1)] mt-[25px]"></div>
          {/* right */}
          <div className="flex flex-col gap-[25px] pt-[50px] bg-[white] 2xl:w-[0px] xl:w-[1040px] lg:w-[750px] sm:w-[410px] w-[375px] lg:h-[650px] h-[650px] 2xl:border-none border sm:rounded-[30px] shadow-[0px_4px_26.5px_0px_rgba(0,0,0,0.1)] 2xl:pl-[0px] sm:pl-[25px] pl-[12px]">
            <div>
              <div className="lg:w-[93px] w-[105px] h-[20px] font-['IBM Plex Sans'] text-[15px] font-[500] leading-[19.5px] text-center text-[rgba(8,28,7,1)]">
                Let’s Connect
              </div>
              <h1 className="lg:w-[261px] w-[265px] h-[31px] font-['IBM Plex Sans'] text-[24px] font-[500] leading-[31.2px] text-center">
                Send your Queries to us
              </h1>
            </div>
            <div className="flex flex-col gap-[20px]">
              <InputBox
                inputStyle={{
                  height: "69px",
                  paddingBottom: "25px",
                }}
                placeholder={"What is Your Name?"}
              />
              <InputBox
                inputStyle={{
                  height: "69px",
                  paddingBottom: "25px",
                }}
                placeholder={"Enter Your Email"}
              />
              <InputBox
                inputStyle={{
                  height: "193px",
                  paddingBottom: "149px",
                }}
                placeholder={"Leave a message for us"}
              />
            </div>
            <div className="hidden lg:block">
              <Button
                buttonStyle={{
                  width: "476px",
                  height: "69px",
                  padding: "23px 24px 25px 32px",
                  borderRadius: "19px",
                  borderColor: "rgba(211,211,211,1)",
                  background: "rgba(8,28,7,1)",
                }}
              >
                <div className="w-[38px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[500] leading-[20.8px] text-left text-[rgba(255,255,255,1)]">
                  Send
                </div>
                <div>
                  <img src={BtnRightArrow} alt="" />
                </div>
              </Button>
            </div>
            <div className="lg:hidden">
              <Button
                buttonStyle={{
                  width: "348px",
                  height: "69px",
                  padding: "23px 24px 25px 32px",
                  borderRadius: "19px",
                  borderColor: "rgba(211,211,211,1)",
                  background: "rgba(8,28,7,1)",
                }}
              >
                <div className="w-[38px] h-[21px] font-['IBM Plex Sans'] text-[16px] font-[500] leading-[20.8px] text-left text-[rgba(255,255,255,1)]">
                  Send
                </div>
                <div>
                  <img src={BtnRightArrow} alt="" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
