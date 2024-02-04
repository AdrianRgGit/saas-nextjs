import { Bell, Plus, Database, Star, DollarSign } from "lucide-react";
import React from "react";
import SummaryCard from "./SummaryCard/SummaryCard";
import SummaryButton from "./SummaryButton/SummaryButton";
import TrendLabel from "../Comun/TrendLabel/TrendLabel";
import { useUserData } from "@/store/userStore";

const Summary = () => {
  const bills = useUserData((state) => state.bills);
  const capital = useUserData((state) => state.capital);

  const avaiableBalance = capital - bills;

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
        <SummaryCard
          title="Signals"
          number={bills}
          bgColor="bg-orange-1"
          textColor="text-orange-2"
          icon={<Database />}
        />
        <SummaryCard
          title="Capital"
          number={capital}
          bgColor="bg-green-1"
          textColor="text-green-2"
          icon={<Star />}
        />
        <SummaryCard
          title="Avaiable Balance"
          number={avaiableBalance}
          bgColor="bg-purple-2"
          textColor="text-purple-3"
          icon={<DollarSign />}
          label={<TrendLabel />}
        />
      </article>
    </section>
  );
};

export default Summary;
