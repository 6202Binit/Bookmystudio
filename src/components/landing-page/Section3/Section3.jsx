import { useState } from "react";
import MicTablePhoto from "../../../assets/micTablePhoto.svg";
import Heading from "../../Heading";

const Section3 = () => {
  const [state, setState] = useState(true);

  return (
    <div id="aboutUs" className="w-screen lg:px-[128px] sm:mt-[0px]">
      <div className="flex flex-col gap-[40px] sm:ml-[15px] lg:ml-[0px]">
        <Heading headingStyle={{ width: "360px" }}>About Us</Heading>
        <div className="relative bg-[white] flex justify-between gap-[25px] w-full sm:h-[633px] h-[800px] border sm:rounded-[27px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.09)] sm:pl-[40px] pl-[20px] pt-[40px]">
          {/* left */}
          <div>
            <div className="flex relative sm:left-[0px] left-[15px]">
              <div
                className={`absolute z-10 w-[170px] h-[43px] px-[11px] py-[12px] border rounded-[37px] ${
                  state
                    ? "bg-[rgba(13,48,10,0.97)] text-[rgba(255,255,255,1)]"
                    : "bg-[rgba(238,241,246,1)] text-[rgba(8,28,7,1)]"
                } cursor-pointer`}
                onClick={() => setState(true)}
              >
                <div className="w-[148px] h-[19px] font-['Inter'] text-[16px] font-[600] leading-[19.36px]">
                  Mission and values
                </div>
              </div>
              <div
                className={`absolute left-[110px] w-[184px] h-[43px] pl-[76px] pr-[27px] py-[12px] border rounded-[34px] ${
                  state
                    ? "bg-[rgba(238,241,246,1)] text-[rgba(8,28,7,1)]"
                    : "bg-[rgba(13,48,10,0.97)] text-[rgba(255,255,255,1)] z-20"
                } cursor-pointer`}
                onClick={() => setState(false)}
              >
                <div className="w-[81px] h-[19px] font-['Inter'] text-[16px] font-[600] leading-[19.36px]">
                  Our Vision
                </div>
              </div>
            </div>

            {state ? (
              <div className="relative top-[70px] flex flex-col gap-[35px] sm:w-[550px] w-[350px] font-['IBM Plex Sans'] text-[16px] leading-[20.8px] text-[rgba(101,101,101,1)]">
                <div className="sm:w-[517px] w-[342px] sm:h-[105px] h-[147px] font-[500]">
                  At "Studio on Rent," our mission is to empower creativity by
                  providing artists, photographers, musicians, dancers, and all
                  creative individuals with a platform that connects them to the
                  perfect studio spaces. We are driven by a set of core values
                  that guide our every decision and action:
                </div>
                <div className="sm:w-[519px] w-[338px] sm:h-[42px] h-[63px] sm:font-[700] font-[600]">
                  <span className="text-[rgba(8,28,7,1)]">1. Creativity:</span> We
                  celebrate and champion the limitless possibilities of
                  creativity, embracing the unique visions of every artist.
                </div>
                <div className="sm:w-[517px] w-[337px] sm:h-[63px] h-[84px] sm:font-[700] font-[600]">
                  <span className="text-[rgba(8,28,7,1)]">2. Accessibility:</span>{" "}
                  We believe that access to inspiring studio spaces should be easy
                  and affordable for all, removing barriers and enabling more
                  people to express themselves.
                </div>
                <div className="sm:w-[519px] w-[338px] sm:h-[42px] h-[63px] sm:font-[700] font-[600]">
                  <span className="text-[rgba(8,28,7,1)]">3. Innovation:</span> We
                  continuously innovate to simplify the studio booking process,
                  making it more convenient and enjoyable for our users.
                </div>
                <div className="sm:w-[519px] w-[345px] sm:h-[42px] h-[63px] sm:font-[700] font-[600]">
                  <span className="text-[rgba(8,28,7,1)]">4. Community:</span> We
                  foster a supportive and collaborative community where creative
                  minds can connect, share, and thrive together.
                </div>
              </div>
            ) : (
              <div className="relative top-[70px] flex flex-col gap-[35px] sm:w-[550px] w-[350px] font-['IBM Plex Sans'] text-[16px] leading-[20.8px] text-[rgba(101,101,101,1)]">
                <div className="sm:w-[517px] w-[342px] sm:h-[105px] h-[147px] font-[500]">
                  Our vision is to become the leadinSg platform for connecting creative individuals with inspiring studio spaces. We envision a world where every artist has the opportunity to realize their creative potential and share their unique talents with the world.
                </div>
                <div className="sm:w-[519px] w-[338px] sm:h-[42px] h-[63px] sm:font-[700] font-[600]">
                  <span className="text-[rgba(8,28,7,1)]">1. Empowerment:</span> We empower artists by providing access to resources and opportunities that enable them to pursue their passions.
                </div>
                <div className="sm:w-[517px] w-[337px] sm:h-[63px] h-[84px] sm:font-[700] font-[600]">
                  <span className="text-[rgba(8,28,7,1)]">2. Innovation:</span> We are committed to continuous innovation, ensuring that our platform remains at the forefront of the industry.
                </div>
                <div className="sm:w-[519px] w-[338px] sm:h-[42px] h-[63px] sm:font-[700] font-[600]">
                  <span className="text-[rgba(8,28,7,1)]">3. Excellence:</span> We strive for excellence in everything we do, from the quality of our platform to the level of service we provide.
                </div>
                <div className="sm:w-[519px] w-[345px] sm:h-[42px] h-[63px] sm:font-[700] font-[600]">
                  <span className="text-[rgba(8,28,7,1)]">4. Community:</span> We build and nurture a vibrant community of artists who inspire and support one another.
                </div>
              </div>
            )}
          </div>
          {/* right */}
          <div className="hidden lg:flex pb-[30px]">
            <img src={MicTablePhoto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
