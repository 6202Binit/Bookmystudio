const Card = ({ logo, title, description }) => {
  return (
    <div className="w-full 2xl:h-[311px] lg:h-[300px] h-[155px] flex 2xl:flex-col lg:flex-col flex-row items-center 2xl:justify-normal justify-center gap-[10px] 2xl:px-[43px] px-[21px] 2xl:py-[34px] py-[0px] border rounded-[18px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.09)]">
      <div className="w-[100px] h-[100px]">
        <img src={logo} alt="" />
      </div>
      <div className="2xl:w-[299px] w-[212px] 2xl:h-[130px] h-[126px] flex flex-col lg:flex-col gap-[10px]">
        <h1 className="2xl:w-[299px] w-[212px] 2xl:h-[31px] h-[21px] font-['IBM Plex Sans'] 2xl:text-[24px] text-[16px] font-[500] 2xl:leading-[31.2px] leading-[20.8px] lg:text-center text-left">
          {title}
        </h1>
        <p className="2xl:w-[299px] w-[209pxpx] 2xl:h-[90px] h-[96px] font-['IBM Plex Sans'] 2xl:text-[14px] text-[12px] font-[500] 2xl:leading-[18.2px] leading-[15.6px] lg:text-center text-left text-[rgba(81,81,81,1)]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
