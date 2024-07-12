const Card = ({ icon, title, description }) => {
  return (
    <div className="relative z-10 w-[214px] sm:h-[214px] h-[170px] flex flex-col justify-around items-center border rounded-[21px] bg-[rgba(255,255,255,1)] shadow-[0px_4px_24.2px_9px_rgba(13,48,10,0.08)] py-[10px]">
      <div className="w-[175px] flex items-center gap-2">
        <div className="w-[50px] h-[50px] bg-[rgba(13,48,10,0.1)] rounded-[50px] shadow-[0px_0px_24px_0px_rgba(13, 48, 10, 0.16)] inset-1">
          <div className="w-[50px] h-[50px] flex justify-center items-center">
            <img src={icon} alt="Search Icon" />
          </div>
        </div>
        <div className="sm:w-[64px] w-[51px] sm:h-[26px] h-[21px] font-[IBM Plex Sans] sm:text-[20px] text-[16px] font-[500] sm:leading-[26px] leading-[20px] text-[rgba(8,28,7,1)]">
          {title}
        </div>
      </div>

      <div className="sm:w-[167px] w-[173px] sm:h-[104px] h-[84px] font-['IBM Plex Sans'] sm:text-[16px] text-[14px] font-[500] leading-[26px] text-[rgba(52,52,52,1)]">
        {description}
      </div>
    </div>
  );
};

export default Card;
