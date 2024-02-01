import React from "react";
import TrendLabel from "../../Comun/TrendLabel/TrendLabel";
import { SummaryCardProps } from "@/types/types";

const SummaryCard = ({
  title,
  number,
  bgColor,
  textColor,
  icon,
  label,
}: SummaryCardProps) => {
  return (
    <div
      className={`flex h-28 flex-1 flex-col justify-between rounded-xl p-4 ${bgColor}`}
    >
      <div className="flex justify-between">
        <p>{title}</p>
        <span className={`${textColor}`}>{icon}</span>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold">{number}</p>
        {label}
      </div>
    </div>
  );
};

export default SummaryCard;
