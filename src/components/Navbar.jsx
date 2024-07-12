import SidebarIcon from "../assets/sidebarIcon.svg";
import Sidebar from "./Sidebar";
import  CustomNavLink from "./CustomNavLink";
import { useState } from "react";
import { navLinkElementsData } from "../data/landing/header";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="w-screen h-[61px] flex justify-between items-center lg:px-[128px] px-[16px] py-[15px] bg-[#FFFFFF] shadow-[0_4px_18px_0_rgba(0,0,0,0.07)]">
        <Logo />
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex w-[480px] h-[18px] gap-[28px]">
            {navLinkElementsData.map((element, index) => (
              <CustomNavLink
                to={element.href}
                width={element.width}
                key={index}
              >
                {element.text}
              </CustomNavLink>
            ))}
          </ul>
          <div className="flex gap-4 text-sm">
            <button onClick={()=>navigate("login")} className="bg-black text-white px-8 py-2 rounded-md">Login</button>
            <button onClick={()=>navigate("signup")} className="bg-black text-white px-8 py-2 rounded-md">Signup</button>
          </div>
        </div>
        

        <div className="block md:hidden">
          <div onClick={() => setOpen((prevState) => !prevState)}>
            <img src={SidebarIcon} alt="Sidebar Icon" />
          </div>
        </div>

        {open && (
          <Sidebar
            onClose={() => setOpen((prevState) => !prevState)}
            navLinkElementsData={navLinkElementsData}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
