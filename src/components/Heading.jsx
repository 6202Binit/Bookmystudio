const Heading = ({
  children,
  headingStyle,
  center = false,
  lineWidth = "103px",
}) => {
  return (
    <div
      className={`flex flex-col gap-1 ${
        center ? "items-center" : "sm:items-start items-center"
      } `}
      style={headingStyle}
    >
      <div className="sm:h-[42px] h-[31px] font-['IBM Plex Sans'] font-[500] sm:text-[32px] text-[24px] sm:leading-[41.6px] leading-[31.2px] text-[rgba(0,0,0,1)]">
        {children}
      </div>
      <div
        className="h-[3px] bg-[rgba(8,28,7,1)]"
        style={{ width: lineWidth }}
      ></div>
    </div>
  );
};

export default Heading;
