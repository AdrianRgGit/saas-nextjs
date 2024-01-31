import { Bell, Plus } from "lucide-react";
import React from "react";
import SummaryCard from "./SummaryCard/SummaryCard";

const Summary = () => {
  return (
    <section className="bg-green-500">
      <article className="flex">
        <h1>Summary Dashboard</h1>
        <button>
          <Plus />
        </button>
        <button>
          <Bell />
        </button>
      </article>

      <article className="flex justify-between gap-x-12 bg-red-50">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </article>
    </section>
  );
};

export default Summary;
