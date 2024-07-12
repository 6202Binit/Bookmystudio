import { useNavigate } from "react-router-dom";
import RightArrow from "../assets/rightArrow.svg";
import CustomNavLink from "./CustomNavLink"

const Sidebar = ({ onClose, navLinkElementsData }) => {
  const navigate = useNavigate()
  return (
    <div className="fixed top-0 right-0 z-50 h-full sm:w-[500px] w-[250px] bg-[#FFFFFF] shadow-[0_4px_18px_0_rgba(0,0,0,0.07)]">
      <div
        className="absolute top-[15px] left-[16px] w-[24px] h-[24px]"
        onClick={onClose}
      >
        <img src={RightArrow} alt="" className="text-[#fff]" />
      </div>

      <div className="h-screen flex flex-col justify-center items-center gap-5">
        {navLinkElementsData.map((elementData, index) => (
          <CustomNavLink
            to={elementData.href}
            width={elementData.width}
            key={index}
            onClose={onClose}
          >
            {elementData.text}
          </CustomNavLink>
          
        ))}
        <div className="flex flex-col gap-4 text-sm">
            <button onClick={()=>navigate("login")} className="bg-black text-white px-8 py-2 rounded-md">Login</button>
            <button onClick={()=>navigate("signup")} className="bg-black text-white px-8 py-2 rounded-md">Signup</button>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
