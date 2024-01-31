import { MoveUpRight } from "lucide-react";
import React from "react";
import PersonCard from "./PersonCard/PersonCard";

const Portfolio = () => {
  return (
    <div className="mb-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <span className="rounded bg-white-1 p-1">
          <MoveUpRight />
        </span>
      </div>

      <div className="flex flex-col gap-y-6">
        <PersonCard
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          username="Adrián"
          number="#12345"
        />
        <PersonCard
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          username="Adrián"
          number="#12345"
        />
        <PersonCard
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          username="Adrián"
          number="#12345"
        />
        <PersonCard
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          username="Adrián"
          number="#12345"
        />
      </div>
    </div>
  );
};

export default Portfolio;
