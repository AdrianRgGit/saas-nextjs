"use client";
import Breakdown from "@/components/Breakdown/Breakdown";
import Categories from "@/components/Categories/Categories";
import History from "@/components/History/History";
import Portfolio from "@/components/Portfolio/Portfolio";
import Summary from "@/components/Summary/Summary";
import { useFetchData } from "@/hooks/useFetchUserData";
import { Spinner } from "@nextui-org/react";

export default function Home() {
  const data = useFetchData();

  if (!data) {
    return <Spinner />;
  }

  return (
    <main className="flex flex-1 gap-x-10">
      <div className="flex flex-1 flex-col gap-y-12">
        <Summary />
        <Breakdown />
        <History />
      </div>
      <div className="rounded-xl bg-purple-2 p-6">
        <Portfolio />
        <Categories />
      </div>
    </main>
  );
}
