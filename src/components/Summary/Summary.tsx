import { Bell, Plus } from "lucide-react";
import React from "react";
import SummaryCard from "./SummaryCard/SummaryCard";
import SummaryButton from "./SummaryButton/SummaryButton";

const Summary = () => {
  return (
    <section className="flex flex-col gap-y-10">
      <article className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Summary Dashboard</h1>
        <div className="flex gap-x-4">
          <SummaryButton bgColor="bg-purple-2" textColor="text-purple-3">
            <Plus />
          </SummaryButton>

          <SummaryButton bgColor="bg-purple-3" textColor="text-white-1">
            <Bell fill="white" />
          </SummaryButton>
        </div>
      </article>

      <article className="flex justify-between gap-x-12">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </article>
    </section>
  );
};

export default Summary;
