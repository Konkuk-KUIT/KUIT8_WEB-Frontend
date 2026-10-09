const SimpleInfo = ({ title, description }) => {
  return (
    <div className="flex items-start gap-3 pl-6 pr-[152px] pt-[9px] pb-px text-[#4E5968] text-[15px] not-italic font-medium leading-[normal]">
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
};

export default SimpleInfo;
