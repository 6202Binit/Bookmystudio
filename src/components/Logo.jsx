import { useNavigate } from "react-router-dom";
import LandingLogo from "../assets/landingLogo.svg";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-[86px] h-[31px] flex gap-[5px] cursor-pointer"
      onClick={() => navigate("/")}
    >
      <div>
        <img src={LandingLogo} alt="Landing Logo" />
      </div>
      <div className="w-[51px] h-[31px] font-['Inter']">
        <div className="w-[43px] h-[12px] font-[700] text-[10px] leading-[12px] text-[#393939]">
          Book My
        </div>
        <div className="w-[51px] h-[19px] font-[700] text-[16px] leading-[19px] text-[#315B30]">
          Studio
        </div>
      </div>
    </div>
  );
};

export default Logo;
