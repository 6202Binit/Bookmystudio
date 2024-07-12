const TestimonialCard = ({ avatar, name, review, date }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[30px] 2xl:w-[373px] w-[347px] h-[522px] border rounded-[17px] shadow-[1px_2px_2px_0px_rgba(0,0,0,0.09)] bg-[rgba(255,255,255,1)]">
      <div className="flex flex-col gap-[15px]">
        <div className="w-[100px] h-[100px]">
          <img src={avatar} alt="" />
        </div>
        <div className="w-[121px] h-[34px] font-['Inter'] text-[28px] font-[700] leading-[33.89px] text-left text-[rgba(52,52,52,1)]">
          {name}
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[-25px] left-[-25px] w-[22px] h-[42px] font-['IBM Plex Sans'] text-[48px] font-[300] leading-[62.4px] text-[rgba(8,28,7,1)] italic">
          “
        </div>
        <div className="w-[259px] h-[213px] font-['IBM Plex Sans'] text-[20px] font-[300] leading-[26px] text-[rgba(52,52,52,1)] italic">
          {review}
        </div>
      </div>
      <div className="flex items-center gap-[5px]">
        <div className="w-[168px] h-[0px] border rounded-[1px] border-dotted border-[rgba(89,89,89,1)]"></div>
        <div className="w-[81px] h-[18px] font-['IBM Plex Sans'] text-[14px] font-[600] leading-[18.2px] text-[rgba(13,48,10,0.53)]">
          {date}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
