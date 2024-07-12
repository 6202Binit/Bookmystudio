import { useState, useEffect } from "react";
import { testimonialCardData } from "../../../data/landing/PageContainer/Section5";
import Heading from "../../Heading";
import TestimonialCard from "./TestimonialCard";

const Section5 = () => {
  const [scrollState, setScrollState] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 1020) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPagination = 5; // Total number of pagination controls

  return (
    <div
      id="testimonials"
      className="2xl:w-[1518px] xl:w-[1318px] lg:w-[1000px] sm:w-[385px] w-full flex flex-col 2xl:gap-[60px] lg:gap-[50px] gap-[40px] items-center sm:mb-[100px] mb-[80px] lg:ml-[20px]"
    >
      <div>
        <Heading headingStyle={{ width: "360px" }} center={true}>
          Testimonials
        </Heading>
      </div>
      <div className="overflow-hidden 2xl:w-[1200px] xl:w-[1100px] lg:w-[760px] w-[350px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${scrollState * (100 / itemsPerPage)}%)`,
          }}
        >
          {testimonialCardData.map((cardData, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${
                itemsPerPage === 1
                  ? "w-full"
                  : itemsPerPage === 2
                  ? "w-1/2"
                  : "w-1/3"
              }`}
            >
              <TestimonialCard
                avatar={cardData.avatar}
                name={cardData.name}
                review={cardData.review}
                date={cardData.date}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[108px] h-[12px] flex gap-[5px]">
        {[...Array(totalPagination)].map((_, index) => (
          <div
            key={index}
            className={
              scrollState === index
                ? "w-[29px] h-[12px] border rounded-[21px] bg-[rgba(8,28,7,1)] cursor-pointer transition-all"
                : "w-[12px] h-[12px] border rounded-[21px] bg-[rgba(230,230,230,1)] cursor-pointer"
            }
            onClick={() => setScrollState(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
