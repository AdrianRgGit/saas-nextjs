import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const TrendLabel = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return (
    <div
      className={`flex h-6 w-16 items-center justify-center gap-x-2 rounded-xl bg-white ${randomNumber < 50 ? "text-red-500" : "text-green-500"}`}
    >
      {randomNumber < 50 ? (
        <TrendingDown size={12} />
      ) : (
        <TrendingUp size={12} />
      )}

      <p className="text-xs">{randomNumber}%</p>
    </div>
  );
};

export default TrendLabel;
