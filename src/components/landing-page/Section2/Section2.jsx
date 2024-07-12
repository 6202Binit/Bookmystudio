import SearchIcon from "../../../assets/searchIcon.svg";
import UsersIcon from "../../../assets/usersIcon.svg";
import EditIcon from "../../../assets/editIcon.svg";
import BookOpenIcon from "../../../assets/bookOpenIcon.svg";
import RightDirectionArrow from "../../../assets/rightDirectionArrow.svg";
import BottomDirectionArrow from "../../../assets/bottomDirectionArrow.svg";
import LeftDirectionArrow from "../../../assets/leftDirectionArrow.svg";
import RightDownDirectionArrow from "../../../assets/rightDownDirectionArrow.svg";
import LeftDownDirectionArrow from "../../../assets/leftDownDirectionArrow.svg";
import Card from "./Card";
import Heading from "../../../components/Heading";

const Section2 = () => {
  return (
    <div className="relative sm:top-[-1470px] top-[-1620px] ">
      <div
        id="howItWorks"
        className="absolute sm:top-[750px] top-[700px] lg:left-[128px] sm:left-[15px] left-[11px] mr-[15px] flex flex-col gap-[40px]"
      >
        <Heading headingStyle={{ width: "340px" }}>How It Works</Heading>
        <div className="relative">
          <div className="relative flex sm:flex-row flex-col sm:gap-[0px] gap-[20px]">
            <div>
              <Card
                icon={SearchIcon}
                title={"Search"}
                description={
                  "Browse through a diverse range of studios tailored to your needs."
                }
              />
            </div>
            <div className="sm:flex items-center hidden">
              <img src={RightDirectionArrow} alt="" />
            </div>
            <div className="absolute top-[126px] left-[214px] sm:hidden block w-[81px] h-[66px]">
              <img src={RightDownDirectionArrow} alt="" />
            </div>
            <div className="sm:ml-[0px] ml-[128px]">
              <Card
                icon={UsersIcon}
                title={"Connect"}
                description={
                  "Chat with studio owners or agents to ask questions and request tours."
                }
              />
            </div>
          </div>
          <div className="ml-[390px] sm:block hidden">
            <img src={BottomDirectionArrow} alt="" />
          </div>
          <div className="absolute top-[308px] left-[45px] sm:hidden block w-[81px] h-[66px]">
            <img src={LeftDownDirectionArrow} alt="" />
          </div>
          <div className="relative flex sm:flex-row flex-col sm:gap-[0px] gap-[20px] sm:pt-[0px] pt-[20px]">
            <div>
              <Card
                icon={EditIcon}
                title={"Create"}
                description={
                  "Unleash your creativity in your new studio space."
                }
              />
            </div>
            <div className="sm:flex items-center hidden">
              <img src={LeftDirectionArrow} alt="" />
            </div>
            <div className="absolute top-[145px] left-[214px] sm:hidden block w-[81px] h-[66px]">
              <img src={RightDownDirectionArrow} alt="" />
            </div>
            <div className="sm:ml-[0px] ml-[128px]">
              <Card
                icon={BookOpenIcon}
                title={"Book"}
                description={
                  "Securely book your chosen studio for your preferred date and time."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
