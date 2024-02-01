import { SummaryButtonProps } from "@/types/types";

const SummaryButton = ({
  bgColor,
  textColor,
  children,
}: SummaryButtonProps) => {
  return (
    <button className={`rounded p-2 ${bgColor} ${textColor}`}>
      {children}
    </button>
  );
};

export default SummaryButton;
