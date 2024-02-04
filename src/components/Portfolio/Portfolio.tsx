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
          src="https://source.unsplash.com/random/200x200?sig=1"
          username="Adrián"
          number="#12345"
        />
        <PersonCard
          src="https://source.unsplash.com/random/200x200?sig=2"
          username="María"
          number="#54321"
        />
        <PersonCard
          src="https://source.unsplash.com/random/200x200?sig=3"
          username="Alberto"
          number="#14231"
        />
        <PersonCard
          src="https://source.unsplash.com/random/200x200?sig=4"
          username="Ricardo"
          number="#76942"
        />
      </div>
    </div>
  );
};

export default Portfolio;
