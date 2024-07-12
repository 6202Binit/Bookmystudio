import Card from "./Card";
import Heading from "../../../components/Heading";
import { cardData } from "../../../data/landing/PageContainer/Section4";

const Section4 = () => {
  return (
    <div
      id="features"
      className=" w-full 2xl:h-[580px] lg:h-[500px] h-[600px] flex flex-col 2xl:gap-[80px] gap-[50px] items-center justify-center lg:bg-[rgba(250,251,254,1)] 2xl:px-[128px] px-[9px] lg:mt-[128px] mt-[78px] pb-[30px] mb-[100px] lg:pt-[0px] pt-[50px]"
    >
      <div className="sm:ml-[60px]">
        <Heading
          headingStyle={{ width: "425px" }}
          center={true}
          lineWidth="215px"
        >
          Why choose BookmyStudio ?
        </Heading>
      </div>
      <div className="flex lg:flex-row flex-col justify-between w-full gap-[11px]">
        {cardData.map((data, index) => {
          return (
            <Card
              key={index}
              logo={data.logo}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
