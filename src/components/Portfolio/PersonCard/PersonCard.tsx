import TrendLabel from "@/components/Comun/TrendLabel/TrendLabel";
import { PersonCardProps } from "@/types/types";
import { Avatar } from "@nextui-org/react";
import React from "react";

const PersonCard = ({ src, username, number }: PersonCardProps) => {
  return (
    <div className="flex w-64 items-center justify-between">
      <div className="flex items-center gap-x-4">
        <Avatar src={src} />
        <div>
          <p>{username}</p>
          <p className="text-xs">{number}</p>
        </div>
      </div>
      <TrendLabel />
    </div>
  );
};

export default PersonCard;
