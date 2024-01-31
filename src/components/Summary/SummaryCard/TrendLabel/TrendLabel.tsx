import { TrendingDown } from "lucide-react";
import React from "react";

const TrendLabel = () => {
  return (
    <div className="flex w-16 h-6 items-center justify-center gap-x-2 rounded-xl bg-white">
      <TrendingDown size={12} />
      <p className="text-xs">18%</p>
    </div>
  );
};

export default TrendLabel;
