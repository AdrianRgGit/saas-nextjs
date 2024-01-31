import { Database } from "lucide-react";
import React from "react";
import TrendLabel from "../../Comun/TrendLabel/TrendLabel";

const SummaryCard = () => {
  return (
    <div className="flex h-28 flex-1 flex-col justify-between rounded-xl bg-orange-1 p-4">
      <div className="flex justify-between">
        <p>Signals</p>
        <Database fill="rgb(254 135 81)" />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold">257</p>
        <TrendLabel />
      </div>
    </div>
  );
};

export default SummaryCard;
